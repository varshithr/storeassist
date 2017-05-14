#!flask/bin/python
from flask import Flask, jsonify, abort, make_response, request, g, current_app
from flask_restful import reqparse
from flask_restful import Resource, Api
import kaptan
import os
import MySQLdb
import logging
import json
import logging.config
import sys
import mysql.connector.pooling as pool
from MySQLdb import cursors
from routes.auth import UserLogin, AddUser, AddUserStoresList, BusinessDate, BusinessDateAPI, StoreList, AddUserHistory,Edituser,StoreVendorID
from routes.check import CardCheckReport, CardCheckHistory, ChangeOrder, ChangeOrderHistory
from routes.check import ItEquipmentReport, ItEquipmentHistory, ChangeOrderReceived, CheckValidate
from routes.bakery import BakeryOrders, BakeryOrdersHistory, ManualGasDipHistory, CashReconActions, CashReconContinue
from routes.bakery import ManualGasDipReport, CashReconHistory, CashReconciliation, DipReportmaxdate, ManualGasDipActions
from routes.moneyOrder import MoneyOrderInquire, MoneyOrderCash, MoneyOrderHistory
from routes.authentication import ITAuthentication, SmartSafe, SmartSafeTemp, CheckHistory, MovieQuikClosing
from routes.message import  Message, AddMessage


app = Flask(__name__)
config = kaptan.Kaptan(handler="json")
config.import_config(os.getenv("CONFIG_FILE_PATH", 'config.json'))
environment = config.get('environment')


api = Api(app)
logger = logging.getLogger(__name__)

def connect_db():
    logger = logging.getLogger(" storeassit DB ")
    logger.info('Entered into storeassit database')

    """Connects to the specific database."""
    try:
        dbconfig = {"host": config.get('dbhost'),  "database": config.get("dbname"), "user": config.get("dbuser"), "passwd": config.get("dbpass")}
        db = pool.MySQLConnectionPool(pool_name = "maindbpool", pool_size = config.get("poolsize"), pool_reset_session=True, **dbconfig)
        logger.info('Exited from the storeassit database')
        return db
    except Exception as err:
        print err
        logger.error('Failed to Connect to the database', exc_info=True)
        logger.info('Exited from the storeassit database')
        sys.exit("not able to connect to main database")

def connect_bakery():
    logger = logging.getLogger(" bakery DB ")
    logger.info('Entered into bakery database')
    """Connects to the specific database."""
    try:
        dbconfig = {"host": config.get('bakerydbhost'),  "database": config.get("bakerydbname"), "user": config.get("bakerydbuser"), "passwd": config.get("bakerydbpass")}
        bakery_db = pool.MySQLConnectionPool(pool_name = "bakerydbpool", pool_size = config.get("poolsize"), pool_reset_session=True, **dbconfig)
        logger.info('Exited from the bakery database')
        return bakery_db
    except:
        logger.error('Failed to Connect to the database', exc_info=True)
        logger.info('Exited from the bakery database')
        sys.exit("not able to connect to bakery database")

def connect_message():
    logger = logging.getLogger(" message DB ")
    logger.info('Entered into message database')
    """Connects to the specific database."""
    try:
        dbconfig = {"host": config.get('messagedbhost'),  "database": config.get("messagedbname"), "user": config.get("messagedbuser"), "passwd": config.get("messagedbpass")}
        db_message = pool.MySQLConnectionPool(pool_name = "messagedbpool", pool_size = config.get("poolsize"), pool_reset_session=True, **dbconfig)
        logger.info('Exited from the message database')
        return db_message
    except Exception as err:
        print err
        logger.error('Failed to Connect to the database', exc_info=True)
        logger.info('Exited from the message database')
        sys.exit("Not able to connect to message database")

