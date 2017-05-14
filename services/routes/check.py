#! /usr/bin/python

from flask_restful import reqparse
from flask_restful import Resource
from flask import jsonify, abort, make_response, request, g, current_app
import MySQLdb
import collections
import logging
import datetime as DT
import time
from flask_inputs import Inputs
from wtforms.validators import DataRequired

from flask_inputs.validators import JsonSchema
from jsonschema import validate
import urllib
import urllib2


class CardCheckReport(Resource):
    def get(self):
        logger = logging.getLogger("CardCheckReport")
        logger.info('Entered into CardCheckReport get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = request.args.get("store_id")
            bdate = str(request.args.get("bdate"))
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT CAST(reported_time as char) AS time FROM card_reader_report where store_id = %s and bdate = %s """
        cursor.execute(query, (store_id, bdate))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the CardCheckReport get Method')
        return jsonify({"status": "success", "response": rv})

    def post(self):
        logger = logging.getLogger("CardCheckReport post")
        logger.info('Entered into CardCheckReport method')

        try:
            CardCheckReport = request.json
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

        query = """ INSERT INTO card_reader_report (store_id, employee_initials, reported_date, reported_time, checked, bdate) VALUE (%s, %s, %s, %s, %s, %s) """
        cursor.execute(
            query,
            (CardCheckReport['store_id'],
             CardCheckReport['employee_initials'],
             CardCheckReport['reported_date'],
             CardCheckReport['reported_time'],
             CardCheckReport['checked_status'],
             CardCheckReport['bdate']),)
        conn.commit()
        newID = cursor.lastrowid
        conn.close()

        logger.info('Exited from the CardCheckReport Method')
        return jsonify({"status": "success", "response": newID})


class CardCheckHistory(Resource):
    def get(self):
        logger = logging.getLogger("CardCheckHistory")
        logger.info('Entered into CardCheckHistory get  method')

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
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT cast(reported_date as char) as date, checked as checked_status, cast(bdate as char) as bdate,
              cast(reported_time as char) as time, employee_initials FROM card_reader_report where (reported_date >= %s)
              and store_id = %s order by id desc """
        cursor.execute(query, (daytninety, store_id))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the CardCheckHistory get Method')
        return jsonify({"status": "success", "response": rv})


class ItEquipmentReport(Resource):
    def get(self):
        logger = logging.getLogger("ItEquipmentReport")
        logger.info('Entered into ItEquipmentReport get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = request.args.get("store_id")
            bdate = str(request.args.get("bdate"))
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT CAST(reported_time as char) AS time FROM it_payment_report where store_id = %s and bdate = %s """
        cursor.execute(query, (store_id, bdate))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the ItEquipmentReport get Method')
        return jsonify({"status": "success", "response": rv})

    def post(self):
        logger = logging.getLogger("ItEquipmentReport post")
        logger.info('Entered into ItEquipmentReport method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            ItEquipmentReport = request.json

        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

        query = """ INSERT INTO it_payment_report (store_id, employee_initials, reported_date, reported_time, checked, bdate) VALUE (%s, %s, %s, %s, %s, %s) """
        cursor.execute(
            query,
            (ItEquipmentReport['store_id'],
             ItEquipmentReport['employee_initials'],
             ItEquipmentReport['reported_date'],
             ItEquipmentReport['reported_time'],
             ItEquipmentReport['checked_status'],
             ItEquipmentReport['bdate']),)
        conn.commit()
        newID = cursor.lastrowid
        conn.close()

        logger.info('Exited from the ItEquipmentReport Method')
        return jsonify({"status": "success", "response": newID})


class ItEquipmentHistory(Resource):
    def get(self):
        logger = logging.getLogger("ItEquipmentHistory")
        logger.info('Entered into ItEquipmentHistory get  method')

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
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT cast(reported_date as char) as date, checked as checked_status, cast(reported_time as char) as time,
              cast(bdate as char) as bdate, employee_initials FROM it_payment_report
              where (reported_date >= %s) and store_id = %s order by id desc """

        cursor.execute(query, (daytninety, store_id))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the ItEquipmentHistory get Method')
        return jsonify({"status": "success", "response": rv})


class ChangeOrder(Resource):
    def get(self):
        logger = logging.getLogger("ChangeOrder")
        logger.info('Entered into ChangeOrder get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = str(request.args.get("store_id"))
            date = str(request.args.get("date"))
            changeorderId = int(request.args.get("changeorderId"))
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        if changeorderId == 0:
            query = """ SELECT  cod.id, co.id AS changeOrderId, c.id AS currencyId, c.name, cast(c.value as char) as Amount, CAST(cod.order_amount as char) as order_amount ,
                  co.order_status, cast(c.billtype as char) as bill FROM change_order_details cod
                  inner join change_order co on co.id = cod.change_order_id and co.store_id = %s and co.ordered_time = %s
                  right outer join currency c on cod.currency_id = c.id """
            cursor.execute(query, (store_id, date))
            rv = cursor.fetchall()
        elif changeorderId > 0:
            query = """ SELECT cod.id, c.id AS currencyId, co.ordered_by, c.name, cast(c.value as char) as Amount, CAST(cod.order_amount as char) as order_amount,
                  co.order_status, cast(c.billtype as char) as bill AS Status FROM currency c
                  left outer join change_order_details cod on cod.change_order_id = %s and c.id = cod.currency_id
                  left outer  join change_order co on co.id = cod.change_order_id """
            cursor.execute(query, (changeorderId, ))
            rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the ChangeOrder Method')
        return jsonify({"status": "success", "response": rv})

    def post(self):
        logger = logging.getLogger("ChangeOrder post")
        logger.info('Entered into ChangeOrder method')

        try:
            changeOrder = request.json
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

        if int(changeOrder["orderID"]) == 0:
            storeId = changeOrder['store_id']
            orderBy = changeOrder['orderBy']
            orderTime = changeOrder['orderTime']
            orderStatus = changeOrder['orderStatus']
            receivedStatus = changeOrder['receivedStatus']

            query = """ INSERT INTO change_order (store_id, ordered_by, ordered_time, order_status, received_status) VALUES (%s, %s, %s, %s, %s) """
            cursor.execute(
                query,
                (storeId,
                 orderBy,
                 orderTime,
                 orderStatus,
                 receivedStatus))
            conn.commit()
            newID = cursor.lastrowid
        else:
            query = """ UPDATE change_order SET order_status = %s WHERE id = %s """
            cursor.execute(
                query, (changeOrder['orderStatus'], changeOrder["orderID"]))
            conn.commit()
            newID = changeOrder["orderID"]

        for i in changeOrder["changeOrderDetails"]:
            try:
                if i["changeorderId"] == 0:
                    sub_query = """  INSERT INTO change_order_details (change_order_id, currency_id, order_amount) VALUES (%s, %s, %s) """
                    cursor.execute(
                        sub_query, (newID, i["currencyId"], i['orderQuantity']))

                elif i["changeorderId"] > 0:
                    update = """ UPDATE change_order_details set order_amount = %s where id = %s """
                    cursor.execute(
                        update, (i["orderQuantity"], i["changeorderId"]))
            except KeyError:
                pass
            conn.commit()
        conn.close()

        logger.info('Exited from ChangeOrder post method')
        return jsonify({"status": "success", "response": newID})


class ChangeOrderHistory(Resource):
    def get(self):
        logger = logging.getLogger("ChangeOrderHistory")
        logger.info('Entered into ChangeOrderHistory get  method')

        try:
            store_id = int(request.args.get("store_id"))
            todate = request.args.get("businessDate")
            year = todate.split('-')[0]
            month = todate.split('-')[1]
            day = todate.split('-')[2]
            todaysdate = DT.date(int(year), int(month), int(day))
            daytninety = todaysdate - DT.timedelta(days=90)
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT co.id AS changeOrderID, co.ordered_by, CAST(DATE(co.ordered_time) as char) As orderedDate,
              cast(sum(cod.order_amount) as char) AS orderTotal, CAST(DATE(co.received_time) as char) As receivedDate,
              cast(sum(cod.received_amount) as char) AS receivedTotal,
              CASE
                WHEN co.order_status="Complete" and co.received_status="Complete" then "Receive Complete"
                WHEN co.order_status="Complete" and co.received_status="Save" then "Receive Saved"
                WHEN co.order_status="Complete" and co.received_status="" then "Order Complete"
                else 'Order Saved'
                end as Status, co.received_by, cast(co.ordered_time as char) as order_datetime,
                cast(co.received_time as char) as received_datetime, cast(co.bdate as char) as bdate
              FROM change_order co
              inner join change_order_details cod on cod.change_order_id = co.id
              where  (bdate >= %s or bdate is null) and co.store_id = %s
              group by co.id order by changeOrderID desc """
        cursor.execute(query, (daytninety, store_id))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the ChangeOrderHistory Method')
        return jsonify({"status": "success", "response": rv})

    def post(self):
        logger = logging.getLogger("ChangeOrderHistory post")
        logger.info('Entered into ChangeOrderHistory method')

        try:
            orderHistory = request.json
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)

        query = """ SELECT co.id AS changeOrderID, co.ordered_by, cast(Date(co.ordered_time) as char) As Date,
              cast(sum(cod.order_amount) as char) AS Total, co.order_status, co.received_status FROM change_order co
              inner join change_order_details cod on cod.change_order_id = co.id
              where co.store_id = %s and Date(co.ordered_time) = %s
              group by co.id order by changeOrderID desc """
        cursor.execute(query, (orderHistory['store_id'], orderHistory['date']))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from the ChangeOrderHistory Method')
        return jsonify({"status": "success", "response": rv})


class ChangeOrderReceived(Resource):
    def get(self):
        logger = logging.getLogger("ChangeOrderReceived")
        logger.info('Entered into ChangeOrderReceived get  method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            changeorderId = int(request.args.get("changeorderId"))
        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT cod.id, co.id AS changeOrderID, co.ordered_by, c.id as currency, c.name, cast(c.value as char) as Amount,
              cast(co.ordered_time as char) As orderedDate, CAST(co.received_time as char) As receivedDate, co.received_by, co.order_status as Status ,
              co.received_status, CAST(cod.order_amount as char) AS order_amount , CAST(cod.received_amount as char) AS received_amount, CAST(c.billtype as char) as bill
              FROM change_order_details cod
              inner join change_order co on co.id = cod.change_order_id and cod.change_order_id = %s
              right outer join currency c on cod.currency_id = c.id """
        cursor.execute(query, (changeorderId, ))
        rv = cursor.fetchall()
        total = 0
        for item in rv:
            if item['order_amount']:
                total += int(item['order_amount'])
            else:
                item['order_amount'] = 0
            if not item['received_amount']:
                item['received_amount'] = 0
        conn.close()

        logger.info('Exited from the ChangeOrderReceived Method')
        return jsonify({"status": "success", "response": rv,
                        "totalordered": str(total)})

    def post(self):
        logger = logging.getLogger("ChangeOrderReceived post")
        logger.info('Entered into ChangeOrderReceived method')

        try:
            ChangeOrderReceived = request.json
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Either db connection or date calculation error',
                exc_info=True)
        query = """ UPDATE change_order SET received_by = %s, received_time = %s, received_status = %s WHERE id = %s """
        cursor.execute(
            query,
            (ChangeOrderReceived["receivedBy"],
             ChangeOrderReceived["receivedDate"],
             ChangeOrderReceived["receivedStatus"],
             int(ChangeOrderReceived["changeOrderID"])))
        conn.commit()
        newID = ChangeOrderReceived["changeOrderID"]

        for i in ChangeOrderReceived["receivedChangeOrder"]:
            if i["receivedAmount"] == 0 and i["currencyId"] > 0:
                delete = """ DELETE from change_order_details where id = %s """
                cursor.execute(delete, (i["currencyId"], ))
                conn.commit()

            elif i["currencyId"] > 0:
                update = """ UPDATE change_order_details set received_amount = %s where id = %s """
                cursor.execute(update, (i["receivedAmount"], i["currencyId"]))
                conn.commit()

            elif i["currencyId"] == 0:
                insert = """ INSERT INTO change_order_details (change_order_id, currency_id, received_amount) VALUES (%s, %s, %s) """
                cursor.execute(
                    insert, (newID, i["currency"], i['receivedAmount']))
                conn.commit()
        conn.close()

        logger.info('Exited from ChangeOrderReceived post method')
        return jsonify({"status": "success", "response": newID})


response_error_msgs = {
    "DECLINE CODE 1": "DECLINED: CODE 1",
    "DECLINE CODE 2": "DECLINED: CODE 2",
    "DECLINE CODE 3": "DECLINED: CODE 3",
    "TRAN CODE ERROR": "INVALID TRANSACTION CODE, PLEASE RETRY",
    "AMOUNT ERROR": "INVALID AMOUNT, PLEASE RETRY",
    "ID ERROR": "INVALID BANK ID, PLEASE RETRY",
    "CALL AUTH CENTER": "PLEASE CALL CERTEGY PAYMENT SERVICES",
    "REPROGRAM ID": "INVALID MERCHANT ID",
    "STATE CODE ERROR": "INVALID STATE CODE",
    "CHK NUMBER ERROR": "MISSING CHECK NUMBER, PLEASE RETRY"}


class CheckValidate(Resource):
    def get(self):
        logger = logging.getLogger("CheckValidate GET")

        import urllib
        logger = logging.getLogger("CheckValidate get")
        logger.info('Entered into CheckValidate GET method')
        product_name = "ccsauth"
        version = "001"
        username = current_app.checkUserName
        password = current_app.checkPassword
        checkProxy = current_app.checkProxy
        checkUrl = current_app.checkUrl
        checkValidateUrl = current_app.checkValidateUrl
        #proxy = urllib2.ProxyHandler({'https': checkProxy})
        passman = urllib2.HTTPPasswordMgrWithDefaultRealm()
        passman.add_password(None, checkUrl, username, password)
        authhandler = urllib2.HTTPBasicAuthHandler(passman)
        opener = urllib2.build_opener(authhandler)
        urllib2.install_opener(opener)

        try:
            siteid = request.args.get("store_vendor_id[store_vendor_id]")
            routingNumber = request.args.get("routingNumber")
            accountNumber = request.args.get("accountNumber")
            checkNumber = request.args.get("checkNumber")
            swiped = request.args.get("swiped")
            amount = float(request.args.get("amount"))
            store_id = int(request.args.get("store_id"))
            checked_time = request.args.get("businessDate")

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        if swiped == 'S':
            micr = "T" + str(routingNumber) + "T" + \
                str(checkNumber) + "O" + str(accountNumber) + "O"
        elif swiped == '@':
            micr = "T" + str(routingNumber) + "A" + \
                str(accountNumber) + "C" + str(checkNumber)
        # generate the transaction number
        trannum = product_name + version + time.strftime("%Y%m%d%H%M%S")
        trantype = 'POSP'
        amtstr = "%08.2f" % amount  # format the amount properly
        trandata = (chr(0x02) + "B.0" + siteid + chr(0x1c) + swiped + "12"
                    + chr(0x1c) + micr + chr(0x1c) + "FM" + chr(0x1c)
                    + amtstr + chr(0x03))
        lrc = 0
        for i in trandata[1:]:  # calculate the LRCs
            lrc ^= ord(i)
        trandata += chr(lrc)  # tack the LRC onto the end
        postdata = urllib.urlencode([('ClientLocation',
                                      siteid),
                                     ('ClientTransactionNbr',
                                      trannum),
                                     ('ClientTranType',
                                      trantype),
                                     ('ClientTranData',
                                      trandata)])

        try:
            try:
                httpr = urllib2.urlopen(
                    checkUrl +
                    checkValidateUrl,
                    postdata,
                    timeout=200)
            except IOError as message:
                if hasattr(message, "strerror"):
                    if hasattr(message.strerror,
                               "message") and message.strerror.message != "":
                        string = message.strerror.message
                    else:
                        i = len(message.strerror.args) - 1
                        string = message.strerror.args[i]
                else:
                    i = len(message.args) - 1
                    string = message.args[i]
                logger.errror("SYSTEM OFFLINE: " + string)
                logger.info('Exited from the CheckValidate Method')
                return jsonify({"status": "failed",
                                "response": "SYSTEM OFFLINE: '" + string + "'"})
            except socket.sslerror as message:
                if hasattr(message, "errno"):
                    string = message.errno
                else:
                    i = len(message.args) - 1
                    string = message.args[i]
                logger.errror("SYSTEM OFFLINE: " + string)
                logger.info('Exited from the CheckValidate Method')
                return jsonify({"status": "failed",
                                "response": "SYSTEM OFFLINE: '" + string + "'"})
        except AttributeError as e:
            import inspect
            import pprint
            s_message = ""
            if hasattr(e, "message"):
                s_message = s_message + e.message
            s_message = s_message + "\n\ninspection:\n"
            for row in inspect.getmembers(message):
                if row[0][0] != '_':
                    s_message = s_message + pprint.pformat(row) + "\n"
            logger.errror("SYSTEM OFFLINE: " + string)
            logger.info('Exited from the CheckValidate Method')
            return jsonify({"status": "failed",
                            "response": "DATA UNAVAILABLE: '" + string + "'"})

        r_pod = "<INPUT type='hidden' name='ResponseData' value="
        r_pod_len = len(r_pod)
        response = ""
        for line in httpr:
            line = line.upper()
            if line[:r_pod_len] == r_pod.upper():
                j = line.find("></TD>")
                if j < 0 or (j - r_pod_len) < 2:
                    continue
                response = line[r_pod_len:j]
                if response[-2] == "\003":
                    response = response[:-2]

        if response[:3] == "OK ":
            authcode = response[3:9]
            if authcode == "":
                logger.error("MISSING AUTHORIZATION CODE IN RESPONSE")
                logger.info('Exited from the CheckValidate Method')
                return jsonify(
                    {"status": "failed", "response": "MISSING AUTHORIZATION CODE IN RESPONSE"})
        elif response in response_error_msgs.keys():
            authcode = response
            try:
                conn = current_app.appdb.get_connection()
                cursor = conn.cursor(dictionary=True, buffered=True)

                query = """ INSERT INTO `cheque_history` (`cheque_number`,`account_number`,`routing_number`, `store_id`, `amount`, `auth_code`, `checked_time`)
                VALUES(%s, %s, %s, %s, %s, %s, %s) """
                cursor.execute(
                    query,
                    (checkNumber,
                     accountNumber,
                        routingNumber,
                        store_id,
                        amount,
                        authcode,
                        checked_time))
                newID = cursor.lastrowid
                conn.commit()
                conn.close()
            except BaseException:
                logger.error(
                    'Database connection or url parameters error',
                    exc_info=True)


            logger.error(response_error_msgs[response])
            logger.info('Exited from the CheckValidate Method')
            return jsonify({"status": "failed",
                            "response": response_error_msgs[response]})

        else:
            logger.error("UNKNOWN RESPONSE: ''" + response + "'");
            logger.info('Exited from the CheckValidate Method')
            return jsonify({"status": "failed",
                            "response": "UNKNOWN RESPONSE: '" + response + "'"})

        logger.info('Exited from the CheckValidate Method')
        return jsonify({"status": "success", "response": authcode})
