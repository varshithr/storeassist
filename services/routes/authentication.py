#! /usr/bin/python

from flask_restful import reqparse
from flask_restful import Resource
from flask import jsonify, abort, make_response, request, g, current_app, session
import MySQLdb
import collections
import logging
import sys
import os
import datetime as DT
import random
import uuid
import time
import traceback

from flask_inputs import Inputs
from flask_inputs.validators import JsonSchema
from jsonschema import validate

# timeout = 30.0 # seconds
#
# def OTP():
#     uid = uuid.uuid4()
#     RandomNumber = uid.hex[0:6]
#     print "RandomNumber",RandomNumber
#     #pass
# return jsonify({"status":"success", "response":RandomNumber})
#
# l = task.LoopingCall(OTP)
# l.start(timeout) # call every sixty seconds
#
# reactor.run()

OTP = {}


class ITAuthentication(Resource):

    def get(self):
        logger = logging.getLogger("ITAuthentication get")
        logger.info('Entered into ITAuthentication get method')

        try:
            uid = uuid.uuid4()
            RandomNumber = uid.hex[0:6]
            OTP["otp"] = RandomNumber
            logger.info('Exited from ITAuthentication get Method')
            return jsonify({"status": "success", "response": OTP})
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

    def post(self):
        logger = logging.getLogger("ITAuthentication post")
        logger.info('Entered into ITAuthentication post method')

        try:
            ITAuth = request.json

            if ITAuth["otp"] == OTP["otp"]:
                logger.info('Exited from ITAuthentication post Method')
                return jsonify({"status": "success",
                                "response": " OTP verified successfully "})
            else:
                logger.info('Exited from ITAuthentication post Method')
                return jsonify(
                    {"status": "failure", "response": " invalid OTP "})

        except BaseException:
            logger.info('Exited from ITAuthentication post Method')
            return jsonify({"status": "failure", "response": " invalid OPT "})

# class ITAuthentication(Resource):
#
#     def get(self):
#         logger = logging.getLogger("ITAuthentication get")
#         logger.info('Entered into ITAuthentication get method')
#
#         try:
#             cursor = current_app.appdb.cursor()
#             uid = uuid.uuid4()
#             RandomNumber = uid.hex[0:6]
#             query = """ INSERT INTO otp (otp) VALUES (%s) """
#             cursor.execute(query,(RandomNumber,))
#             current_app.appdb.commit()
#             newID = cursor.lastrowid
#
#         except:
#             return jsonify({"status":"failure", "response" : " OPT Already Used "})
#
#         sub_query = """ SELECT otp FROM otp where id = %s """
#         cursor.execute(sub_query,(newID,))
#         rv = cursor.fetchone()
#
#         logger.info('Exited from ITAuthentication get method')
#         return jsonify({"status":"success", "response":rv})

    # def post(self):
    #     logger = logging.getLogger("ITAuthentication post")
    #     logger.info('Entered into ITAuthentication post method')
    #
    #     try:
    #         ITAuth = request.json
    #         cursor = current_app.appdb.cursor()
    #
    #         query = """ SELECT o.id, o.generate_time, it.status FROM otp o
    #              left outer join it_authentication it on o.id = it.otp_id
    #              where o.otp = %s """
    #         cursor.execute(query, (ITAuth["otp"],) )
    #         rv = cursor.fetchone()
    #         expire_time = rv["generate_time"] + DT.timedelta(minutes = 5)
    #
    #     except:
    #         return jsonify({"status":"failure", "response" : " invalid OPT "})
    #
    #     entry_time = DT.datetime.now()
    #
    #     if rv["generate_time"] <= entry_time <= expire_time:
    #         if rv["status"] == "Verified":
    #             return jsonify({"status":"failure", "response" : " OTP already used "})
    #         else:
    #             sub_query = """ INSERT INTO it_authentication (store_id, otp_id, date, status) VALUES (%s, %s, %s, %s) """
    #             cursor.execute(sub_query, (ITAuth["store_id"], rv["id"], entry_time, ITAuth["status"]) )
    #             current_app.appdb.commit()
    #             return jsonify({"status":"success", "response" : " OTP verified successfully "})
    #     else:
    #         return jsonify({"status":"failure", "response" : " invalid OTP "})
    #
    #     logger.info('Exited from ITAuthentication post Method')


