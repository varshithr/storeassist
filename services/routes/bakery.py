from flask_restful import reqparse
from flask_restful import Resource
from flask import jsonify, abort, make_response, request, g, current_app
import MySQLdb
import collections
import logging
import datetime as DT

from flask_inputs import Inputs
from wtforms.validators import DataRequired

from flask_inputs.validators import JsonSchema
from jsonschema import validate


class BakeryOrders(Resource):
    def get(self):
        logger = logging.getLogger("BakeryOrders")
        logger.info('Entered into BakeryOrders get  method')

        try:

            store_id = int(request.args.get("store_id"))
            date = str(request.args.get("date"))
            conn = current_app.bakerydb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """  SELECT ts.id AS ID, tr.id AS requests_id, cast(tc.sku as char) as sku, cast(ts.nbr as char) as nbr, cast(ts.descr as char) as descr,
              cast(ts.pick_nbr as char) as pick_nbr, cast(ifnull(on_hand_qty, 0) as char) as on_hand_qty, cast(ifnull(tr.return_qty, 0) as char) as return_qty,
              tr.active from tr_skus ts
              inner join tr_sku_custs tc on tc.sku = ts.nbr
              left outer join tr_requests tr on ts.nbr = tr.nbr and tr.store = %s and cast(tr.order_datetime as char) = %s
              where tc.cust = 1 and ts.active = 1 and tc.display = 1 group by ID, descr, requests_id, sku, nbr, pick_nbr, tr.active """
        # union all
        #             SELECT null AS ID, null AS requests_id, null AS  sku, null AS nbr, null AS descr,
        #       null AS  pick_nbr, null AS on_hand_qty, null AS return_qty,  tr.active,
        #       cast(sum(tr.on_hand_qty) as char) AS on_hand_total, cast(sum(tr.return_qty) as char) AS return_total
        #       from tr_skus ts
        #       inner join tr_sku_custs tc on tc.sku = ts.nbr
        #       left outer join tr_requests tr on ts.nbr = tr.nbr and tr.store = %s and tr.date = %s
        # where tc.cust = 1 and ts.active = 1 and tc.display = 1 group by ID,
        # descr, requests_id, sku, nbr, pick_nbr, tr.active """
        cursor.execute(query, (store_id, date))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the BakeryOrders Method')
        return jsonify({"status": "success", "response": rv})

    def post(self):
        logger = logging.getLogger("BakeryOrders post")
        logger.info('Entered into BakeryOrders method')

        try:
            BakeryOrders = request.json
            conn = current_app.bakerydb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

        for value in BakeryOrders:
            if int(value['order_id']) > 0:
                if value['on_hand_qty'] == 'null' and value['return_qty'] == 'null':
                    query = """ DELETE from tr_requests where id = %s """
                    cursor.execute(query, (value['order_id'], ))
                    conn.commit()

                else:
                    updatequery = """ UPDATE tr_requests SET on_hand_qty = %s, return_qty = %s, last_modified = %s, active = %s WHERE id = %s """
                    cursor.execute(
                        updatequery,
                        (value["on_hand_qty"],
                         value["return_qty"],
                            value["last_modified"],
                            value["active"],
                            value["order_id"]))
                    conn.commit()
            else:
                query = """ INSERT INTO tr_requests (store, nbr, descr, on_hand_qty, return_qty, order_datetime, delivery_date, active) VALUES (%s, %s, %s, %s, %s, %s, %s, %s) """
                cursor.execute(
                    query,
                    (value["store_id"],
                     value["nbr"],
                        value["descr"],
                        value["on_hand_qty"],
                        value["return_qty"],
                        value["ordertime"],
                        value["date"],
                        value["active"]))
                conn.commit()
        conn.close()

        logger.info('Exited from BakeryOrders post method')
        return jsonify({"status": "success"})


