from flask_restful import reqparse
from flask_restful import Resource
from flask import jsonify, abort, make_response, request, current_app
import MySQLdb
import collections
import logging
import datetime as DT

from flask_inputs import Inputs
from wtforms.validators import DataRequired

from flask_inputs.validators import JsonSchema
from jsonschema import validate


class Message(Resource):
    def get(self):
        logger = logging.getLogger("Message get")
        logger.info('Entered into Message get  method')

        try:
            store_id = int(request.args.get("store_id"))
            BusinessDate = request.args.get("newBusinessDate")
            conn = current_app.messagedb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)

        query = """ SELECT m.message_id, m.subject, m.body, ms.read,
              cast(m.deliver_date as char) AS date_sent, cast(m.deliver_time as char) time_sent
              FROM message m inner join message_store ms on m.message_id = ms.message_id
              where ms.Store = %s and timestamp(m.deliver_date, m.deliver_time) <= %s order by m.deliver_date desc, m.deliver_time desc"""
        cursor.execute(query, (store_id, BusinessDate))
        rv = cursor.fetchall()
        cursor.close()
        conn.close()

        logger.info('Exited from the Message Method')
        return jsonify({"status": "success", "response": rv})

    def put(self):
        logger = logging.getLogger("Message PUT")
        logger.info('Entered into Message Update method')

        try:
            message_id = int(request.json["message_id"])
            read = int(request.json["read"])
            store_id = int(request.json["store_id"])
            conn = current_app.messagedb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error(
                'Either connection problem or unable to get url parameters',
                exc_info=True)

        completeQuery = """ UPDATE message_store ms SET ms.read = %s WHERE ms.message_id = %s and ms.store = %s """
        cursor.execute(completeQuery, (read, message_id, store_id))
        conn.commit()
        conn.close()

        logger.info('Exited from Message PUT Method')
        return jsonify({"status": "success"})


class AddMessage(Resource):
    def post(self):
        logger = logging.getLogger("AddMessage post")
        logger.info('Entered into AddMessage method')

        try:
            msg = request.json
            conn = current_app.messagedb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)

        except BaseException:
            logger.error("variables from url", exc_info=True)

        query = """ INSERT INTO `message` (`date_sent`, `time_sent`, `sent_by`, `deliver_date`, `deliver_time`, `subject`, `body`)
              VALUES (%s, %s, %s, %s, %s, %s, %s) """
        cursor.execute(
            query,
            (msg["date_sent"],
             msg["time_sent"],
                msg["sent_by"],
                msg["deliver_date"],
                msg["deliver_time"],
                msg["subject"],
                msg["body"]))
        newID = cursor.lastrowid
        for store in msg['store_id']:
            sub_query = """ INSERT INTO `message_store` (`message_id`, `Store`, `read`) VALUES (%s, %s, %s) """
            cursor.execute(sub_query, (newID, store, msg["read"]))
        conn.commit()
        conn.close()
        logger.info('Exited from AddMessage post method')
        return jsonify({"status": "success", "response": newID})

    def get(self):
        logger = logging.getLogger("MessageHistory get")
        logger.info('Entered into MessageHistory get  method')

        try:
            conn = current_app.messagedb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            todate = request.values.get("todaydate")
            year = todate.split('-')[0]
            month = todate.split('-')[1]
            day = todate.split('-')[2]
            todaysdate = DT.date(int(year), int(month), int(day))
            daytninety = todaysdate - DT.timedelta(days=90)
            query = """ SELECT m.message_id, m.subject, m.body, cast(m.date_sent as char) as date_sent, cast(m.time_sent as char) as time_sent, m.sent_by,
              cast(m.deliver_date as char) deliver_date, cast(m.deliver_time as char) as deliver_time
              FROM message m
              where (m.date_sent BETWEEN %s AND %s)  order by m.message_id desc """
            cursor.execute(query, (daytninety, todaysdate))
            rv = cursor.fetchall()
            conn.close()

            logger.info('Exited from the MessageHistory Method')
            return jsonify({"status": "success", "response": rv})

        except BaseException:
            logger.error(
                'Database connection or url parameters error',
                exc_info=True)
            logger.info('Exited from the MessageHistory Method')
            return

    def put(self):
        logger = logging.getLogger("Update Message Put")
        logger.info('Entered into MessageHistory put  method')
        try:
            msg = request.json
            conn = current_app.messagedb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error("variables from url", exc_info=True)
        query = """ UPDATE `message` SET `deliver_date` = %s, `deliver_time` = %s,
                   `subject` = %s, `body` = %s WHERE `message_id` = %s"""
        cursor.execute(query, (msg["delivery_date"], msg["delivery_time"],
                               msg["subject"], msg["body"], msg['message_id']))
        conn.commit()
        conn.close()
        logger.info('Exited from Update Message Put method')
        return jsonify({"status": "success", "response": msg["message_id"]})

    def delete(self):
        logger = logging.getLogger("MessageHistory Message delete")
        logger.info('Entered into MessageHistory delete  method')
        try:
            msg = request.json
            conn = current_app.messagedb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error("variables from url", exc_info=True)
        query = """DELETE FROM message  where message_id = %s """
        cursor.execute(query, (int(msg["message_id"]), ))
        conn.commit()
        conn.close()
        logger.info('Exited from Update Message delete method')
        return jsonify({"status": "success", "response": msg["message_id"]})