class CheckHistory(Resource):
    def get(self):
        logger = logging.getLogger("CheckHistory GET")
        logger.info('Entered into CheckHistory GET method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = int(request.args.get("store_id"))
            todate = request.args.get("businessDate")
            year = todate.split('-')[0]
            month = todate.split('-')[1]
            day = todate.split('-')[2]
            todaysdate = DT.date(int(year), int(month), int(day))
            daytninety = todaysdate - DT.timedelta(days=90)

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)
        query = """ SELECT cast(ch.checked_time as char) as 'Date', ch.store_id, ch.account_number as 'account', ch.cheque_number as 'number',
              cast(ch.amount as char) as amount , ch.auth_code as 'authcode' FROM  cheque_history ch
              where Date(checked_time) >= %s and ch.store_id = %s order by ch.id desc """
        cursor.execute(query, (daytninety, store_id))
        rv = cursor.fetchall()
        conn.close()
        return jsonify({"status": "success", "response": rv})
        logger.info('Exited from the CheckHistory Method')

    def post(self):
        logger = logging.getLogger("CheckHistory post")
        logger.info('Entered into CheckHistory method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            body = request.json
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

        query = """ INSERT INTO `cheque_history` (`cheque_number`,`account_number`,`routing_number`, `store_id`, `amount`, `auth_code`, `checked_time`)
        VALUES(%s, %s, %s, %s, %s, %s, %s) """
        cursor.execute(
            query,
            (body["checkNumber"],
             body["accountNumber"],
                body["routingNumber"],
                body["store_id"],
                body["amount"],
                body["authcode"],
                body["businessDate"]))
        newID = cursor.lastrowid
        conn.commit()
        conn.close()

        logger.info('Exited from the CheckHistory Method')
        return jsonify({"status": "success", "response": newID})


SmartSafeSchema = {
    'type': 'object',
    'properties': {
        'store': {'type': 'integer'},
        'dayid': {'type': 'integer'},
        'ts': {'type': 'string'},
        "eod": {
            'type': 'object',
            'properties': {
                "smartsafe": {
                    'type': 'array',
                    'properties': {
                        "etime": {'type': 'string'},
                        "etype": {'type': 'string'},
                        "bdate": {'type': 'string'},
                        "stacks": {
                            "type": "array",
                            'properties': {
                                "stype": {'type': 'string'},
                                "svault": {'type': 'integer'},
                                "sindex": {'type': 'integer'},
                                "form": {'type': 'string'},
                                "denomination": {'type': 'integer'},
                                "count": {'type': 'integer'},
                                "value": {'type': 'integer'}
                            },
                            "required": ["stype", "svault", "sindex", "form"]
                        }
                    },
                    "required": ["etime", "etype", "bdate", "stacks"]
                },
                "tankreadings": {
                    "type": "array",
                    'properties': {
                        "tankno": {'type': 'integer'},
                        "descr": {'type': 'string'},
                        "type": {'type': 'string'},
                        "inches": {'type': 'number'},
                        "gallons": {'type': 'number'},
                        "ullage": {'type': 'number'},
                        "water_inches": {'type': 'number'},
                        "temp": {'type': 'number'},
                        "ts": {'type': 'string'}
                    },
                    "required": ["tankno", "descr", "type", "inches", "gallons", "ullage", "water_inches", "temp", "ts"]
                },
                "mediashifts": {
                    "type": "array",
                    'properties': {
                        "recon_id": {'type': 'integer'},
                        "mediano": {'type': 'integer'},
                        "terminalno": {'type': 'integer'},
                        "shiftno": {'type': 'integer'},
                        "dlycount": {'type': 'number'},
                        "dlysales": {'type': 'number'},
                        "dlyoutsidesales": {'type': 'number'},
                        "dlyfuel": {'type': 'number'},
                        "dlyoutsidefuel": {'type': 'number'},
                        "dlyoutsidecount": {'type': 'number'},
                        "dlyttax": {'type': 'number'},
                        "ts": {'type': 'string'}
                    },
                    "required": ["recon_id", "mediano", "terminalno", "shiftno", "dlycount", "dlysales", "dlyoutsidesales", "dlyfuel", "dlyoutsidefuel", "dlyoutsidecount", "dlyttax", "ts"]
                }
            },
            "required": ["smartsafe", "mediashifts"]
        }
    },
    "required": ["store", "dayid", "ts", "eod"]
}


class SmartSafeSchemaApiInputs(Inputs):
    json = [JsonSchema(schema=SmartSafeSchema)]


class SmartSafe(Resource):
    def post(self):
        logger = logging.getLogger("SmartSafe for permanent tables")
        logger.info('Entered into SmartSafe post method')

        try:
            perm = request.json
            todaytime = DT.datetime.time(DT.datetime.now())
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)

            inputs = SmartSafeSchemaApiInputs(request)
            if not inputs.validate():
                return jsonify(success=False, errors=inputs.errors)

            date = (perm['ts'].replace('T', ' ').split('.')[0]).split(' ')[0]

        except BaseException:
            logger.error(
                'Either connection problem or unable to get url parameters',
                exc_info=True)

        try:
            query = """ SELECT * FROM pos_medshift where Date_Format(ts,'%%Y-%%m-%%d') = %s and store = %s """
            cursor.execute(query, (date, perm["store"]))
            rv = cursor.fetchall()

            if len(rv) > 0:
                logger.info('Exited from SmartSafe post method')
                return jsonify({"status": "success",
                                "response": "smart safe is already entered for store" + " " + str(smart['store']),
                                "API version": "1.0"})

            else:
                for m in perm["eod"]["smartsafe"]:
                    event = """ INSERT INTO sbx_event (store, etime, etype, dayid, bdate) VALUES (%s, %s, %s, %s, %s) """
                    cursor.execute(
                        event,
                        (perm['store'],
                         m["etime"].replace(
                            'T',
                            ' ').split('.')[0],
                            m["etype"],
                            perm["dayid"],
                            m["bdate"],
                         ))
                    newID = cursor.lastrowid

                    for i in m["stacks"]:
                        stack = """ INSERT INTO sbx_stack (event_id, stype, svault, sindex, form, denomination, count, value)
                          VALUES (%s, %s, %s, %s, %s, %s, %s, %s) """
                        cursor.execute(
                            stack,
                            (newID,
                             i["stype"],
                                i["svault"],
                                i["sindex"],
                                i["form"],
                                i["denomination"],
                                i["count"],
                                i["value"]))

                for k in perm["eod"]["mediashifts"]:
                    media = """ INSERT INTO pos_medshift (`recon_id`, `store`, `dayid`, `mediano`, `terminalno`, `shiftno`, `dlycount`, `dlysales`, `dlyoutsidesales`,
                         `dlyfuel`, `dlyoutsidefuel`, `dlyoutsidecount`, `dlytax`, `ts`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) """
                    cursor.execute(
                        media,
                        (k['recon_id'],
                         perm['store'],
                            perm["dayid"],
                            k["mediano"],
                            k["terminalno"],
                            k["shiftno"],
                            k["dlycount"],
                            k["dlysales"],
                            k["dlyoutsidesales"],
                            k["dlyfuel"],
                            k["dlyoutsidefuel"],
                            k["dlyoutsidecount"],
                            k["dlytax"],
                            k["ts"].replace(
                            'T',
                            ' ').split('.')[0]))

                for j in perm["eod"]["tankreadings"]:
                    tank = """ INSERT INTO tank_readings (`store`, `dayid`, `tankno`, `descr`, `inches`, `gallons`, `ullage`, `water_inches`, `temp`, `ts`, `bdate`, `type`)
                         VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) """
                    cursor.execute(
                        tank,
                        (perm['store'],
                         perm["dayid"],
                            j["tankno"],
                            j["descr"],
                            j["inches"],
                            j["gallons"],
                            j["ullage"],
                            j["water_inches"],
                            j["temp"],
                            j["ts"].replace(
                            'T',
                            ' ').split('.')[0],
                            j["ts"].replace(
                            'T',
                            ' ').split('.')[0].split(' ')[0],
                            j["type"]))

                conn.commit()
                conn.close()

                logger.info('Exited from SmartSafe post method')
                return jsonify(
                    {"status": "success", "response": perm, "API version": "1.0"})

        except KeyError as e:
            traceback.print_exc()
            logger.info('Exited from SmartSafe post method')
            return make_response("HTTP Error 400 - JSON input invalid", 400)
        except BaseException:
            traceback.print_exc()
            logger.info('Exited from SmartSafe post method')
            return make_response("Internal Server Error", 500)