class BakeryOrdersHistory(Resource):
    def get(self):
        logger = logging.getLogger("BakeryOrdersHistory")
        logger.info('Entered into BakeryOrdersHistory get  method')

        try:
            store_id = int(request.args.get("store_id"))
            todate = request.args.get("businessDate")
            year = todate.split('-')[0]
            month = todate.split('-')[1]
            day = todate.split('-')[2]
            todaysdate = DT.date(int(year), int(month), int(day))
            daytninety = todaysdate - DT.timedelta(days=90)
            conn = current_app.bakerydb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT cast(delivery_date as char) as DATE, cast(order_datetime as char) as order_time, cast(sum(on_hand_qty) as char) as on_hand_qty,
              cast(sum(return_qty) as char) as return_qty, active FROM tr_requests
              where delivery_date >= %s and store = %s group by order_datetime, date, active order by date desc """
        cursor.execute(query, (daytninety, store_id))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the BakeryOrdersHistory Method')
        return jsonify({"status": "success", "response": rv})


class ManualGasDipActions(Resource):
    def get(self):
        logger = logging.getLogger("ManualGasDipActions get")
        logger.info('Entered into ManualGasDipActions get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = int(request.args.get("store_id"))
            reported_date = str(request.args.get("date"))

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT tr.tankno as tank, tr.descr as description, dk.init, dk.status,
              CAST(tr.water_inches as char) AS water,  dk.dipped_yn, CAST(date(tr.ts) as char) AS Date
              from drpmpchk dk
              inner join tank_readings tr on tr.store = dk.store and tr.type = "mgd"
		      where dk.store = %s  and dk.date = %s and date(tr.ts) = %s """
        cursor.execute(query, (store_id, reported_date, reported_date))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the ManualGasDipActions get Method')
        return jsonify({"status": "success", "response": rv})


