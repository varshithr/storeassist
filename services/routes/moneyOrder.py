#! /usr/bin/python
from flask_restful import reqparse
from flask_restful import Resource
from flask import jsonify, abort, make_response, request, g, current_app
import MySQLdb
import collections
import logging
import sys
import os
import datetime as DT
import time
from sets import Set
from sqlobject import *
from MySQLdb import cursors

from flask_inputs import Inputs
from flask_inputs.validators import JsonSchema
from jsonschema import validate

prodstores = Set(xrange(1, 140)) - Set([13, ])


class MoneyOrders (SQLObject):
    SerialNo = StringCol(length=20, notNone=True, alternateID=True)
    DocValue = DecimalCol(size=6, precision=2, notNone=True)
    PurchTS = DateTimeCol(notNone=True)
    Store = IntCol(notNone=True)
    TransNo = IntCol(notNone=True)
    Voided = BoolCol(notNone=True, default=False)
    VoidTS = DateTimeCol()
    VoidStore = IntCol()
    Cleared = BoolCol(notNone=True, default=False)
    Cashed = BoolCol(default=False)

    serialkey = DatabaseIndex('SerialNo', unique=True)

    class sqlmeta:
        cacheValues = False


class MoForms(SQLObject):
    Timestamp = DateTimeCol(notNone=True, default=sqlbuilder.func.NOW())
    TimestampMs = DecimalCol(size=3, precision=0, notNone=True)
    RangeBegin = DecimalCol(size=10, precision=0, notNone=True)
    RangeEnd = DecimalCol(size=10, precision=0, notNone=True)
    LocationType = EnumCol(
        enumValues=[
            'office',
            'supervisor',
            'store',
            'printer',
            'shredder',
            'sold'],
        notNone=True)
    Location = StringCol(length=80, varchar=True, notNone=True)
    ActionedBy = StringCol(length=40, varchar=True)
    Active = BoolCol(notNone=True)
    rangeIndex = DatabaseIndex('RangeBegin', 'RangeEnd')

    class sqlmeta:
        cacheValues = False


class MoneyOrderAuditLog (SQLObject):
    SerialNo = StringCol(length=20, notNone=True)
    Method = StringCol(length=10, notNone=True)
    Store = IntCol(notNone=True)
    TS = DateTimeCol()
    Success = BoolCol(notNone=True, default=False)

    moalserialkey = DatabaseIndex('SerialNo', 'TS', unique=True)

    class sqlmeta:
        cacheValues = False

# inquire


MoneyOrderInquireSchema = {
    'type': 'object',
    'properties': {
        'serialNo': {'type': 'string'},
        'Store': {'type': 'integer'}
    },
    "required": ["serialNo", "Store"]
}


class MoneyOrderInquireSchemaApiInputs(Inputs):
    json = [JsonSchema(schema=MoneyOrderInquireSchema)]


class MoneyOrderInquire(Resource):

    def post(self):

        logger = logging.getLogger("MoneyOrderInquire post")
        logger.info('Entered into MoneyOrderInquire post  method')

        inputs = MoneyOrderInquireSchemaApiInputs(request)
        if not inputs.validate():
            return jsonify(success=False, errors=inputs.errors)

        try:
            mysql_url = "mysql://" + current_app.appconfig.get("moneyorder_user") + ":" + current_app.appconfig.get(
                "moneyorder_password") + "@" + current_app.appconfig.get("moneyorder_server") + "/" + current_app.appconfig.get("moneyorder_db")
            sqlhub.processConnection = connectionForURI(mysql_url)

            MoneyOrders.createTable(ifNotExists=True)
            MoForms.createTable(ifNotExists=True)
            MoneyOrderAuditLog.createTable(ifNotExists=True)

            inquire = request.json
            document = MoneyOrders.bySerialNo(inquire['serialNo'])

        except BaseException:
            return jsonify(
                {"status": "failure", "response": "Invalid document"})

        if document and (
            document.Store in prodstores) and (
            inquire['Store'] in prodstores) and str(
            document.Cashed) == "False" and str(
                document.Voided) == "False":
            MoneyOrderAuditLog(
                SerialNo=inquire['serialNo'],
                Method='inquiry',
                Store=inquire['Store'],
                TS=DT.datetime.now(),
                Success=True)
            return jsonify(
                {"status": "success", "response": str(document.DocValue)})

        else:
            MoneyOrderAuditLog(
                SerialNo=inquire['serialNo'],
                Method='inquiry',
                Store=inquire['Store'],
                TS=DT.datetime.now(),
                Success=False)
            return jsonify({"status": "failure", "response": "HTTP_NOT_FOUND"})

        logger.info('Exited from the MoneyOrderInquire Method')