SmartSafeTempSchema = {
    'type': 'object',
    'properties': {
        'store': {'type': 'integer'},
        'dayid': {'type': 'integer'},
        'ts': {'type': 'string'},
        "checkin": {
            'type': 'object',
            'properties': {
                "smartsafe": {
                    'type': 'array',
                    'properties': {
                        "etime": {'type': 'string'},
                        "etype": {'type': 'string'},
                        "stacks": {
                            "type": "array",
                            'properties': {
                                "stype": {'type': 'string'},
                                "svault": {'type': 'integer'},
                                "sindex": {'type': 'integer'},
                                "form": {'type': 'string'},
                                "denomination": {'type': 'integer'},
                                "count": {'type': 'integer'},
                                "value": {'type': 'integer'}
                            }, "required": ["stype", "svault", "sindex", "form"]
                        }
                    }, "required": ["etime", "etype", "stacks"]
                },
                "tankreadings": {
                    "type": "array",
                    'properties': {
                        "tankno": {'type': 'integer'},
                        "descr": {'type': 'string'},
                        "inches": {'type': 'number'},
                        "gallons": {'type': 'number'},
                        "ullage": {'type': 'number'},
                        "water_inches": {'type': 'number'},
                        "temp": {'type': 'number'},
                        "ts": {'type': 'string'}
                    }, "required": ["tankno", "descr", "inches", "gallons", "ullage", "water_inches", "temp", "ts"]
                },
                "mediashifts": {
                    "type": "array",
                    'properties': {
                        "mediano": {'type': 'integer'},
                        "terminalno": {'type': 'integer'},
                        "shiftno": {'type': 'integer'},
                        "dlycount": {'type': 'number'},
                        "dlysales": {'type': 'number'},
                        "dlyoutsidesales": {'type': 'number'},
                        "dlyfuel": {'type': 'number'},
                        "dlyoutsidefuel": {'type': 'number'},
                        "dlyoutsidecount": {'type': 'number'},
                        "dlytax": {'type': 'number'},
                        "ts": {'type': 'string'}
                    }, "required": ["mediano", "terminalno", "shiftno", "dlycount", "dlysales", "dlyoutsidesales", "dlyfuel", "dlyoutsidefuel", "dlyoutsidecount", "dlytax", "ts"]
                }
            }, "required": ["smartsafe", "tankreadings", "mediashifts"]
        }
    },
    "required": ["store", "dayid", "ts", "checkin"]
}