def connect_moviequik():
    logger = logging.getLogger(" moviequik DB ")
    logger.info('Entered into moviequik database')
    """Connects to the specific database."""
    try:
        dbconfig = {"host": config.get('mqdbhost'),  "database": config.get("mqdbname"), "user": config.get("mqdbuser"), "passwd": config.get("mqdbpass")}
        db_mq = pool.MySQLConnectionPool(pool_name = "mqdbpool", pool_size = config.get("poolsize"), pool_reset_session=True, **dbconfig)
        logger.info('Exited from the moviequik database')
        return db_mq
    except Exception as err:
        print err
        logger.error('Failed to Connect to the database', exc_info=True)
        logger.info('Exited from the moviequik database')
        sys.exit("not able to connect to moviequik database")


def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(app, 'appdb'):
        app.appdb = connect_db()
    return app.appdb

def get_bakery_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(app, 'bakerydb'):
        app.bakerydb = connect_bakery()
    return app.bakerydb

def get_message_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(app, 'messagedb'):
        app.messagedb = connect_message()
    return app.messagedb

def get_mq_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(app, 'mqdb'):
        app.mqdb = connect_moviequik()
    return app.mqdb

#@app.before_first_request
def setup_logging(default_path='logconf.json', default_level=logging.INFO, env_key='LOG_CFG_PATH'):
    """Setup logging configuration"""
    path = default_path
    value = os.getenv(env_key, None)

    if value:
        path = value
    if os.path.exists(path):
        with open(path, 'rt') as f:
            config = json.load(f)
        logging.config.dictConfig(config)
    else:
        logging.basicConfig(level=default_level)

setup_logging()
app.appconfig = config
app.appdb = get_db()
app.bakerydb = get_bakery_db()
app.messagedb = get_message_db()
app.mqdb = get_mq_db()
app.printShelfUrl = config.get('printShelfUrl')
app.checkUserName = config.get('checkUserName')
app.checkPassword = config.get('checkPassword')
app.checkProxy = config.get('checkProxy')
app.checkUrl = config.get('checkUrl')
app.checkValidateUrl = config.get('checkValidateUrl')


