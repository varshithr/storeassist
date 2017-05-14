
from flask_restful import reqparse
from flask_restful import Resource
from flask import jsonify, abort, make_response, request, g, current_app
import MySQLdb
import collections
import logging
import datetime as DT
import hashlib
import uuid

from flask_inputs import Inputs
from flask_inputs.validators import JsonSchema
from jsonschema import validate

UserLoginSchema = {
    'type': 'object',
    'properties': {
        'userid': {'type': 'string'},
        'password': {'type': 'string'}
    },
    "required": ["password", "userid"]
}


class UserLoginSchemaApiInputs(Inputs):
    json = [JsonSchema(schema=UserLoginSchema)]


class UserLogin(Resource):
    def post(self):
        logger = logging.getLogger("UserLogin post")
        logger.info('Entered into UserLogin method')

        inputs = UserLoginSchemaApiInputs(request)
        if not inputs.validate():
            return jsonify(success=False, errors=inputs.errors)

        try:
            user = request.json
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            username = user["userid"]
            password = user["password"]
        except BaseException:
            logger.error("variables from url", exc_info=True)

        qury = """ SELECT password FROM user where user_id = %s """
        cursor.execute(qury, (username,))
        saltciphertext = cursor.fetchone()

        if not saltciphertext:
            conn.close()
            logger.info('Exited from UserLogin post method')
            return make_response(
                "HTTP Error 401 - Unauthorized: Access is denied due to invalid username", 401)

        else:
            salt = saltciphertext["password"][0:32]
            cipher_db = saltciphertext["password"][32:]
            cipher_front = hashlib.sha256(password + salt).hexdigest()

            query = """ SELECT u.id, u.user_id as user_id, u.email, r.name as role, u.name as username, ur.store_id as store_id
                  FROM user u
                  inner join user_role ur on u.id = ur.user_id
                  inner join role r on ur.role_id = r.id
                   where BINARY u.user_id = %s and BINARY u.password = %s """
            cursor.execute(query, (username, salt + cipher_front))
            rv = cursor.fetchall()

            if len(rv) > 0:
                rv[0]["printShelfUrl"] = current_app.printShelfUrl
                conn.close()
                logger.info('Exited from UserLogin post method')
                return jsonify({"status": "success", "response": rv})

            else:
                conn.close()
                logger.info('Exited from UserLogin post method')
                return make_response(
                    "HTTP Error 401 - Unauthorized: Access is denied due to invalid password", 401)