class SmartSafeTempSchemaApiInputs(Inputs):
    json = [JsonSchema(schema=SmartSafeTempSchema)]


class SmartSafeTemp(Resource):
    def post(self):
        logger = logging.getLogger("SmartSafe for temp tables")
        logger.info('Entered into SmartSafeTemp post method')

        try:
            smart = request.json
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)

            inputs = SmartSafeTempSchemaApiInputs(request)
            if not inputs.validate():
                return jsonify(success=False, errors=inputs.errors)

        except BaseException:
            logger.error(
                'Either connection problem or unable to get url parameters',
                exc_info=True)

        try:

            date = (smart['ts'].replace('T', ' ').split('.')[0]).split(' ')[0]

            delete_event_temp = """ DELETE FROM `sbx_event_tmp` WHERE store = %s """
            cursor.execute(delete_event_temp, (smart['store'],))
            delete_stack_temp = """ DELETE FROM `sbx_stack_tmp` WHERE store = %s """
            cursor.execute(delete_stack_temp, (smart['store'],))
            delete_tank_temp = """ DELETE FROM `tank_readings_tmp` WHERE store = %s """
            cursor.execute(delete_tank_temp, (smart['store'],))
            delete_pos_temp = """ DELETE FROM `pos_medshift_tmp` WHERE store = %s """
            cursor.execute(delete_pos_temp, (smart['store'], ))

            query = """ SELECT * FROM pos_medshift_tmp where date(ts) = %s and store = %s """
            cursor.execute(query, (date, smart["store"]))
            rv = cursor.fetchall()

            if len(rv) > 0:
                conn.close()
                logger.info('Exited from SmartSafeTemp post method')
                return jsonify({"status": "success",
                                "response": "smart safe is already entered for store" + " " + str(smart['store']),
                                "API version": "1.0"})

            else:
                for m in smart["checkin"]["smartsafe"]:

                    if m["etype"] == "contents":
                        event = """ INSERT INTO sbx_event_tmp (store, etime, etype, dayid) VALUES (%s, %s, %s, %s) """
                        cursor.execute(
                            event, (smart['store'], m["etime"].replace(
                                'T', ' ').split('.')[0], m["etype"], smart["dayid"]))

                        for i in m["stacks"]:
                            stack = """ INSERT INTO sbx_stack_tmp (`store`, `stype`, `svault`, `sindex`, `form`, `denomination`, `count`, `value`)
                                  VALUES (%s, %s, %s, %s, %s, %s, %s, %s) """
                            cursor.execute(
                                stack,
                                (smart['store'],
                                 i["stype"],
                                    i["svault"],
                                    i["sindex"],
                                    i["form"],
                                    i["denomination"],
                                    i["count"],
                                    i["value"]))

                    else:
                        event = """ INSERT INTO sbx_event (store, etime, etype, dayid, bdate) VALUES (%s, %s, %s, %s, %s) """
                        cursor.execute(
                            event, (smart['store'], m["etime"].replace(
                                'T', ' ').split('.')[0], m["etype"], smart["dayid"], m["etime"].replace(
                                'T', ' ').split('.')[0].split(' ')[0]))
                        newID = cursor.lastrowid

                        for i in m["stacks"]:
                            stack = """ INSERT INTO sbx_stack (event_id, stype, svault, sindex, form, denomination, count, value)
                              VALUES (%s, %s, %s, %s, %s, %s, %s, %s) """
                            cursor.execute(
                                stack,
                                (newID,
                                 i["stype"],
                                    i["svault"],
                                    i["sindex"],
                                    i["form"],
                                    i["denomination"],
                                    i["count"],
                                    i["value"]))

                for j in smart["checkin"]["tankreadings"]:
                    tank = """ INSERT INTO tank_readings_tmp (`store`, `dayid`, `tankno`, `descr`, `inches`, `gallons`, `ullage`, `water_inches`, `temp`, `ts`)
                         VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s) """
                    cursor.execute(
                        tank,
                        (smart['store'],
                         smart["dayid"],
                            j["tankno"],
                            j["descr"],
                            j["inches"],
                            j["gallons"],
                            j["ullage"],
                            j["water_inches"],
                            j["temp"],
                            j["ts"].replace(
                            'T',
                            ' ').split('.')[0]))

                for k in smart["checkin"]["mediashifts"]:
                    media = """ INSERT INTO pos_medshift_tmp (`store`, `dayid`, `mediano`, `terminalno`, `shiftno`, `dlycount`, `dlysales`, `dlyoutsidesales`,
                         `dlyfuel`, `dlyoutsidefuel`, `dlyoutsidecount`, `dlytax`, `ts`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) """
                    cursor.execute(
                        media,
                        (smart['store'],
                         smart["dayid"],
                            k["mediano"],
                            k["terminalno"],
                            k["shiftno"],
                            k["dlycount"],
                            k["dlysales"],
                            k["dlyoutsidesales"],
                            k["dlyfuel"],
                            k["dlyoutsidefuel"],
                            k["dlyoutsidecount"],
                            k["dlytax"],
                            k["ts"].replace(
                            'T',
                            ' ').split('.')[0]))
                conn.commit()
                conn.close()
                logger.info('Exited from SmartSafeTemp post method')
                return jsonify(
                    {"status": "success", "response": smart, "API version": "1.0"})

        except KeyError as e:
            traceback.print_exc()
            logger.info('Exited from SmartSafeTemp post method')
            return make_response("HTTP Error 400 - JSON input invalid", 400)
        except BaseException:
            traceback.print_exc()
            logger.info('Exited from SmartSafeTemp post method')
            return make_response("Internal Server Error", 500)