api.add_resource(UserLogin, '/api/route/auth/login', endpoint = 'auth')
api.add_resource(AddUser, '/api/route/auth/addUser', endpoint='adduser')
api.add_resource(Edituser, '/api/route/auth/edituser', endpoint='edituser')
api.add_resource(AddUserStoresList, '/api/route/auth/addUserStoresList', endpoint='addUserStoresList')
api.add_resource(BusinessDate, '/api/route/auth/businessdate', endpoint='businessdate')
api.add_resource(StoreList, '/api/route/auth/storelist', endpoint='storelist')
api.add_resource(AddUserHistory, '/api/route/auth/adduserhistory', endpoint='adduserhistory')
api.add_resource(CardCheckReport, '/api/route/check/cardCheckReport', endpoint = 'cardCheckReport')
api.add_resource(CardCheckHistory, '/api/route/check/cardCheckHistory', endpoint = 'cardCheckHistory')
api.add_resource(ItEquipmentReport, '/api/route/check/itEquipmentReport', endpoint = 'itEquipmentReport')
api.add_resource(ItEquipmentHistory, '/api/route/check/itEquipmentHistory', endpoint = 'itEquipmentHistory')
api.add_resource(ChangeOrder, '/api/route/check/changeOrder', endpoint = 'changeOrder')
api.add_resource(ChangeOrderHistory, '/api/route/check/changeOrderHistory', endpoint = 'changeOrderHistory')
api.add_resource(ChangeOrderReceived, '/api/route/check/changeOrderReceived', endpoint = 'changeOrderReceived')
api.add_resource(BakeryOrders, '/api/route/bakery/bakeryOrders', endpoint = 'bakeryOrders')
api.add_resource(BakeryOrdersHistory, '/api/route/bakery/bakeryOrdersHistory', endpoint = 'bakeryOrdersHistory')
api.add_resource(Message, '/api/route/bakery/message', endpoint = 'message')
api.add_resource(ManualGasDipReport, '/api/route/bakery/manualGasDipReport', endpoint = 'manualGasDipReport')
api.add_resource(ManualGasDipActions, '/api/route/bakery/manualGasDipReport/actions', endpoint = 'manualGasDipActions')
api.add_resource(DipReportmaxdate, '/api/route/bakery/dipreportmaxdate', endpoint = 'dipreportmaxdate')
api.add_resource(ManualGasDipHistory, '/api/route/bakery/manualGasDipHistory', endpoint = 'manualGasDipHistory')
api.add_resource(CashReconciliation, '/api/route/bakery/cashReconciliation', endpoint = 'cashReconciliation')
api.add_resource(CashReconHistory, '/api/route/bakery/cashReconHistory', endpoint = 'cashReconHistory')
api.add_resource(CashReconActions, '/api/route/bakery/cashreconactions', endpoint = 'cashreconactions')
api.add_resource(CashReconContinue, '/api/route/bakery/cashreconcontinue', endpoint = 'cashreconcontinue')
api.add_resource(MoneyOrderInquire, '/api/route/moneyOrder/moneyOrderInquire', endpoint = 'moneyOrderInquire')
api.add_resource(MoneyOrderCash, '/api/route/moneyOrder/moneyOrderCash', endpoint = 'moneyOrderCash')
api.add_resource(MoneyOrderHistory, '/api/route/moneyOrder/moneyorderhistory', endpoint = 'moneyorderhistory')
api.add_resource(ITAuthentication, '/api/route/itAuthentication', endpoint = 'itAuthentication')
api.add_resource(CheckHistory, '/api/route/checkHistory', endpoint = 'checkHistory')
api.add_resource(CheckValidate, '/api/route/checkValidations', endpoint = 'checkValidate')
api.add_resource(AddMessage, '/api/route/message/addmessage', endpoint = 'addmessage')
api.add_resource(StoreVendorID, '/api/route/auth/storevendorid', endpoint = 'storevendorid')
api.add_resource(CardCheckReport, '/api/route/check/cardCheckReport/sync', endpoint = 'cardCheckReportSync')
api.add_resource(ItEquipmentReport, '/api/route/check/itEquipmentReport/sync', endpoint = 'itEquipmentReportSync')
api.add_resource(CashReconciliation, '/api/route/bakery/cashReconciliation/sync', endpoint = 'cashReconciliationSync')
api.add_resource(ManualGasDipReport, '/api/route/bakery/manualGasDipReport/sync', endpoint = 'manualGasDipReportSync')

api.add_resource(SmartSafe, '/api/v1.0/smartsafe', endpoint = 'SmartSafe')
api.add_resource(SmartSafeTemp, '/api/v1.0/smartsafe_temp', endpoint = 'smartSafeTemp')
api.add_resource(BusinessDateAPI, '/api/v1.0/businessdate', endpoint='businessAPI')
api.add_resource(MovieQuikClosing, '/api/v1.0/moviequikclosing', endpoint='MovieQuikClosing')

@app.route('/api')
def index():
    # same result even with Flask-MySQL - We need to use the Index to Get
    # Values and Map to OrderedDict to create JSON.

    # conn = current_app.appdb.get_connection()
    # cursor = conn.cursor(dictionary=True,buffered=True)
    #
    # sub_query = """ SELECT * from sbx_event_tmp where store = 18 and date(etime) <= DATE_SUB(NOW(),INTERVAL 10 MINUTE) order by etime """
    # cursor.execute(sub_query, )
    # rv = cursor.fetchall()
    #
    # print rv

    logger.info('Entered into Get /api Call')
    logger.debug(request.headers.get('User-Agent'))
    logger.info('Exiting from Get /api Call')
    return jsonify({"status": "success", "response": "API is up at the URL"})

#,ssl_context='adhoc'
if __name__ == '__main__':
    app.run(host=config.get("host"), debug=config.get("debug"))