class ManualGasDipReport(Resource):
    def get(self):
        logger = logging.getLogger("ManualGasDipReport get")
        logger.info('Entered into ManualGasDipReport get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = int(request.args.get("store_id"))
            reported_date = str(request.args.get("date"))

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        sub_query = """ SELECT tr.tankno AS tank, tr.descr AS description, CAST(tr.water_inches as char) AS water,
              dk.init, dk.status, dk.dipped_yn, CAST(tr.bdate as char) AS Date
              FROM drpmpchk dk
              inner join tank_readings tr on tr.store = dk.store and tr.type = "mgd"
              where dk.store = %s and dk.date = %s and date(tr.ts) = %s """
        cursor.execute(sub_query, (store_id, reported_date, reported_date))
        rv = cursor.fetchall()

        if len(rv) > 0:
            conn.close()
            logger.info('Exited from the ManualGasDipReport get Method')
            return jsonify({"status": "success", "response": rv})
        else:
            query = """ SELECT trt.tankno as tank, trt.descr as description, trt.dayid, CAST(trt.inches as char) AS inches, CAST(trt.ullage as char) AS ullage,
                  CAST(trt.gallons as char) AS gallons, CAST(trt.water_inches as char) AS water, CAST(trt.temp as char) AS temp, CAST(trt.ts as char) AS ts
                  from tank_readings_tmp trt
                  where trt.store = %s and trt.ts >= DATE_SUB(NOW(),INTERVAL 10 MINUTE) """
            cursor.execute(query, (store_id, ))
            result = cursor.fetchall()
            conn.close()

            logger.info('Exited from the ManualGasDipReport get Method')
            return jsonify({"status": "success", "response": result})

    def post(self):
        logger = logging.getLogger("ManualGasDipReport post")
        logger.info('Entered into ManualGasDipReport method')

        try:
            GasDipReport = request.json
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            dat = str(GasDipReport["reported_date"].split(' ')[0])
            tim = GasDipReport["reported_date"].split(' ')[1].split(':')
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

        sub_query = """ SELECT * FROM drpmpchk where bdate = %s and store = %s """
        cursor.execute(sub_query, (dat, GasDipReport["store_id"]))
        rv = cursor.fetchall()

        if len(rv) > 0:

            query = """ UPDATE drpmpchk SET init = %s, dipped_yn = %s, status = %s WHERE store = %s AND date = %s """
            cursor.execute(
                query,
                (GasDipReport["init"],
                 GasDipReport["dipped_yn"],
                 GasDipReport["status"],
                 GasDipReport["store_id"],
                 dat))
            for value in GasDipReport["DipReport"]:
                updatequery = """ UPDATE `tank_readings` SET `water_inches` = %s
                WHERE `store` = %s AND date(ts) = %s AND `tankno` = %s """
                cursor.execute(
                    updatequery,
                    (value["water"],
                     GasDipReport["store_id"],
                        dat,
                        value["tank"]))
            conn.commit()
        else:
            query = """ INSERT INTO `drpmpchk` (`store`, `bdate`, `date`, `hr`, `min`, `sec`, `init`, `dipped_yn`, `status`)
                  VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s) """
            cursor.execute(
                query,
                (GasDipReport["store_id"],
                 dat,
                 dat,
                 tim[0],
                    tim[1],
                    tim[2],
                    GasDipReport["init"],
                    GasDipReport["dipped_yn"],
                    GasDipReport["status"]))
            for value in GasDipReport["DipReport"]:
                updatequery = """ INSERT INTO `tank_readings` (`store`, `dayid`, `tankno`, `descr`, `inches`, `gallons`, `ullage`, `water_inches`, `temp`, `ts`, `type`)
                            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) """
                cursor.execute(
                    updatequery,
                    (GasDipReport["store_id"],
                     value["dayid"],
                        value["tank"],
                        value['description'],
                        value['inches'],
                        value['gallons'],
                        value['ullage'],
                        value['water'],
                        value['temp'],
                        value['ts'],
                        value['type']))
            conn.commit()
        conn.close()

        logger.info('Exited from the ManualGasDipReport Method')
        return jsonify({"status": "success"})


class DipReportmaxdate(Resource):
    def get(self):
        logger = logging.getLogger("DipReportmaxdate get")
        logger.info('Entered into DipReportmaxdate get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = int(request.args.get("store_id"))

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT tr.tankno AS tank, tr.descr AS description, '0.00' AS water,
               cast(tr.gallons as char) as gallons, cast(tr.temp as char) as temp,
               tr.dayid, CAST(tr.inches as char) AS inches, cast(tr.ullage as char) AS ullage
              FROM drpmpchk dk
              inner join tank_readings tr on tr.store = dk.store and tr.type = "mgd"
              where dk.store = %s and dk.date = (SELECT max(date) FROM drpmpchk where store = %s)
              and date(tr.ts) = (SELECT max(date) FROM drpmpchk where store = %s) """
        cursor.execute(query, (store_id, store_id, store_id))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the DipReportmaxdate Method')
        return jsonify({"status": "success", "response": rv})


class ManualGasDipHistory(Resource):
    def get(self):
        logger = logging.getLogger("ManualGasDipHistory get")
        logger.info('Entered into ManualGasDipHistory get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = request.args.get("store_id")
            todate = request.args.get("businessDate")
            year = todate.split('-')[0]
            month = todate.split('-')[1]
            day = todate.split('-')[2]
            todaysdate = DT.date(int(year), int(month), int(day))
            daytninety = todaysdate - DT.timedelta(days=90)
        except Exception as err:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT cast(date as char) as date, init, concat(lpad(hr,2,0),':',lpad(min,2,0),':',lpad(sec,2,0)) as time, dipped_yn, status, cast(bdate as char) as bdate
              FROM drpmpchk where (date >= %s) and store = %s order by date desc """
        cursor.execute(query, (daytninety, store_id))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the ManualGasDipHistory get Method')
        return jsonify({"status": "success", "response": rv})


class CashReconciliation(Resource):
    def get(self):
        logger = logging.getLogger("CashReconciliation get")
        logger.info('Entered into CashReconciliation get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            # messageconn = current_app.messagedb.get_connection()
            # messagecursor = messageconn.cursor(dictionary=True,buffered=True)
            bakeryconn = current_app.bakerydb.get_connection()
            bakerycursor = bakeryconn.cursor(dictionary=True, buffered=True)
            store_id = int(request.args.get("store_id"))
            bdate = str(request.args.get("date"))
            mediano = request.args.get("mediano")
            etype = "endofday"
            Type = request.args.get("type")
            yesterday = str(request.args.get("today"))
            cur_date = str(request.args.get("curdate"))
            rv = {}
            rv["checkin"] = []
            rv["pickup"] = []
            rv["Cash_Sales"] = "0.00"
            # today = str(DT.date.today())
            # yesterday = str(DT.date.today() - DT.timedelta(days=1))
            # dayBeforeYesterday = str(DT.date.today() - DT.timedelta(days=2))
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        # sbx_query = """ SELECT sbx FROM Stores where Store = %s """
        # messagecursor.execute(sbx_query, (store_id, ))
        # sbxvalue = messagecursor.fetchone()

        eid_query = """ SELECT * from sbx_event_tmp where store = %s and etime >= DATE_SUB(NOW(),INTERVAL 10 MINUTE) """
        cursor.execute(eid_query, (store_id, ))
        eid = cursor.fetchall()

        if Type == "endofday":
            Changeorderquery = """ SELECT  order_status FROM change_order where store_id = %s and bdate is null and received_status = "Save" """
            cursor.execute(Changeorderquery, (store_id, ))
            changeorder = cursor.fetchall()
            if len(changeorder) > 0:
                rv["ChangeOrderStatus"] = "Save"
            else:
                rv["ChangeOrderStatus"] = "Complete"

            Cashreconquery = """ SELECT cr.status FROM cash_recons cr where cr.store = %s and date(cr.bdate) = %s and cr.type = "checkin" and cr.status = "Save" """
            cursor.execute(Cashreconquery, (store_id, bdate))
            Cash = cursor.fetchall()
            if len(Cash) > 0:
                rv["ShiftCheckInStatus"] = "Save"
            else:
                rv["ShiftCheckInStatus"] = "Complete"

            Gasdipquery = """ SELECT status FROM drpmpchk where store = %s and date = %s and status = "Save" """
            cursor.execute(Gasdipquery, (store_id, bdate))
            gas = cursor.fetchall()
            if len(gas) > 0:
                rv["GasDipStatus"] = "Save"
            else:
                rv["GasDipStatus"] = "Complete"

            bakeryquery = """ SELECT active FROM tr_requests where store = %s and cast(DATE(order_datetime) as char) = %s and active = "Save" """
            bakerycursor.execute(bakeryquery, (store_id, cur_date))
            bakery = bakerycursor.fetchall()
            if len(bakery) > 0:
                rv["BakeryOrderStatus"] = "Save"
            else:
                rv["BakeryOrderStatus"] = "Complete"

            if len(changeorder) > 0 or len(Cash) > 0 or len(
                    gas) > 0 or len(bakery) > 0:

                conn.close()
                bakeryconn.close()
                logger.info('Exited from the CashReconciliation Method')
                return jsonify({"status": "success", "response": rv})

            sub_query = """ SELECT CAST(sum(dlysales) as char) AS Cash_Sales FROM pos_medshift where store = %s and mediano = %s and date(ts) = %s """
            cursor.execute(sub_query, (store_id, mediano, bdate))
            CashSales = cursor.fetchall()
            rv["Cash_Sales"] = '0'
            if CashSales[0]["Cash_Sales"]:
                rv["Cash_Sales"] = str(
                    round(float(CashSales[0]["Cash_Sales"]), 2))

        else:
            sub_query = """ SELECT CAST(sum(dlysales) as char) AS Cash_Sales FROM pos_medshift_tmp where store = %s and mediano = %s
                      and ts >= DATE_SUB(NOW(),INTERVAL 10 MINUTE) """
            cursor.execute(sub_query, (store_id, mediano))
            CashSales = cursor.fetchall()
            rv["Cash_Sales"] = '0'
            if CashSales[0]["Cash_Sales"]:
                rv["Cash_Sales"] = str(
                    round(float(CashSales[0]["Cash_Sales"]), 2))

        EndingCash = """ SELECT cast(ending_cash as char) as Beginning_Cash, cast(checks as char) previous_checks FROM cash_recons where type = %s and store = %s and date(datetime) = %s """
        cursor.execute(EndingCash, (etype, store_id, yesterday))
        EndCash = cursor.fetchall()
        rv["Beginning_Cash"] = '0'
        if len(EndCash) > 0:
            rv["Beginning_Cash"] = EndCash[0]["Beginning_Cash"]
            rv["previous_checks"] = EndCash[0]["previous_checks"]
        else:
            rv["previous_checks"] = None

        change = """ SELECT cast(sum(received_amount) as char) as Change_Orders FROM change_order co
               inner join change_order_details cod on co.id = cod.change_order_id
               where store_id = %s and bdate is null and received_status = 'Complete' """
        cursor.execute(change, (store_id, ))
        orderamount = cursor.fetchall()
        if len(orderamount) > 0:
            rv.update(orderamount[0])
        if not rv["Change_Orders"]:
            rv["Change_Orders"] = '0'

        # if sbxvalue["sbx"] == 1 and len(eid) > 0:
        if len(eid) > 0:
            query = """ SELECT store, stype, cast(sum(value/100) as char) value from sbx_stack_tmp where store = %s group by stype """
            cursor.execute(query, (store_id, ))
            result = cursor.fetchall()
            if len(result) > 0:
                rv["checkin"] = result

            pickup_query = """ SELECT se.store, ss.stype, cast(sum(ss.value/100) as char) value from sbx_stack ss
                            inner join sbx_event se on se.id = ss.event_id
                            where se.store = %s  and se.bdate = %s and se.etype ='pickup'
                            group by ss.stype """
            cursor.execute(pickup_query, (store_id, bdate))
            pickup_result = cursor.fetchall()
            rv["pickup"] = pickup_result

        conn.close()
        bakeryconn.close()
        # messageconn.close()

        logger.info('Exited from the CashReconciliation Method')
        return jsonify({"status": "success", "response": rv})

    def post(self):
        logger = logging.getLogger("CashReconciliation post")
        logger.info('Entered into CashReconciliation method')

        try:
            CashRecon = request.json
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            etype = "checkin"
            Status = "Complete"
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

        if CashRecon["insert_flag"] == "true":

            event_prm = """ INSERT INTO `sbx_event` (`store`, `etime`, `etype`, `dayid`, `bdate`) select `store`,
                      `etime`, %s, `dayid`, %s from sbx_event_tmp where store = %s """
            cursor.execute(
                event_prm,
                (etype,
                 CashRecon["reported_date"],
                    CashRecon["store_id"]))
            newID = cursor.lastrowid

            stack_prm = """ INSERT INTO `sbx_stack` (`event_id`, `stype`, `svault`, `sindex`, `form`, `denomination`, `count`, `value`)
                      select %s, `stype`, `svault`, `sindex`, `form`, `denomination`, `count`, `value` from sbx_stack_tmp
                      where store = %s"""
            cursor.execute(stack_prm, (newID, CashRecon["store_id"]))
            conn.commit()

        def Endofdayaction():

            Changereceivedquery = """ UPDATE `change_order` SET `bdate` = %s WHERE `store_id` = %s and `received_status` = %s and bdate is NULL """
            cursor.execute(
                Changereceivedquery,
                (CashRecon["businessDate"],
                 CashRecon["store_id"],
                    Status))

            CardCheckReport = """ UPDATE `card_reader_report` SET `bdate` = %s WHERE reported_date = %s and  store_id = %s """
            cursor.execute(
                CardCheckReport,
                (CashRecon["businessDate"],
                 CashRecon["reported_date"],
                    CashRecon["store_id"]))

            ItPayment = """ UPDATE `it_payment_report` SET `bdate` = %s WHERE reported_date = %s and  store_id = %s """
            cursor.execute(
                ItPayment,
                (CashRecon["businessDate"],
                 CashRecon["reported_date"],
                    CashRecon["store_id"]))

            Changereceivedquery = """ UPDATE `change_order` SET `bdate` = %s, `received_status` = %s WHERE `store_id` = %s and date(`received_time`) = %s """
            cursor.execute(
                Changereceivedquery,
                (CashRecon["businessDate"],
                 Status,
                 CashRecon["store_id"],
                    CashRecon["reported_date"]))

            Gasdipquery = """ UPDATE `drpmpchk` SET `bdate` = %s WHERE `store` = %s AND `date` = %s """
            cursor.execute(
                Gasdipquery,
                (CashRecon["businessDate"],
                 CashRecon["store_id"],
                    CashRecon["reported_date"]))

            Tankquery = """ UPDATE `tank_readings` SET `bdate` = %s WHERE store = %s AND date(ts) = %s """
            cursor.execute(
                Tankquery,
                (CashRecon["businessDate"],
                 CashRecon["store_id"],
                    CashRecon["reported_date"]))

            conn.commit()

        if CashRecon["type"] == "endofday" and CashRecon["Status"] == "Complete":

            if CashRecon["cash_recon_id"] > 0:
                query = """ UPDATE cash_recons SET datetime = %s, register = %s, drawer = %s, top_of_safe = %s, change_fund = %s, ending_cash = %s, drops = %s,
                          checks = %s, change_orders = %s, todays_cash = %s, cash_sales = %s, over_short = %s, status = %s WHERE id = %s """
                cursor.execute(
                    query,
                    (CashRecon["dateTime"],
                     CashRecon["Registers"],
                        CashRecon["Drawer"],
                        CashRecon["Top_of_Safe"],
                        CashRecon["Change_Fund"],
                        CashRecon["Ending_Cash"],
                        CashRecon["Drops"],
                        CashRecon["Checks"],
                        CashRecon["Change_Orders"],
                        CashRecon["Todays_Cash"],
                        CashRecon["Cash_Sales"],
                        CashRecon["Over_Short"],
                        CashRecon["Status"],
                        CashRecon["cash_recon_id"]))
                conn.commit()
                Endofdayaction()

            else:
                query = """ INSERT INTO cash_recons (store, type, datetime, initials, register, drawer, top_of_safe, change_fund, ending_cash,
                      drops, checks, change_orders, beginning_cash, todays_cash, cash_sales, over_short, status, bdate) VALUES (%s, %s,
                      %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) """
                cursor.execute(
                    query,
                    (CashRecon["store_id"],
                     CashRecon["type"],
                        CashRecon["dateTime"],
                        CashRecon["initials"],
                        CashRecon["Registers"],
                        CashRecon["Drawer"],
                        CashRecon["Top_of_Safe"],
                        CashRecon["Change_Fund"],
                        CashRecon["Ending_Cash"],
                        CashRecon["Drops"],
                        CashRecon["Checks"],
                        CashRecon["Change_Orders"],
                        CashRecon["Beginning_Cash"],
                        CashRecon["Todays_Cash"],
                        CashRecon["Cash_Sales"],
                        CashRecon["Over_Short"],
                        CashRecon["Status"],
                        CashRecon["businessDate"]))
                conn.commit()
                Endofdayaction()

        else:
            if CashRecon["cash_recon_id"] > 0:
                query = """ UPDATE cash_recons SET datetime = %s, register = %s, initials= %s,  drawer = %s, top_of_safe = %s, change_fund = %s, ending_cash = %s, drops = %s,
                          checks = %s, change_orders = %s, todays_cash = %s, cash_sales = %s, over_short = %s, status = %s WHERE id = %s """
                cursor.execute(
                    query,
                    (CashRecon["dateTime"],
                     CashRecon["Registers"],
                        CashRecon["initials"],
                        CashRecon["Drawer"],
                        CashRecon["Top_of_Safe"],
                        CashRecon["Change_Fund"],
                        CashRecon["Ending_Cash"],
                        CashRecon["Drops"],
                        CashRecon["Checks"],
                        CashRecon["Change_Orders"],
                        CashRecon["Todays_Cash"],
                        CashRecon["Cash_Sales"],
                        CashRecon["Over_Short"],
                        CashRecon["Status"],
                        CashRecon["cash_recon_id"]))
                conn.commit()

            else:
                query = """ INSERT INTO cash_recons (store, type, datetime, initials, register, drawer, top_of_safe, change_fund, ending_cash,
                      drops, checks, change_orders, beginning_cash, todays_cash, cash_sales, over_short, status, bdate) VALUES (%s, %s,
                      %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) """
                cursor.execute(
                    query,
                    (CashRecon["store_id"],
                     CashRecon["type"],
                        CashRecon["dateTime"],
                        CashRecon["initials"],
                        CashRecon["Registers"],
                        CashRecon["Drawer"],
                        CashRecon["Top_of_Safe"],
                        CashRecon["Change_Fund"],
                        CashRecon["Ending_Cash"],
                        CashRecon["Drops"],
                        CashRecon["Checks"],
                        CashRecon["Change_Orders"],
                        CashRecon["Beginning_Cash"],
                        CashRecon["Todays_Cash"],
                        CashRecon["Cash_Sales"],
                        CashRecon["Over_Short"],
                        CashRecon["Status"],
                        CashRecon["businessDate"]))
                recon = cursor.lastrowid

                pos_tmp = """INSERT INTO pos_medshift (`recon_id`, `store`, `dayid`, `mediano`, `terminalno`, `shiftno`, `dlycount`, `dlysales`, `dlyoutsidesales`,
                      `dlyfuel`, `dlyoutsidefuel`, `dlyoutsidecount`, `dlytax`, `ts`, `bdate`) SELECT %s, `store`, `dayid`, `mediano`, `terminalno`, `shiftno`, `dlycount`, `dlysales`, `dlyoutsidesales`,
                      `dlyfuel`, `dlyoutsidefuel`, `dlyoutsidecount`, `dlytax`, `ts`, %s from pos_medshift_tmp where `store` = %s """
                cursor.execute(
                    pos_tmp,
                    (str(recon),
                     CashRecon["businessDate"],
                        CashRecon["store_id"]))
                conn.commit()

        conn.close()

        logger.info('Exited from the CashReconciliation Method')
        return jsonify({"status": "success"})


class CashReconHistory(Resource):
    def get(self):
        logger = logging.getLogger("CashReconHistory get")
        logger.info('Entered into CashReconHistory get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = int(request.args.get("store_id"))
            Type = request.args.get("type")
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

        query = """ SELECT id AS cash_recon_id, initials, status, cast(date(datetime) as char) as date,
              cast(time(datetime) as char) as time, cast(over_short as char) AS Over_Short, cast(bdate as char) as bdate
              FROM cash_recons where (bdate >= %s) and type = %s and store = %s order by bdate desc """
        cursor.execute(query, (daytninety, Type, store_id))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the CashReconHistory Method')
        return jsonify({"status": "success", "response": rv})


class CashReconActions(Resource):
    def get(self):
        logger = logging.getLogger("CashReconActions get")
        logger.info('Entered into CashReconActions get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            recon_id = int(request.args.get("cash_recon_id"))

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT id AS cash_recon_id, cast(bdate as char) AS bdate, initials, type, cast(datetime as char) dateTime, cast(register as char) AS Registers, cast(drawer as char) AS Drawer,
              cast(top_of_safe as char) AS Top_of_Safe, cast(change_fund as char) AS Change_Fund, cast(ending_cash as char) AS Ending_Cash, cast(todays_cash as char) AS Todays_Cash,
			  cast(drops as char) AS Drops, cast(checks as char) AS Checks, cast(change_orders as char) AS Change_Orders, cast(over_short as char) AS Over_Short,
			  cast(Beginning_Cash as char) as Beginning_Cash, cast(cash_sales as char) AS Cash_Sales, cast(status as char) AS Status
			  FROM cash_recons where id = %s """
        cursor.execute(query, (recon_id,))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the CashReconActions Method')
        return jsonify({"status": "success", "response": rv})

class CashReconContinue(Resource):
    def get(self):
        logger = logging.getLogger("CashReconContinue get")
        logger.info('Entered into CashReconContinue get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = int(request.args.get("store_id"))
            reported_date = str(request.args.get("date"))
            mediano = request.args.get("mediano")
            etype = "endofday"
            yesterday = str(request.args.get("today"))
            rv = {}
            rv["checkin"] = []
            rv["pickup"] = []

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        sub_query = """ SELECT CAST(sum(dlysales) as char) AS Cash_Sales FROM pos_medshift_tmp where store = %s and mediano = %s
                  and ts >= DATE_SUB(NOW(),INTERVAL 10 MINUTE) """
        cursor.execute(sub_query, (store_id, mediano))
        CashSales = cursor.fetchall()
        rv["Cash_Sales"] = '0'
        if CashSales[0]["Cash_Sales"]:
            rv["Cash_Sales"] = str(round(float(CashSales[0]["Cash_Sales"]), 2))

        EndingCash = """ SELECT cast(ending_cash as char) as Beginning_Cash FROM cash_recons where type = %s and store = %s and date(datetime) = %s """
        cursor.execute(EndingCash, (etype, store_id, yesterday))
        EndCash = cursor.fetchall()
        rv["Beginning_Cash"] = '0'
        if len(EndCash) > 0:
            rv["Beginning_Cash"] = EndCash[0]

        change = """ SELECT cast(sum(received_amount) as char) as Change_Orders FROM change_order co
               inner join change_order_details cod on co.id = cod.change_order_id
               where store_id = %s and bdate is null and received_status = 'Complete' """
        cursor.execute(change, (store_id, ))
        orderamount = cursor.fetchall()
        rv["orderamount"] = '0'
        if len(orderamount) > 0:
            rv.update(orderamount[0])
        if not rv["Change_Orders"]:
            rv["Change_Orders"] = '0'
        try:
            float(rv["Beginning_Cash"])
        except:
            rv["Beginning_Cash"] = 0
        try:
            rv["Todays_Cash"] = 0 - float(rv["Change_Orders"]) - float(rv["Beginning_Cash"])
            rv["Over_Short"] = float(rv["Todays_Cash"]) - float(rv["Cash_Sales"])
        except:
            rv["Todays_Cash"] = 0
            rv["Over_Short"] = 0
        conn.close()

        logger.info('Exited from the CashReconContinue Method')
        return jsonify({"status": "success", "response": rv})