# cash


MoneyOrderCashSchema = {
    'type': 'object',
    'properties': {
        'SerialNo': {'type': 'string'},
        'Store': {'type': 'integer'}
    },
    "required": ["SerialNo", "Store"]
}


class MoneyOrderCashSchemaApiInputs(Inputs):
    json = [JsonSchema(schema=MoneyOrderCashSchema)]


class MoneyOrderCash(Resource):

    def post(self):

        logger = logging.getLogger("MoneyOrderCash post")
        logger.info('Entered into MoneyOrderCash post  method')

        inputs = MoneyOrderCashSchemaApiInputs(request)
        if not inputs.validate():
            return jsonify(success=False, errors=inputs.errors)

        try:
            mysql_url = "mysql://" + current_app.appconfig.get("moneyorder_user") + ":" + current_app.appconfig.get(
                "moneyorder_password") + "@" + current_app.appconfig.get("moneyorder_server") + "/" + current_app.appconfig.get("moneyorder_db")
            sqlhub.processConnection = connectionForURI(mysql_url)

            MoneyOrders.createTable(ifNotExists=True)
            MoForms.createTable(ifNotExists=True)
            MoneyOrderAuditLog.createTable(ifNotExists=True)

            cash = request.json
            document = MoneyOrders.bySerialNo(cash['SerialNo'])

        except BaseException:
            return jsonify(
                {"status": "failure", "response": "Invalid document"})

        found = (
            document and (
                (document.Store in prodstores) and (
                    cash['Store'] in prodstores)))

        if found:
            document.Cashed = True
            MoneyOrderAuditLog(
                SerialNo=cash['SerialNo'],
                Method='cash',
                Store=cash['Store'],
                TS=DT.datetime.now(),
                Success=True)
            return jsonify({"status": "success"})

        logger.info('Exited from the MoneyOrderCash Method')


class MoneyOrderHistory(Resource):
    def get(self):
        logger = logging.getLogger("MoneyOrderHistory get")
        logger.info('Entered into MoneyOrderHistory  get method')

        try:
            conn = MySQLdb.connect(
                host=current_app.appconfig.get("moneyorder_server"),
                user=current_app.appconfig.get("moneyorder_user"),
                passwd=current_app.appconfig.get("moneyorder_password"),
                db=current_app.appconfig.get("moneyorder_db"),
                cursorclass=MySQLdb.cursors.DictCursor,
                sql_mode="STRICT_TRANS_TABLES")
            cursor = conn.cursor()
            store_id = request.values.get("store_id")
            todate = request.values.get("todaydate")
            year = todate.split('-')[0]
            month = todate.split('-')[1]
            day = todate.split('-')[2]
            todaysdate = DT.date(int(year), int(month), int(day))
            daytninety = todaysdate - DT.timedelta(days=90)

        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        query = """ SELECT serial_no, cast(doc_value as char) method, store, cast(purch_t_s as char) as date, cast(cashed as char) as success FROM money_orders
              where Date(purch_t_s) BETWEEN %s AND %s and store = %s order by id desc """
        cursor.execute(query, (daytninety, todate, store_id))
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from MoneyOrderHistory Get method')
        return jsonify({"status": "success", "response": rv})