class Edituser(Resource):
    def get(self):
        logger = logging.getLogger("UserRole get")
        logger.info('Entered into UserRole get method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            user_id = request.values.get("user_id")
        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        query = """ SELECT id,user_id,name,email,initials FROM user where id=%s;"""
        cursor.execute(query, (user_id,))
        rv = cursor.fetchall()
        conn.close()
        logger.info('Exited from UserRole get method')
        return jsonify({"status": "success", "response": rv})


class AddUser(Resource):
    def post(self):
        logger = logging.getLogger("Add_user")
        logger.info('Entered into Add_user  post method')
        try:
            value = request.json
            user_id = value["user_id"]
            name = value["name"]
            email = value["email"]
            password = value["password"]
            initials = value["initials"]
            role_id = value["role_id"]
            store_id = value["store_id"]

            salt = uuid.uuid4().hex
            cipher = hashlib.sha256(password + salt).hexdigest()
            pass_db = salt + cipher
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)

        except BaseException:
            logger.error(
                "DB connection or url parameters error",
                exc_info=True)
        query = """ INSERT INTO user (user_id, name, email, password, initials) VALUES (%s, %s, %s, %s, %s) """
        query_2 = """ INSERT INTO user_role (user_id, role_id, store_id) VALUES (%s, %s, %s) """
        cursor.execute(query, (user_id, name, email, pass_db, initials))
        conn.commit()
        newID = cursor.lastrowid
        cursor.execute(query_2, (newID, role_id, store_id))
        conn.commit()
        conn.close()
        logger.info('Exited from Add_User post method')
        return jsonify({"status": "success",
                        "response": "New user created successfully"})

    def put(self):
        logger = logging.getLogger("add_user")
        logger.info('Entered into edit_user  put method')
        try:
            value = request.json
            uid = int(value["id"])
            user_id = value["user_id"]
            name = value["name"]
            email = value["email"]
            initials = value["initials"]

            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)

        except BaseException:
            logger.error(
                "DB connection or url parameters error",
                exc_info=True)
        query = """UPDATE `user` SET `user_id` = %s,`name` = %s,`email` =%s,`initials` = %s
              WHERE `id` = %s"""
        cursor.execute(query, (user_id, name, email, initials, uid))
        conn.commit()
        conn.close()
        logger.info('Exited from Add_User put method')
        return jsonify({"status": "success",
                        "response": "user info updated successfully"})

    def get(self):
        logger = logging.getLogger("UserRole get")
        logger.info('Entered into UserRole get method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = request.values.get("store_id")
        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        query = """ SELECT r.id, r.name from role r where r.name not in ('Help', 'SuperAdmin')
              and r.id not in (select ur.role_id from user_role ur where ur.store_id = %s) """
        cursor.execute(query, (store_id,))
        rv = cursor.fetchall()
        conn.close()
        logger.info('Exited from UserRole get method')
        return jsonify({"status": "success", "response": rv})

    def delete(self):
        logger = logging.getLogger("UserRole delete")
        logger.info('Entered into UserRole delete method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            user_id = request.json["user_id"]

        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        userrole = """ DELETE from user_role where user_id = %s """
        user = """ DELETE from user where id = %s """
        cursor.execute(userrole, (user_id,))
        cursor.execute(user, (user_id,))
        conn.commit()
        conn.close()
        logger.info('Exited from UserRole get method')
        return jsonify({"status": "success", "result": "successfully deleted"})


class AddUserStoresList(Resource):
    def get(self):
        logger = logging.getLogger("AddUserStoresList get")
        logger.info('Entered into AddUserStoresList  get method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(buffered=True)
            messageconn = current_app.messagedb.get_connection()
            messagecursor = messageconn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        query = """ SELECT store_id from user_role ur inner join role r on ur.role_id = r.id
              where r.name in ('Employee', 'Admin') group by store_id having count(*)>=2 """
        cursor.execute(query)
        stor = cursor.fetchall()
        store = tuple([i[0] for i in stor] + [-10, 1000000000])
        sub_query = """ SELECT Store as store_id FROM Stores  where Store not in %s """ % format(
            store)
        messagecursor.execute(sub_query,)
        rv = messagecursor.fetchall()
        conn.close()
        messageconn.close()

        logger.info('Exited from AddUserStoresList Get method')
        return jsonify({"status": "success", "response": rv})


class BusinessDate(Resource):
    def get(self):
        logger = logging.getLogger("BusinessDate get")
        logger.info('Entered into BusinessDate  get method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = request.values.get("store_id")
        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        query = """ SELECT cast(max(bdate) as char) Businessdate FROM cash_recons where store = %s
              and type = "endofday" and status = "Complete" """
        cursor.execute(query, (store_id, ))
        rv = cursor.fetchone()
        conn.close()

        year = rv["Businessdate"].split('-')[0]
        month = rv["Businessdate"].split('-')[1]
        day = rv["Businessdate"].split('-')[2]
        dat = DT.date(int(year), int(month), int(day))
        rv["Businessdate"] = str(dat + DT.timedelta(days=1))

        logger.info('Exited from BusinessDate Get method')
        return jsonify({"status": "success", "response": rv})


class StoreVendorID(Resource):
    def get(self):
        logger = logging.getLogger("StoreVendorID get")
        logger.info('Entered into StoreVendorID get method')

        try:
            messageconn = current_app.messagedb.get_connection()
            messagecursor = messageconn.cursor(dictionary=True, buffered=True)
            store_id = request.values.get("store_id")
        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        sub_query = """ SELECT cq_loc_code as store_vendor_id FROM Stores where Store = %s """
        messagecursor.execute(sub_query, (store_id, ))
        vendor_id = messagecursor.fetchone()
        messageconn.close()

        logger.info('Exited from StoreVendorID Get method')
        return jsonify({"status": "success", "response": vendor_id})


class BusinessDateAPI(Resource):
    def get(self):
        logger = logging.getLogger("BusinessDate get")
        logger.info('Entered into BusinessDate  get method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
            store_id = request.values.get("store_id")
        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        query = """ SELECT cast(max(bdate) as char) businessdate FROM cash_recons where store = %s
              and type = "endofday" and status = "Complete" """
        cursor.execute(query, (store_id, ))
        rv = cursor.fetchone()

        year = rv["businessdate"].split('-')[0]
        month = rv["businessdate"].split('-')[1]
        day = rv["businessdate"].split('-')[2]
        dat = DT.date(int(year), int(month), int(day))
        rv["businessdate"] = str(dat + DT.timedelta(days=1))

        dayid_query = """ SELECT  dayid FROM sbx_event where store = %s and bdate = %s and etype = 'contents' """
        cursor.execute(dayid_query, (store_id, rv["businessdate"]))
        day_id = cursor.fetchone()

        if not day_id:
            dayid_query = """ SELECT dayid FROM sbx_event where store = %s and etype = 'contents' and bdate = (SELECT max(bdate) FROM sbx_event where store = %s and etype = 'contents') """
            cursor.execute(dayid_query, (store_id, store_id))
            recent_day_id = cursor.fetchone()
            if not recent_day_id:
                rv["dayid"] = 0
            else:
                rv["dayid"] = recent_day_id["dayid"]
            conn.close()

            logger.info('Exited from BusinessDate Get method')
            return jsonify(
                {"status": "success", "response": rv, "API version": "1.0"})

        else:
            rv["dayid"] = day_id["dayid"]
            conn.close()

            logger.info('Exited from BusinessDate Get method')
            return jsonify(
                {"status": "success", "response": rv, "API version": "1.0"})


class StoreList(Resource):
    def get(self):
        logger = logging.getLogger("StoreList get")
        logger.info('Entered into StoreList  get method')

        try:
            conn = current_app.messagedb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        query = """ SELECT Store as store_id FROM Stores """
        cursor.execute(query, )
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from StoreList Get method')
        return jsonify({"status": "success", "response": rv})


class AddUserHistory(Resource):
    def get(self):
        logger = logging.getLogger("AddUserHistory get")
        logger.info('Entered into AddUserHistory  get method')

        try:
            conn = current_app.appdb.get_connection()
            cursor = conn.cursor(dictionary=True, buffered=True)
        except BaseException:
            logger.error('DB Connection error', exc_info=True)

        query = """ SELECT u.id,ur.store_id, u.user_id, u.name, u.email, r.name as role, u.initials FROM user u
              inner join user_role ur on u.id = ur.user_id
              inner join  role r on r.id = ur.role_id order by ur.store_id """
        cursor.execute(query, )
        rv = cursor.fetchall()
        conn.close()

        logger.info('Exited from AddUserHistory Get method')
        return jsonify({"status": "success", "response": rv})