MovieQuikClosingSchema = {
    'type': 'object',
    'properties': {
        'closedate': {'type': 'string'},
        'location_id': {'type': 'integer'},
    }, "required": ["closedate", "location_id"]
}


class MovieQuikClosingSchemaApiInputs(Inputs):
    json = [JsonSchema(schema=MovieQuikClosingSchema)]


class MovieQuikClosing(Resource):
    def post(self):
        logger = logging.getLogger("MovieQuikClosing API")
        logger.info('Entered into MovieQuikClosing post method')

        try:
            closedate = (
                request.json['closedate'].replace(
                    'T', ' ').split('.')[0]).split(' ')[0]
            location_id = request.json['location_id']
            mq_conn = current_app.mqdb.get_connection()
            cursor = mq_conn.cursor(dictionary=True, buffered=True)

            inputs = MovieQuikClosingSchemaApiInputs(request)
            if not inputs.validate():
                return jsonify(success=False, errors=inputs.errors)

        except BaseException:
            logger.error(
                'Either connection problem or unable to get url parameters',
                exc_info=True)

        try:
            payments_query = """ SELECT  cast(sum(i.amount) as char) as amt from invt_trans i left join invt_tran_types t on i.type_id = t.id
                           where i.location_id = %s and i.bdate is null and date(i.created) <= %s and t.descr = 'Payment' """
            cursor.execute(payments_query, (location_id, closedate))
            payments = cursor.fetchall()

            coupons_query = """ SELECT cast(sum(c.amount) as char) as amt from coupon_trans c where c.location_id = %s and c.bdate is null and date(c.created) <= %s """
            cursor.execute(coupons_query, (location_id, closedate))
            coupons = cursor.fetchall()

            if not len(payments):
                mq_conn.close()
                logger.info('Exited from MovieQuikClosing post method')
                return jsonify(
                    {
                        "status": "success",
                        "response": "No data available or Business date already updated for store" +
                        " " +
                        str(location_id),
                        "API version": "1.0"})

            else:
                if not len(coupons):
                    total_sales = payments[0]["amt"]

                else:
                    total_sales = float(
                        payments[0]['amt']) + float(coupons[0]['amt'])

                def get_bdate():
                    try:
                        conn = current_app.appdb.get_connection()
                        s_cursor = conn.cursor(dictionary=True, buffered=True)
                    except BaseException:
                        logger.error('DB Connection error', exc_info=True)

                    query = """ SELECT cast(max(bdate) as char) Businessdate FROM cash_recons where store = %s
                          and type = "endofday" and status = "Complete" """
                    s_cursor.execute(query, (location_id, ))
                    rv = s_cursor.fetchone()
                    conn.close()

                    year = rv["Businessdate"].split('-')[0]
                    month = rv["Businessdate"].split('-')[1]
                    day = rv["Businessdate"].split('-')[2]
                    dat = DT.date(int(year), int(month), int(day))
                    bdate = str(dat + DT.timedelta(days=1))
                    return bdate

                bdate = get_bdate()
                updtrans = """ UPDATE invt_trans set bdate = %s where location_id = %s and bdate is null and created <= %s """
                cursor.execute(updtrans, (bdate, location_id, closedate))
                updtrans = """ UPDATE coupon_trans set bdate = %s where location_id = %s and bdate is null and created <= %s """
                cursor.execute(updtrans, (bdate, location_id, closedate))

                mq_conn.commit()
                mq_conn.close()

                logger.info('Exited from MovieQuikClosing post method')
                return jsonify(
                    {"status": "success", "response": total_sales, "API version": "1.0"})

        except KeyError as e:
            traceback.print_exc()
            logger.info('Exited from MovieQuikClosing post method')
            return make_response("HTTP Error 400 - JSON input invalid", 400)
        except BaseException:
            traceback.print_exc()
            logger.info('Exited from MovieQuikClosing post method')
            return make_response("Internal Server Error", 500)
