this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["adminAddForm"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"row\" style=\"width: 500px\">\n  <div class=\"row\">\n    <div class=\"row\">\n      <h4 style=\"text-align:right;margin-right: -330px margin-top: 0;\"><a class=\"js-adminaddformuser btn btn-success pull-right\" style=\"margin-right:45px;margin-bottom:10px;\"><i class=\"fa fa-plus\"></i>&nbsp View History</a></h4>\n    </div>\n    <div id=\"js-superadminhistrypage\"></div>\n    <div id=\"js-contentdiv\"></div>\n  </div>\n\n  <div class=\"col-lg-offset-4 col-lg-8 col-md-4\" id=\"js-selectstore-hide\" style=\"margin-top:50px;background-color: white;text-align: center;width: 620px; height: 450px\">\n\n    <form class=\"form-horizontal\" id=\"js-signup-form\" style=\"padding-top: 20px\">\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\" for=\"inputName\">UserID:<span class=\"required-asterisk\" style=\"color: red\">*</span></label>\n        <div class=\"col-xs-6\">\n          <input type=\"Name\" onkeypress=\"check(event,this);\" class=\"form-control keyup-name text-input\" id=\"js-addUser-userId\" placeholder=\"Name\" autofocus>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\" for=\"inputName\">Name:<span class=\"required-asterisk\">*</span></label>\n        <div class=\"col-xs-6\">\n          <input type=\"Name\" onkeypress=\"check(event,this);\" class=\"form-control keyup-name text-input\" id=\"js-addUser-inputName\" placeholder=\"Name\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\" for=\"E-mail\">E-mail:<span class=\"required-asterisk\">*</span></label>\n        <div class=\"col-xs-6\">\n          <input type=\"email\" class=\"form-control\" id=\"js-addUser-E-mail\" placeholder=\"E-mail\" value= "
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + ">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\" for=\"Password\">Password:<span class=\"required-asterisk\">*</span></label>\n        <div class=\"col-xs-6\">\n          <input type=\"password\" class=\"form-control\" id=\"js-addUser-Password\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\" for=\"Initials\">Initials:<span class=\"required-asterisk\">*</span></label>\n        <div class=\"col-xs-6\">\n          <input type=\"text\" onkeypress=\"checkinitial(event,this);\" class=\"form-control keyup-intials text-input\" maxlength=\"3\" id=\"js-addUser-Initials\" placeholder=\"Initials\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\">Store:</label>\n        <div class=\"col-xs-6\">\n          <select class=\"form-control\" id=\"js-addUser-stores\">\n            <option value=\"0\">Select store</option>\n          </select>\n        </div>\n\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\">Designation:</label>\n        <div class=\"col-xs-6\">\n          <select class=\"form-control\" id=\"js-addUser-Designation\" disabled>\n\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-xs-offset-3 col-xs-9\">\n          <button type=\"submit\" class=\"btn btn-primary\" id=\"js-addNewUser-submit\" disabled>Submit</button>\n          <button type=\"reset\" class=\"btn btn-default\" id=\"js-button-reset\">Reset</button>\n        </div>\n      </div>\n    </form>\n\n\n  </div>\n\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["adminAddUserHistry"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <tr data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-userid=\""
    + escapeExpression(((helper = (helper = helpers.user_id || (depth0 != null ? depth0.user_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"user_id","hash":{},"data":data}) : helper)))
    + "\" data-name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-email=\""
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "\" data-initials=\""
    + escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initials","hash":{},"data":data}) : helper)))
    + "\" data-storeid=\""
    + escapeExpression(((helper = (helper = helpers.store_id || (depth0 != null ? depth0.store_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"store_id","hash":{},"data":data}) : helper)))
    + "\" data-role=\""
    + escapeExpression(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"role","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + escapeExpression(((helper = (helper = helpers.user_id || (depth0 != null ? depth0.user_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"user_id","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initials","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.store_id || (depth0 != null ? depth0.store_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"store_id","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"role","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>\n              <div class=\"row\">\n                <div class=\"col-sm-3 col-sm-offset-2\">\n                  <span class=\"pull-right\"><a class=\"js-superadmin-edituser edpen\" href=\"\"><i class=\"fa fa-pencil\"></i></a></span>\n                  <!-- <a href=\"#\" class='js-superadmin-edituser btn btn-info' style=\"padding:3px;\"> <i class=\"fa fa-pencil\"></i>Edit</a> -->\n                </div>\n              </div>\n            </td>\n            <td>\n              <div class=\"row\">\n                <div class=\"col-sm-3 col-sm-offset-2\">\n                  <span class=\"pull-right\">\n                 <a class=\"js-superadmin-deleteuser edpen\" href=\"\"> <i class=\"fa fa-trash-o\"></i></a></span>\n                  <!-- <a href=\"#\" class='js-superadmin-deleteuser btn btn-danger' style=\"padding:3px;\">\n                    <i class=\"fa fa-remove\"></i>Delete</a> -->\n                </div>\n              </div>\n            </td>\n          </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n\n  <div class=\"row\">\n    <h4 style=\"text-align:right; margin-right: 14%; margin-top: 0;\"><a class=\"js-addUserButton btn btn-success pull-right\" style=\"margin-right:45px;margin-bottom:10px;\"><i class=\"fa fa-plus\"></i>&nbsp Add New </a></h4>\n  </div>\n  <div class=\"row db-adminAddUserExample\" style=\"width: 1020px\">\n    <table id=\"adminAddUserExample\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n      <thead>\n        <tr>\n          <th>UserId</th>\n          <th>Name</th>\n          <th>E-Mail</th>\n          <th>Initials</th>\n          <th>StoreId</th>\n          <th>Role</th>\n          <th>Edit</th>\n          <th>Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["adminMoneyOrder"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <tr>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.store || (depth0 != null ? depth0.store : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"store","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.serial_no || (depth0 != null ? depth0.serial_no : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"serial_no","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"method","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.success : depth0), 1, {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
  return "            <td> Yes </td>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "              <td> No </td>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<b>MoneyOrder History</b>\n<br/>\n<br/>\n\n<div class=\"row db-moneyReader\" style=\"width: 1020px\">\n  <table id=\"moneyorderexample\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n      <tr>\n        <th>Date</th>\n        <th>StoreId</th>\n        <th>Serial No</th>\n        <th>Money Order Payment</th>\n        <th>Status</th>\n\n      </tr>\n    </thead>\n    <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tablerows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\n  </table>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["adminSendMsg"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"container\">\n  <div class=\"row col-sm-12\">\n    <div class=\"col-sm-10\"></div>\n    <div class=\"col-sm-2\">\n        <h4><a class=\"js-admViewHistry btn btn-success pull-right\"><i class=\"fa fa-plus\"></i>&nbsp View History </a></h4>\n    </div>\n  </div>\n  <div class=\"col-sm-12\" style=\"border-style:solid;border-width: 1px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2\" readonly>\n          Date / Time :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"dateid\" name=\"date\" value=\""
    + escapeExpression(((helper = (helper = helpers.date1 || (depth0 != null ? depth0.date1 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date1","hash":{},"data":data}) : helper)))
    + "\" readonly>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2\">\n          Subjet :\n        </div>\n        <div class=\"col-sm-8 form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"js-msgsubject\" name=\"subject\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2\">\n          Body :\n        </div>\n        <div class=\"col-sm-8 form-group\">\n          <textarea rows=\"4\" cols=\"50\" type=\"text\" class=\"form-control\" id=\"js-msgtextbox\" name=\"textbox\">\n          </textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2 \">\n          Delivery Date :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <div class='input-group date' id='datetimepicker10'>\n            <input type='text'id=\"js-msgdelivarydate\" class=\"form-control\" />\n            <span class=\"input-group-addon\">\n                    <span class=\"glyphicon glyphicon-calendar\">\n                    </span>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2\">\n          Delivery Time :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <div class='input-group date' id='datetimepicker3'>\n            <input type='text'id=\"js-msgdelivarytime\" class=\"form-control\" />\n            <span class=\"input-group-addon\">\n                     <span class=\"glyphicon glyphicon-time\"></span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\" >\n          <div class=\"col-sm-2\">\n            Send By :\n          </div>\n          <div class=\"col-sm-4 form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"js-msgsendby\" name=\"sendby\">\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"col-sm-2\">\n            Store ID :\n          </div>\n          <div class=\"col-sm-4 form-group\">\n            <select class=\"form-control multiselect\" id=\"js-msgstoreid\" multiple=\"multiple\">\n                          \n            </select>\n          </div>\n        </div>\n      </div>\n\n    <div class=\"row col-sm-12\">\n      <div class=\"col-sm-10\"></div>\n      <div class=\"form-group col-sm-2\">\n        <button class=\"btn btn--action btn-block js-sendmsgsubmit\" data-accType=\"submit\">submit</button>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["bakeryOrder"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.active : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <tr class=\"card\" data-requests_id=\""
    + escapeExpression(((helper = (helper = helpers.requests_id || (depth0 != null ? depth0.requests_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"requests_id","hash":{},"data":data}) : helper)))
    + "\" data-name=\""
    + escapeExpression(((helper = (helper = helpers.descr || (depth0 != null ? depth0.descr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"descr","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-nbr=\""
    + escapeExpression(((helper = (helper = helpers.nbr || (depth0 != null ? depth0.nbr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nbr","hash":{},"data":data}) : helper)))
    + "\" data-pick_nbr=\""
    + escapeExpression(((helper = (helper = helpers.pick_nbr || (depth0 != null ? depth0.pick_nbr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pick_nbr","hash":{},"data":data}) : helper)))
    + "\" data-sku=\""
    + escapeExpression(((helper = (helper = helpers.sku || (depth0 != null ? depth0.sku : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sku","hash":{},"data":data}) : helper)))
    + "\">\n              <td class=\"js-productName\">\n                "
    + escapeExpression(((helper = (helper = helpers.descr || (depth0 != null ? depth0.descr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"descr","hash":{},"data":data}) : helper)))
    + "\n              </td>\n              <td>\n                <input type=\"number\" autofocus style=\"text-align: right\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control js-productQtyOnHand\" value=\""
    + escapeExpression(((helper = (helper = helpers.on_hand_qty || (depth0 != null ? depth0.on_hand_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"on_hand_qty","hash":{},"data":data}) : helper)))
    + "\" disabled>\n              </td>\n              <td>\n                <input type=\"number\" style=\"text-align: right\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control js-productQtyReturn\" value=\""
    + escapeExpression(((helper = (helper = helpers.return_qty || (depth0 != null ? depth0.return_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"return_qty","hash":{},"data":data}) : helper)))
    + "\" disabled>\n              </td>\n            </tr>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "              <tr class=\"card\" data-requests_id=\""
    + escapeExpression(((helper = (helper = helpers.requests_id || (depth0 != null ? depth0.requests_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"requests_id","hash":{},"data":data}) : helper)))
    + "\" data-name=\""
    + escapeExpression(((helper = (helper = helpers.descr || (depth0 != null ? depth0.descr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"descr","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-nbr=\""
    + escapeExpression(((helper = (helper = helpers.nbr || (depth0 != null ? depth0.nbr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nbr","hash":{},"data":data}) : helper)))
    + "\" data-pick_nbr=\""
    + escapeExpression(((helper = (helper = helpers.pick_nbr || (depth0 != null ? depth0.pick_nbr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pick_nbr","hash":{},"data":data}) : helper)))
    + "\" data-sku=\""
    + escapeExpression(((helper = (helper = helpers.sku || (depth0 != null ? depth0.sku : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sku","hash":{},"data":data}) : helper)))
    + "\">\n                <td class=\"js-productName\">\n                  "
    + escapeExpression(((helper = (helper = helpers.descr || (depth0 != null ? depth0.descr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"descr","hash":{},"data":data}) : helper)))
    + "\n                </td>\n                <td>\n                  <input type=\"number\" autofocus style=\"text-align: right\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control js-productQtyOnHand\" value=\""
    + escapeExpression(((helper = (helper = helpers.on_hand_qty || (depth0 != null ? depth0.on_hand_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"on_hand_qty","hash":{},"data":data}) : helper)))
    + "\" data-amount=\""
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "\" step=\"";
  stack1 = ((helpers.parseNumber || (depth0 && depth0.parseNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.Amount : depth0), {"name":"parseNumber","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                </td>\n                <td>\n                  <input type=\"number\" style=\"text-align: right\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control js-productQtyReturn\" value=\""
    + escapeExpression(((helper = (helper = helpers.return_qty || (depth0 != null ? depth0.return_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"return_qty","hash":{},"data":data}) : helper)))
    + "\" data-amount=\""
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "\" step=\"";
  stack1 = ((helpers.parseNumber || (depth0 && depth0.parseNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.Amount : depth0), {"name":"parseNumber","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                </td>\n              </tr>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)));
  },"7":function(depth0,helpers,partials,data) {
  return "\n  <div class=\"row\">\n    <div class=\"col-sm-2 col-sm-offset-6\">\n      <button class=\"btn btn--dark btn-block js-bakeryOrder-actions\" data-accType=\"Save\" data-loading-text=\"Loading...\">Save</button>\n    </div>\n    <div class=\"col-sm-2\">\n      <button class=\"btn btn--action btn-block js-bakeryOrder-actions\" data-accType=\"Complete\" data-loading-text=\"Loading...\">Complete</button>\n    </div>\n  </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"row\">\n  <div id=\"js-Bakeryhisterydiv\">\n    <h4 style=\"text-align:right; margin-right: 20%;\"><a class=\"btn btn-success\" style=\"margin-right:20px;margin-top:0px;\" id=\"js-histery-bakery\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <table class=\"table table-striped table-colored\" style=\"margin-bottom: 10px;\">\n      <thead>\n        <tr class=\"card\">\n          <th>Items Name</th>\n          <th>On Hand</th>\n          <th>Return</th>\n        </tr>\n      </thead>\n      <tbody class=\"js-bakeryOrdersBody\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <tr class=\"card\">\n          <td class=\"mytable\">Total</td>\n          <td class=\"form-group mytable\">\n\n            <input type=\"number\" style=\"text-align: right\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' min=0  class=\"form-control js-bakeryordered-amountTotal\" value=\""
    + escapeExpression(((helper = (helper = helpers.handsTotal || (depth0 != null ? depth0.handsTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"handsTotal","hash":{},"data":data}) : helper)))
    + "\" readonly tabindex=\"-1\">\n\n          </td>\n          <td class=\"form-group mytable\">\n\n            <input type=\"number\" style=\"text-align: right\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' min=0 class=\"form-control js-bakeryReturn-amountTotal\" value=\""
    + escapeExpression(((helper = (helper = helpers.returnsTotal || (depth0 != null ? depth0.returnsTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"returnsTotal","hash":{},"data":data}) : helper)))
    + "\" readonly tabindex=\"-1\">\n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), "today", {"name":"equaltoo","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["MyApp"]["templates"]["bakeryOrderActions"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.active : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <tr class=\"card\" data-requests_id=\""
    + escapeExpression(((helper = (helper = helpers.requests_id || (depth0 != null ? depth0.requests_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"requests_id","hash":{},"data":data}) : helper)))
    + "\" data-name=\""
    + escapeExpression(((helper = (helper = helpers.descr || (depth0 != null ? depth0.descr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"descr","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-nbr=\""
    + escapeExpression(((helper = (helper = helpers.nbr || (depth0 != null ? depth0.nbr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nbr","hash":{},"data":data}) : helper)))
    + "\" data-pick_nbr=\""
    + escapeExpression(((helper = (helper = helpers.pick_nbr || (depth0 != null ? depth0.pick_nbr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pick_nbr","hash":{},"data":data}) : helper)))
    + "\" data-sku=\""
    + escapeExpression(((helper = (helper = helpers.sku || (depth0 != null ? depth0.sku : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sku","hash":{},"data":data}) : helper)))
    + "\">\n              <td class=\"js-productName\">\n                "
    + escapeExpression(((helper = (helper = helpers.descr || (depth0 != null ? depth0.descr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"descr","hash":{},"data":data}) : helper)))
    + "\n              </td>\n              <td>\n                <input type=\"number\" autofocus style=\"text-align: right\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control js-productQtyOnHand\" value=\""
    + escapeExpression(((helper = (helper = helpers.on_hand_qty || (depth0 != null ? depth0.on_hand_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"on_hand_qty","hash":{},"data":data}) : helper)))
    + "\" disabled>\n              </td>\n              <td>\n                <input type=\"number\" style=\"text-align: right\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control js-productQtyReturn\" value=\""
    + escapeExpression(((helper = (helper = helpers.return_qty || (depth0 != null ? depth0.return_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"return_qty","hash":{},"data":data}) : helper)))
    + "\" disabled>\n              </td>\n            </tr>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "              <tr class=\"card\" data-requests_id=\""
    + escapeExpression(((helper = (helper = helpers.requests_id || (depth0 != null ? depth0.requests_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"requests_id","hash":{},"data":data}) : helper)))
    + "\" data-name=\""
    + escapeExpression(((helper = (helper = helpers.descr || (depth0 != null ? depth0.descr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"descr","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-nbr=\""
    + escapeExpression(((helper = (helper = helpers.nbr || (depth0 != null ? depth0.nbr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nbr","hash":{},"data":data}) : helper)))
    + "\" data-pick_nbr=\""
    + escapeExpression(((helper = (helper = helpers.pick_nbr || (depth0 != null ? depth0.pick_nbr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pick_nbr","hash":{},"data":data}) : helper)))
    + "\" data-sku=\""
    + escapeExpression(((helper = (helper = helpers.sku || (depth0 != null ? depth0.sku : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sku","hash":{},"data":data}) : helper)))
    + "\">\n                <td class=\"js-productName\">\n                  "
    + escapeExpression(((helper = (helper = helpers.descr || (depth0 != null ? depth0.descr : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"descr","hash":{},"data":data}) : helper)))
    + "\n                </td>\n                <td>\n                  <input type=\"number\" autofocus style=\"text-align: right\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control js-productQtyOnHand\" value=\""
    + escapeExpression(((helper = (helper = helpers.on_hand_qty || (depth0 != null ? depth0.on_hand_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"on_hand_qty","hash":{},"data":data}) : helper)))
    + "\" data-amount=\""
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "\" step=\"";
  stack1 = ((helpers.parseNumber || (depth0 && depth0.parseNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.Amount : depth0), {"name":"parseNumber","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                </td>\n                <td>\n                  <input type=\"number\" style=\"text-align: right\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control js-productQtyReturn\" value=\""
    + escapeExpression(((helper = (helper = helpers.return_qty || (depth0 != null ? depth0.return_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"return_qty","hash":{},"data":data}) : helper)))
    + "\" data-amount=\""
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "\" step=\"";
  stack1 = ((helpers.parseNumber || (depth0 && depth0.parseNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.Amount : depth0), {"name":"parseNumber","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                </td>\n              </tr>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)));
  },"7":function(depth0,helpers,partials,data) {
  return "\n  <div class=\"row\">\n    <div class=\"col-sm-2 col-sm-offset-6\">\n      <button class=\"btn btn--dark btn-block js-bakeryOrder-actions\" data-accType=\"Save\" data-loading-text=\"Loading...\">Save</button>\n    </div>\n    <div class=\"col-sm-2\">\n      <button class=\"btn btn--action btn-block js-bakeryOrder-actions\" data-accType=\"Complete\" data-loading-text=\"Loading...\">Complete</button>\n    </div>\n  </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"container\">\n  <div class=\"row col-sm-6 col-sm-offset-2\">\n    <div id=\"js-Bakeryhisterydiv\">\n      <h4 style=\"text-align:right; margin-right: 20%;\"><a class=\"btn btn-success\" style=\"margin-right:-145px;margin-top:0px;\" id=\"js-histery-bakery\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n  </div>\n  <div class=\"row col-sm-6 col-sm-offset-2\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px;margin-right:-38px\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <label class=\"control-label col-xs-3\" for=\"time\">Delivery Date</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-10\">\n              <input type=\"text\" class=\"form-control js-bakeryDeliveryDate\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly />\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <label class=\"control-label col-xs-3\" for=\"time\">Ordered Date/Time</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-10\">\n              <input type=\"text\" class=\"form-control js-bakeryReceivedDate\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly />\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"row\">\n  <!-- <div id=\"js-Bakeryhisterydiv\">\n    <h4 style=\"text-align:right; margin-right: 20%;\"><a class=\"btn btn-success\" style=\"margin-right:20px;margin-top:0px;\" id=\"js-histery-bakery\"><i class=\"fa fa-list\"></i> View History</a></h4></div> -->\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <table class=\"table table-striped table-colored\" style=\"margin-bottom: 10px;\">\n      <thead>\n        <tr class=\"card\">\n          <th>Items Name</th>\n          <th>On Hand</th>\n          <th>Return</th>\n        </tr>\n      </thead>\n      <tbody class=\"js-bakeryOrdersBody\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <tr class=\"card\">\n          <td class=\"mytable\">Total</td>\n          <td class=\"form-group mytable\">\n\n            <input type=\"number\" style=\"text-align: right\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' min=0 class=\"form-control js-bakeryordered-amountTotal\" value=\""
    + escapeExpression(((helper = (helper = helpers.handsTotal || (depth0 != null ? depth0.handsTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"handsTotal","hash":{},"data":data}) : helper)))
    + "\" readonly tabindex=\"-1\">\n\n          </td>\n          <td class=\"form-group mytable\">\n\n            <input type=\"number\" style=\"text-align: right\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' min=0 class=\"form-control js-bakeryReturn-amountTotal\" value=\""
    + escapeExpression(((helper = (helper = helpers.returnsTotal || (depth0 != null ? depth0.returnsTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"returnsTotal","hash":{},"data":data}) : helper)))
    + "\" readonly tabindex=\"-1\">\n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), "today", {"name":"equaltoo","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["MyApp"]["templates"]["bakeryOrdersTable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <tr>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.DATE || (depth0 != null ? depth0.DATE : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"DATE","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.order_time || (depth0 != null ? depth0.order_time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_time","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"active","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.on_hand_qty || (depth0 != null ? depth0.on_hand_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"on_hand_qty","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.return_qty || (depth0 != null ? depth0.return_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"return_qty","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>\n                            <div class=\"row\">\n                                <div class=\"col-sm-3 col-sm-offset-2\">\n                                    <i class=\"fa fa-list fa-2x js-bakeryOrderActions\" data-changeOrderID=\""
    + escapeExpression(((helper = (helper = helpers.changeOrderID || (depth0 != null ? depth0.changeOrderID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"changeOrderID","hash":{},"data":data}) : helper)))
    + "\" data-total=\""
    + escapeExpression(((helper = (helper = helpers.Total || (depth0 != null ? depth0.Total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Total","hash":{},"data":data}) : helper)))
    + "\" data-date=\""
    + escapeExpression(((helper = (helper = helpers.DATE || (depth0 != null ? depth0.DATE : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"DATE","hash":{},"data":data}) : helper)))
    + "\" data-orderedDateTime=\""
    + escapeExpression(((helper = (helper = helpers.order_time || (depth0 != null ? depth0.order_time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_time","hash":{},"data":data}) : helper)))
    + "\" data-orderBy=\""
    + escapeExpression(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"active","hash":{},"data":data}) : helper)))
    + "\" data-status=\""
    + escapeExpression(((helper = (helper = helpers.on_hand_qty || (depth0 != null ? depth0.on_hand_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"on_hand_qty","hash":{},"data":data}) : helper)))
    + "\" data-received_status=\""
    + escapeExpression(((helper = (helper = helpers.return_qty || (depth0 != null ? depth0.return_qty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"return_qty","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\" style=\"margin-left: -6px;cursor: pointer; cursor: hand;\"></i>\n                                </div>\n                            </div>\n                        </td>\n\n                    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container db-bakeryOrders\">\n    <div class=\"row js-changeOrder\">\n        <div class=\"col-sm-3 pull-right\">\n            <button style=\"margin-left:-32px;\" class=\"btn btn-success dropdown-toggle js-bakeryOrders\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      <i class=\"fa fa-plus\"></i>&nbsp Add New\n    </button>\n        </div>\n    </div>\n\n    <div class=\"row db-endofDay\" style=\"width: 1020px\">\n        <table id=\"example\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n            <thead>\n                <tr>\n                    <!-- <th></th> -->\n                    <th>Delivery Date</th>\n                    <th>Order Date/Time</th>\n                    <th>Active</th>\n                    <th>On Hand Quantity</th>\n                    <th>Return Quantity</th>\n                    <th>Actions</th>\n                    <!-- <th>Salary</th> -->\n                </tr>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["cardReaderHistory"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<!-- <div class=\"row\">\n<div id=\"js-cardhisterydiv\">\n    <h4 style=\"text-align:right; margin-right: 10%;\"><a id=\"js-histery-cardReader\">Go To History Page</a></h4></div>\n</div> -->\n";
  },"useData":true});
this["MyApp"]["templates"]["cardReaderTemp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n    <div class=\"row col-sm-9\">\n        <div id=\"js-cardhisterydiv\">\n            <h4><a class=\"btn btn-success\" id=\"js-histery-cardReader\" style=\"margin-left: 745px;\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n    </div>\n    <div class=\"col-sm-6 col-sm-offset-2\">\n        <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n            <div class=\"row\">\n                <div class=\"col-sm-8\">\n                    <label class=\"control-label col-xs-3\" for=\"time\">Date</label>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-sm-10\">\n                    <input type=\"text\" class=\"form-control js-cardReaderDate\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly />\n                </div>\n                <div class=\"col-sm-2\">\n                    <span class=\"fa fa-calendar fa-2x\"></span>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-xs-2\" for=\"time\">Time</label>\n                <input type=\"text\" class=\"form-control style-4 js-cardReaderTime\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-xs-4\" for=\"intials\">Employee Initials</label>\n                <input type=\"text\" maxlength=\"3\" autocomplete=\"off\" class=\"form-control style-4 js-empIntial\" onkeypress=\"return onlyAlphabets(event,this);\" name=\"intials\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;\"\n                    autofocus>\n            </div>\n            <div class=\"radio\">\n                <label class=\"control-label\" for=\"reportConfirmation\">Card Readers Checked?</label>\n                <br /> &nbsp&nbsp&nbsp&nbsp\n                <input type=\"radio\" name=\"reportConfirmation\" value=true>YES &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n                <input type=\"radio\" name=\"reportConfirmation\" value=false checked>NO\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn--action btn-block js-reportSubmit\" id=\"js-cardReaderSubmit\" style=\"background-color:#00985C\">OK</button>\n            </div>\n        </form>\n        <div>\n        </div>\n";
  },"useData":true});
this["MyApp"]["templates"]["cardreaderTable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                    <tr>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bdate","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.employee_initials || (depth0 != null ? depth0.employee_initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"employee_initials","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.checked_status : depth0), 1, {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        <td>"
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "</td>\n                    </tr>\n";
},"2":function(depth0,helpers,partials,data) {
  return "                            <td> Yes </td>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "                                <td> No </td>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n    <div class=\"row col-sm-3 pull-right\">\n        <h4><a class = \"btn btn-success\" id=\"js-addCardReader\" style=\"margin-left: -37px;\"><i class=\"fa fa-plus\"></i>&nbsp Add New </a></h4>\n    </div>\n    <div class=\"row db-cardReader\" style=\"width: 1020px\">\n        <table id=\"cardreaderexample\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n            <thead>\n                <tr>\n                    <th>BusinessDate</th>\n                    <th>Employee Initials</th>\n                    <th>Checked Status </th>\n                    <th>Reported Date</th>\n                    <th>Reported Time</th>\n                </tr>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tablerows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["checkcashed"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-7 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n       <p>Cash it Successfully</p></br />\n       <div class=\"row\">\n         <div class=\"col-sm-2 col-sm-offset-5\">\n             <button class=\"btn btn-block js-checkcashedsuccess\" style=\"background-color:#00985C;border-radius:5px;\">OK</button>\n         </div>\n       </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["checkconfirmation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-7 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n       <p>Your Check Details Verified Successfully</p></br />\n       <div class=\"row\">\n         <div class=\"col-sm-2 col-sm-offset-5\">\n             <button class=\"btn btn-block js-checkconfirmation\" style=\"background-color:#00985C;border-radius:5px;\">OK</button>\n         </div>\n       </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["checkdetails"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<center>\n    <b>Validate Check Details</b></center>\n<br/>\n<br/>\n<div class=\"row\">\n  <div class=\"col-sm-3 pull-right\">\n    <button style=\"margin-left:-32px; margin-top: -40px;\" class=\"btn btn-success dropdown-toggle js-checkVerify\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      <i class=\"fa fa-plus\"></i>&nbsp View History\n    </button>\n  </div>\n     <div class=\"col-sm-1\"></div>\n    <div class=\"col-sm-5\">\n        <form style=\"background-color: white;text-align: left;padding: 20px;border-radius: 5px\">\n\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"routing-number\">Routing Number</label>\n                <i class=\"fa fa-pencil-square-o pull-right\" id=\"js-scanned-edit\" aria-hidden=\"true\" style=\"font-size: 40px; display:None\"></i>\n                <input type=\"text\" class=\"form-control style-4 js-routingnumber js-number-type check-input-style\" name=\"routing-number\" maxlength=\"9\">\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"account-number\">Account Number</label>\n                <input type=\"text\"  class=\"form-control style-4 js-accountnumber js-number-type check-input-style\" name=\"account-number\" maxlength=\"17\">\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"check-number\">Check Number</label>\n                <input type=\"text\" class=\"form-control style-4 js-checknumber js-number-type check-input-style\" name=\"check-number\" maxlength=\"6\">\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"amount\">Amount</label>\n                <input type=\"text\" class=\"form-control style-4 js-amount js-decimal-type check-input-style\"  name=\"amount\">\n            </div>\n\n            <div class=\"form-group\">\n                <button class=\"btn btn--action js-submitcheck\" style=\"background-color:#00985C\" data-loading-text=\"Loading...\">VALIDATE</button>\n            </div>\n        </form>\n    </div>\n    <div class=\"col-sm-5\" style=\"background-color: white;text-align: left;border-radius: 5px\">\n\n            <h3>Instructions</h3>\n            <ul>\n            <li>Check Limit: Amount of Purchase plus $10.00 Cash</li>\n            <br>\n            <li>No - P.O. Boxes</li>\n            <li>No - Temporary Checks</li>\n            <li>No - 2-Party Checks</li>\n            <br>\n            <li>Verify ID (Ask for Drivers License, State or Military ID)</li>\n            <br>\n            <li>Two phone number are required unless retired (RET)</li>\n            <br>\n            <li>All Checks Must Be Dated!</li>\n            <br>\n            <li>Stamp and Initial ALL Checks!</li>\n            <br>\n            <ul>\n    </div>\n    <div class=\"col-sm-1\"></div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["checkerr"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-7 col-sm-offset-3 text-center\" style=\"margin-top: 30px;margin-bottom:30px\">\n     <p style=\"font-weight: bold;font-size: 20px\">***  WARNING *** DO NOT Accept ***</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-7 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n       <p>Please ask customer to contact the office Monday- Friday from 8am to 5pm</p></br />\n       <p>Office phone: 405-682-5711</p></br />\n       <p>ELSE IF AUTHCODE EQ &#39;DECLINE CODE 2&#39;\n MOVE &#39;DECLINED&#39;\n</p></br />\n       <div class=\"row\">\n         <div class=\"col-sm-2 col-sm-offset-5\">\n             <button class=\"btn btn-block js-checkcashedsuccess\" style=\"background-color: #00985C;\">EXIT</button>\n         </div>\n       </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["checkinData"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" class=\"form-control textright\" readonly name=\"businessdate\" value=\""
    + escapeExpression(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bdate","hash":{},"data":data}) : helper)))
    + "\">\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" class=\"form-control textright\" readonly name=\"businessdate\" value=\""
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "\">\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" onkeypress=\"return onlyAlphabets(event,this);\" class=\"form-control\" autocomplete=\"off\" id=\"initialsid\" maxlength=\"3\" name=\"initials\" value=\""
    + escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initials","hash":{},"data":data}) : helper)))
    + "\" readonly style=\"background-color:#fff; text-align:right\" autofocus>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" onkeypress=\"return onlyAlphabets(event,this);\" class=\"form-control\" autocomplete=\"off\" id=\"initialsid\" maxlength=\"3\" name=\"initials\" value=\""
    + escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initials","hash":{},"data":data}) : helper)))
    + "\" style=\"text-align:right\" autofocus>\n\n";
},"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n            <input type=\"text\" min=\"0\" id=\"rigistersid\" readonly name=\"Registers\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Registers : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright ending-cash CsstxtName js-decimal-type\" style=\"background-color:#fff;\">\n";
},"11":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" min=\"0\" id=\"rigistersid\" name=\"Registers\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Registers : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright ending-cash CsstxtName js-decimal-type\">\n\n";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" min=\"0\" id=\"modrawer\" name=\"Drawer\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Drawer : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright ending-cash CsstxtName js-decimal-type\" readonly style=\"background-color:#fff;\">\n";
},"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" min=\"0\" id=\"modrawer\" name=\"Drawer\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Drawer : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright ending-cash CsstxtName js-decimal-type\">\n\n";
},"17":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" min=\"0\" name=\"Top_of_Safe\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Top_of_Safe : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" id=\"topofsafe\" class=\"form-control textright ending-cash CsstxtName js-decimal-type\" readonly style=\"background-color:#fff;\">\n";
},"19":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" min=\"0\" name=\"Top_of_Safe\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Top_of_Safe : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" id=\"topofsafe\" class=\"form-control textright ending-cash CsstxtName js-decimal-type\">\n";
},"21":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" min=\"0\" id=\"changefund\" readonly name=\"Change_Fund\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Change_Fund : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright ending-cash CsstxtName js-decimal-type\" style=\"background-color:#fff;\">\n";
},"23":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" min=\"0\" id=\"changefund\" name=\"Change_Fund\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Change_Fund : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright ending-cash CsstxtName js-decimal-type\">\n";
},"25":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" min=\"0\" id=\"dropsid\" name=\"Drops\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Drops : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright todays-cash CsstxtName js-decimal-type\" readonly style=\"background-color:#fff\">\n";
},"27":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" min=\"0\" id=\"dropsid\" name=\"Drops\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Drops : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright todays-cash CsstxtName js-decimal-type\">\n\n";
},"29":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" min=\"0\" id=\"checksid\" name=\"Checks\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Checks : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright todays-cash CsstxtName js-decimal-type\" readonly style=\"background-color:#fff\">\n";
},"31":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" min=\"0\" id=\"checksid\" name=\"Checks\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Checks : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright todays-cash CsstxtName js-decimal-type\">\n\n";
},"33":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <input type=\"text\" min=\"0\" id=\"changeorderid\" name=\"Change_Orders\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Change_Orders : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright todays-cash CsstxtName js-decimal-type\" readonly style=\"background-color:#fff\">\n\n";
},"35":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" min=\"0\" id=\"changeorderid\" name=\"Change_Orders\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Change_Orders : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright todays-cash CsstxtName js-decimal-type\">\n";
},"37":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <button class=\"btn btn--dark btn-block js-shiftcheckinsave\" data-insertFlag=\"true\" data-status=\""
    + escapeExpression(((helper = (helper = helpers.Status || (depth0 != null ? depth0.Status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Status","hash":{},"data":data}) : helper)))
    + "\" data-cash_recon_id=\""
    + escapeExpression(((helper = (helper = helpers.cash_recon_id || (depth0 != null ? depth0.cash_recon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cash_recon_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-accType=\"Save\" disabled>Save</button>\n";
},"39":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <button class=\"btn btn--dark btn-block js-shiftcheckinsave\" data-insertFlag=\"true\" data-status=\""
    + escapeExpression(((helper = (helper = helpers.Status || (depth0 != null ? depth0.Status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Status","hash":{},"data":data}) : helper)))
    + "\" data-cash_recon_id=\""
    + escapeExpression(((helper = (helper = helpers.cash_recon_id || (depth0 != null ? depth0.cash_recon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cash_recon_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-accType=\"Save\">Save</button>\n";
},"41":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <button class=\"btn btn--action btn-block js-shiftcheckincomplete\" data-status=\""
    + escapeExpression(((helper = (helper = helpers.Status || (depth0 != null ? depth0.Status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Status","hash":{},"data":data}) : helper)))
    + "\" data-cash_recon_id=\""
    + escapeExpression(((helper = (helper = helpers.cash_recon_id || (depth0 != null ? depth0.cash_recon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cash_recon_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-accType=\"Complete\" disabled>Complete</button>\n";
},"43":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <button class=\"btn btn--action btn-block js-shiftcheckincomplete\" data-status=\""
    + escapeExpression(((helper = (helper = helpers.Status || (depth0 != null ? depth0.Status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Status","hash":{},"data":data}) : helper)))
    + "\" data-cash_recon_id=\""
    + escapeExpression(((helper = (helper = helpers.cash_recon_id || (depth0 != null ? depth0.cash_recon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cash_recon_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-accType=\"Complete\" data-loading-text=\"Loading...\">Complete</button>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"row\">\n <div id=\"js-histerydiv\"> <h4  style=\"text-align:right; margin-right: 10%;\"><a class=\"btn btn-success\" style=\"margin-right:125px;margin-top:0px;\" id=\"js-histery-link\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n <div id=\"js-histerydetailspage\"></div>\n <div id=\"js-contentdiv\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-8\" style=\"border-style:solid;margin-left: 7%;border-width: 1px;\">\n    <div class=\"row\" style=\"margin-top: 20px\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-6 text-right\" readonly>\n          Date / Time :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <input type=\"text\" class=\"form-control textright\" id=\"dateid\" name=\"date\" value=\""
    + escapeExpression(((helper = (helper = helpers.date1 || (depth0 != null ? depth0.date1 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date1","hash":{},"data":data}) : helper)))
    + "\" readonly>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          Business Date :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.bdate : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          Employee Initials :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-6 text-right\">\n          Cash : Registers :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          + Cash : M.O. Drawer :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          + Cash : Top of Safe :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          + Change Fund /Other :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(21, data),"inverse":this.program(23, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          = Ending Cash :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n\n          <input type=\"text\" tabindex= \"-1\" id=\"endingcashid\" name=\"Ending_Cash\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Ending_Cash : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" class=\"form-control textright\" readonly>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-6 text-right\">\n          + Drops :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(25, data),"inverse":this.program(27, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          + Checks :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(29, data),"inverse":this.program(31, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          - Change Orders :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(33, data),"inverse":this.program(35, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          - Beginning Cash :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <input type=\"text\" tabindex= \"-1\" id=\"beginningcashid\" name=\"Beginning_Cash\" class=\"form-control textright\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Beginning_Cash : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" readonly>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          = Today's Cash :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <input type=\"text\" tabindex= \"-1\" id=\"todaysid\" name=\"Todays_Cash\" class=\"form-control textright\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Todays_Cash : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" readonly>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-6 text-right\">\n          - Cash Sales :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <input type=\"text\" tabindex= \"-1\" id=\"cashsalesid\" name=\"Cash_Sales\" class=\"form-control textright\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Cash_Sales : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" readonly>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: -16px\">\n        <div class=\"col-sm-6 text-right\">\n          = Over / Short :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <input type=\"text\" tabindex= \"-1\" id=\"overorshortid\" nale=\"Over_Short\" class=\"form-control textright\" value=\""
    + escapeExpression(((helpers.getFloatAmount || (depth0 && depth0.getFloatAmount) || helperMissing).call(depth0, (depth0 != null ? depth0.Over_Short : depth0), {"name":"getFloatAmount","hash":{},"data":data})))
    + "\" readonly>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row col-sm-12\">\n      <div class=\"col-sm-8\">\n      </div>\n      <div class=\"form-group col-sm-2\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(37, data),"inverse":this.program(39, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "      </div>\n      <div class=\"form-group col-sm-2 \">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.Status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(41, data),"inverse":this.program(43, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["checkverification"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <tr>\n                        <td>\n                            <p class=\"js-check-date\" style=\"margin:0px;\">"
    + escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Date","hash":{},"data":data}) : helper)))
    + "</p>\n                        </td>\n                        <td>\n                            <p class=\"js-check-number\" style=\"margin:0px;\">"
    + escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"number","hash":{},"data":data}) : helper)))
    + "\n                            </p>\n                        </td>\n                        <td>\n                            <p class=\"js-check-account\" style=\"margin:0px;\">"
    + escapeExpression(((helper = (helper = helpers.account || (depth0 != null ? depth0.account : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"account","hash":{},"data":data}) : helper)))
    + "\n                            </p>\n                        </td>\n                        <td>\n                            <p class=\"js-check-amount\" style=\"margin:0px;\">"
    + escapeExpression(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount","hash":{},"data":data}) : helper)))
    + "\n                            </p>\n                        </td>\n                        <td>\n                            <p class=\"js-check-authcode\" style=\"margin:0px;\">"
    + escapeExpression(((helper = (helper = helpers.authcode || (depth0 != null ? depth0.authcode : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authcode","hash":{},"data":data}) : helper)))
    + "\n                            </p>\n                        </td>\n                    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 pull-right\">\n            <button class=\"btn btn-success dropdown-toggle js-validate-check-details\" type=\"button\">\n                <i class=\"fa fa-plus\"></i> Add New\n            </button>\n        </div>\n    </div>\n    <div class=\"row db-checkReader\" style=\"width: 1020px\">\n        <table id=\"checkexample\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n            <thead>\n                <tr>\n                    <th>Date</th>\n                    <th>Number</th>\n                    <th>Account</th>\n                    <th>Amount</th>\n                    <th>Authorization#</th>\n                </tr>\n            </thead>\n            <tbody class=\"js-checkverification\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["createOrder"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "            <tr class=\"card\">\n              <td class=\"mytable\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n              <td class=\"form-group mytable js-orderNumber\" style=\"position:relative;\">\n                <label for=\"\" style=\"position: absolute;\n      left: -7px;\n      top: 16px;\n      border-radius: 50px;\n      width: 20px;\n      height: 20px;\n      font-weight: bold;\n      padding-left: 5px;\">$</label>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.checkData : depth0), 0, {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(5, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "              </td>\n              <td class=\"mytable text-info\">$ "
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = helpers.bill || (depth0 != null ? depth0.bill : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bill","hash":{},"data":data}) : helper)))
    + "</td>\n            </tr>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                  <input type=\"text\" style=\"text-align: right\"  data-currencyId=\""
    + escapeExpression(((helper = (helper = helpers.currencyId || (depth0 != null ? depth0.currencyId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currencyId","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n                    data-amount=\""
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "\" data-step=\"";
  stack1 = ((helpers.parseNumber || (depth0 && depth0.parseNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.Amount : depth0), {"name":"parseNumber","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" style=\"border:2px;\" class=\"form-control js-change-entry js-number-type textright border-thick\" id=\"number\" value=''/><span></span>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)));
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.orderdata : depth0), 0, {"name":"equaltoo","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                      <input type=\"text\"style=\"text-align: right\"  data-currencyId=\""
    + escapeExpression(((helper = (helper = helpers.currencyId || (depth0 != null ? depth0.currencyId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currencyId","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n                        data-amount=\""
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "\" data-step=\"";
  stack1 = ((helpers.parseNumber || (depth0 && depth0.parseNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.Amount : depth0), {"name":"parseNumber","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" style=\"border:2px;\" class=\"form-control js-change-entry js-number-type textright border-thick\" id=\"number\" value=\"0\" /><span></span>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                        <input type=\"text\" style=\"text-align: right\" data-currencyId=\""
    + escapeExpression(((helper = (helper = helpers.currencyId || (depth0 != null ? depth0.currencyId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currencyId","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n                          data-amount=\""
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "\" data-step=\"";
  stack1 = ((helpers.parseNumber || (depth0 && depth0.parseNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.Amount : depth0), {"name":"parseNumber","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" style=\"border:2px;\" class=\"form-control js-change-entry js-number-type textright border-thick\" id=\"number\" value=\""
    + escapeExpression(((helper = (helper = helpers.order_amount || (depth0 != null ? depth0.order_amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_amount","hash":{},"data":data}) : helper)))
    + "\"/><span></span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"container\">\n  <div class=\"row col-sm-6 col-sm-offset-2\">\n    <div id=\"js-changeOrders-viewHistory\">\n      <h4><a class=\"btn btn-success pull-right\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n  </div>\n  <div class=\"row col-sm-6 col-sm-offset-2\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px;margin-left:-115px\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n             <div class=\"col-sm-8\">\n              <label class=\"control-label col-xs-3\" for=\"time\">Date</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-10\">\n              <input type=\"text\" class=\"form-control js-createOrderDate\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly />\n            </div>\n            <div class=\"col-sm-2\">\n              <span class=\"fa fa-calendar fa-2x\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"intials\">Employee Initials</label>\n            <input type=\"text\" maxlength=\"3\" autocomplete=\"off\" class=\"form-control style-4 js-empOrderIntial\" onkeypress=\"return onlyAlphabets(event,this);\" name=\"intials\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;\"\n              value=\""
    + escapeExpression(((helper = (helper = helpers.ordered_by || (depth0 != null ? depth0.ordered_by : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ordered_by","hash":{},"data":data}) : helper)))
    + "\" autofocus>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-2\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px;padding-bottom:0px;\">\n      <table class=\"table\" cellspacing=\"0\" width=\"100%\" style=\"margin-bottom:0px;\">\n        <thead>\n          <tr class=\"card\">\n            <th>Type</th>\n            <th>$ Amount</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody id=\"js-createOrderBody\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.denominations : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          <tr class=\"card\">\n            <td class=\"mytable\">Total</td>\n            <td class=\"form-group mytable\" style=\"position:relative;\">\n              <label for=\"\" style=\"position: absolute;\n    left: -7px;\n    top: 16px;\n    border-radius: 50px;\n    width: 20px;\n    height: 20px;\n    font-weight: bold;\n    padding-left: 5px;\">$</label>\n              <input type=\"number\" tabindex=\"-1\" min=\"0\" style=\"text-align: right\" onkeypress='return event.charCode >= 45 && event.charCode <= 57' min=0 class=\"form-control js-ordered-amountTotal\" value=\""
    + escapeExpression(((helper = (helper = helpers.totalordered || (depth0 != null ? depth0.totalordered : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalordered","hash":{},"data":data}) : helper)))
    + "\" readonly>\n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </form>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-5\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <button class=\"btn btn--dark btn-block js-order-actions\" data-changeOrderId=\""
    + escapeExpression(((helper = (helper = helpers.changeOrderId || (depth0 != null ? depth0.changeOrderId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"changeOrderId","hash":{},"data":data}) : helper)))
    + "\" data-accType=\"Save\" data-loading-text=\"Loading...\">Save</button>\n      </div>\n      <div class=\"col-sm-4\">\n        <button class=\"btn btn--action btn-block js-order-actions\" data-changeOrderId=\""
    + escapeExpression(((helper = (helper = helpers.changeOrderId || (depth0 != null ? depth0.changeOrderId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"changeOrderId","hash":{},"data":data}) : helper)))
    + "\" data-accType=\"Complete\">Complete</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["dipReportInfo"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "            <input type=\"radio\" name=\"reportConfirmation\" value=true checked disabled>YES &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n            <input type=\"radio\" name=\"reportConfirmation\" value=false disabled>NO\n";
  },"3":function(depth0,helpers,partials,data) {
  return "            <input type=\"radio\" name=\"reportConfirmation\" value=true disabled>YES &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n            <input type=\"radio\" name=\"reportConfirmation\" value=false checked disabled>NO\n";
  },"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <tr class=\"card\">\n                    <td class=\"form-group mytable\">\n                        <p class=\"js-tank\">"
    + escapeExpression(((helper = (helper = helpers.tank || (depth0 != null ? depth0.tank : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tank","hash":{},"data":data}) : helper)))
    + "</p>\n                    </td>\n                    <td class=\"form-group mytable \">\n                        <p class=\"js-desc\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "<p>\n                    </td>\n                    <td class=\"form-group mytable \">\n                        <p class=\"js-desc\">"
    + escapeExpression(((helper = (helper = helpers.water || (depth0 != null ? depth0.water : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"water","hash":{},"data":data}) : helper)))
    + "<p>\n                    </td>\n                </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n        <div class=\"row\">\n          <div class=\"col-sm-8\">\n                <label class=\"control-label col-xs-3\" for=\"time\">Date</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-sm-10\">\n              <input type=\"text\" class=\"form-control\" value=\""
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly />\n          </div>\n          <div class=\"col-sm-2\">\n              <span class=\"fa fa-calendar fa-2x\"></span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-xs-4\" for=\"intials\">Employee Initials</label>\n            <input type=\"text\" maxlength=\"3\" class=\"form-control style-4 js-empIntial\" onkeyup=\"this.value=this.value.replace(/[^a-z]/g,'');\" name=\"intials\" value=\""
    + escapeExpression(((helper = (helper = helpers.init || (depth0 != null ? depth0.init : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"init","hash":{},"data":data}) : helper)))
    + "\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;\" readonly>\n        </div>\n        <div class=\"radio\">\n            <label class=\"control-label\" for=\"reportConfirmation\">Tanks Dipped?</label> <br />\n            &nbsp&nbsp&nbsp&nbsp\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.dipped_yn : depth0), "1", {"name":"equaltoo","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n    </form>\n    <div>\n</div>\n\n\n<div class=\"row\">\n    <table class=\"table\">\n        <thead>\n            <tr class=\"card\">\n                <th>Tank</th>\n                <th>Description</th>\n                <th>Water</th>\n\n            </tr>\n        </thead>\n        <tbody class=\"js-manualGasDipBody\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </tbody>\n    </table>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["editAddUserForm"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.store_id : depth0), (this.data(data, 1) && this.data(data, 1).user_store_id), {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                  <option value=\""
    + escapeExpression(((helper = (helper = helpers.store_id || (depth0 != null ? depth0.store_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"store_id","hash":{},"data":data}) : helper)))
    + "\" selected> Store "
    + escapeExpression(((helper = (helper = helpers.store_id || (depth0 != null ? depth0.store_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"store_id","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                  <option value=\""
    + escapeExpression(((helper = (helper = helpers.store_id || (depth0 != null ? depth0.store_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"store_id","hash":{},"data":data}) : helper)))
    + "\"> Store "
    + escapeExpression(((helper = (helper = helpers.store_id || (depth0 != null ? depth0.store_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"store_id","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"container\">\n  <div class=\"row\" style=\"width: 500px\">\n    <div class=\"row\">\n      <h4><a class=\"js-editUserBack btn btn-success pull-right\"><i class=\"fa fa-plus\"></i>&nbsp View History </a></h4>\n    </div>\n    <div class=\"col-lg-offset-4 col-lg-8 col-md-4\" id=\"js-selectstore-hide\" style=\"margin-top:50px;background-color: white;text-align: center;width: 620px; height: 450px\">\n      <tr data_id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <form class=\"form-horizontal\" id=\"js-signup-form\" style=\"padding-top: 20px\">\n          <div class=\"form-group\">\n            <label class=\"control-label col-xs-3\" for=\"inputName\">UserID:<span class=\"required-asterisk\" style=\"color: red\">*</span></label>\n            <div class=\"col-xs-6\">\n              <input type=\"Name\" value=\""
    + escapeExpression(((helper = (helper = helpers.user_id || (depth0 != null ? depth0.user_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"user_id","hash":{},"data":data}) : helper)))
    + "\" onkeypress=\"check(event,this);\" class=\"form-control keyup-name text-input\" id=\"js-editUser-userId\" placeholder=\"Name\" autofocus>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-xs-3\" for=\"inputName\">Name:<span class=\"required-asterisk\">*</span></label>\n          <div class=\"col-xs-6\">\n\n              <input type=\"Name\" value=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" onkeypress=\"check(event,this);\" class=\"form-control keyup-name text-input\" id=\"js-editUser-inputName\" placeholder=\"Name\">\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-xs-3\" for=\"E-mail\">E-mail:<span class=\"required-asterisk\">*</span></label>\n          <div class=\"col-xs-6\">\n            <input type=\"email\" value=\""
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" id=\"js-editUser-E-mail\" placeholder=\"E-mail\">\n          </div>\n        </div>\n        <!-- <div class=\"form-group\">\n        <label class=\"control-label col-xs-3\" for=\"Password\">Password:<span class=\"required-asterisk\">*</span></label>\n        <div class=\"col-xs-6\">\n          <input type=\"password\" class=\"form-control\" id=\"js-editUser-Password\" placeholder=\"Password\">\n        </div>\n      </div> -->\n        <div class=\"form-group\">\n          <label class=\"control-label col-xs-3\" for=\"Initials\">Initials:<span class=\"required-asterisk\">*</span></label>\n          <div class=\"col-xs-6\">\n            <input type=\"text\" value=\""
    + escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initials","hash":{},"data":data}) : helper)))
    + "\" onkeypress=\"checkinitial(event,this);\" class=\"form-control keyup-intials text-input\" maxlength=\"3\" id=\"js-editUser-Initials\" placeholder=\"Initials\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <!-- <label class=\"control-label col-xs-3\">Store:</label>\n          <div class=\"col-xs-6\">\n            <select class=\"form-control\" id=\"js-msgstoreid\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.stores : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </select> -->\n            <label class=\"control-label col-xs-3\" for=\"store\">Store:<span class=\"required-asterisk\">*</span></label>\n            <div class=\"col-xs-6\">\n              <input type=\"text\" value=\""
    + escapeExpression(((helper = (helper = helpers.user_store_id || (depth0 != null ? depth0.user_store_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"user_store_id","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control keyup-intials text-input\" id=\"js-editUser-storeId\" placeholder=\"store\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-xs-3\" for=\"role\">Role:<span class=\"required-asterisk\">*</span></label>\n            <div class=\"col-xs-6\">\n              <input type=\"text\" value=\""
    + escapeExpression(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"role","hash":{},"data":data}) : helper)))
    + "\"  class=\"form-control keyup-intials text-input\" id=\"js-editUser-role\" placeholder=\"role\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-9\">\n              <button type=\"submit\" class=\"btn btn-primary js-superadmin-editusersubmit\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">Submit</button>\n              <button type=\"reset\" class=\"btn btn-default js-superadmin-edituserreset\">Reset</button>\n            </div>\n          </div>\n        </div>\n      </form>\n      </td>\n  </div>\n\n</div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["empithelp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"row\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\" style=\"margin-top: -16px\">\n            <div class=\"col-sm-6 text-right\">\n                Verify OTP :\n            </div>\n            <div class=\"col-sm-4 form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"empitotpid\" maxlength=\"6\" name=\"initials\" value=\""
    + escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initials","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Enter OTP\"autofocus>\n                <br>\n                <button class=\"btn btn-primary js-empOPTverify\" data-cash_recon_id=\""
    + escapeExpression(((helper = (helper = helpers.cash_recon_id || (depth0 != null ? depth0.cash_recon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cash_recon_id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-accType=\"Complete\" data-loading-text=\"Loading...\">Verify</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["endofday"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <tr>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bdate","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initials","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.Over_Short || (depth0 != null ? depth0.Over_Short : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Over_Short","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>\n                            <div class=\"row\">\n                                <div class=\"col-sm-3 col-sm-offset-2\">\n                                    <i class=\"fa fa-list fa-2x js-endofthedayActions\" data-reconid=\""
    + escapeExpression(((helper = (helper = helpers.cash_recon_id || (depth0 != null ? depth0.cash_recon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cash_recon_id","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\" style=\"margin-left: -6px;cursor: pointer; cursor: hand;\"></i>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n    <div class=\"row js-changeOrder\">\n        <div class=\"col-sm-3 pull-right\">\n            <button style=\"margin-left:-32px;\" class=\"btn btn-success dropdown-toggle js-addendofDay\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      <i class=\"fa fa-plus\"></i>&nbsp Add New\n    </button>\n        </div>\n    </div>\n\n    <div class=\"row db-endofDay\" style=\"width: 1020px\">\n        <table id=\"example\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n            <thead>\n                <tr>\n                    <th>BusinessDate</th>\n                    <th>Date</th>\n                    <th>Time</th>\n                    <th>Initials</th>\n                    <th>Over/short</th>\n                    <th>Status </th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["endofdayhistry"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n    <div id=\"js-end-histerydiv\">\n        <h4 style=\"text-align:right; margin-right: 10%;\"><a class=\"btn btn-success\" style=\"margin-right:125px;margin-top:0px;\"  id=\"js-endofday-histery-link\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n    <div id=\"js-histerydetailspage\"></div>\n    <div id=\"js-contentdiv\"></div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["endofdaywarning"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "                    <p>Bakery Order</p>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "";
},"5":function(depth0,helpers,partials,data) {
  return "                    <p>Change Orders</p>\n";
  },"7":function(depth0,helpers,partials,data) {
  return "                    <p>Manual Gas Dip Reports</p>\n";
  },"9":function(depth0,helpers,partials,data) {
  return "                    <p>Shift Check-in</p>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<div class=\"row\">\n    <div class=\"col-sm-5 col-sm-offset-3 text-center\" style=\"margin-top: 30px;margin-bottom:30px\">\n        <p style=\"font-weight: bold;font-size: 20px\">Warning</p>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-5 col-sm-offset-3\">\n        <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n            <p><span id=\"js-reportName\"></span> There are orders left in Saved state in the following categories:\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.BakeryOrderStatus : depth0), "Save", {"name":"equaltoo","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.ChangeOrderStatus : depth0), "Save", {"name":"equaltoo","hash":{},"fn":this.program(5, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.GasDipStatus : depth0), "Save", {"name":"equaltoo","hash":{},"fn":this.program(7, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.ShiftCheckInStatus : depth0), "Save", {"name":"equaltoo","hash":{},"fn":this.program(9, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                Please complete them to proceed futher.\n            </p>\n            <br/>\n            <div class=\"row\">\n              <div class=\"col-sm-3\"></div>\n                <div class=\"col-sm-6\">\n                    <button class=\"btn btn-block btn--action col-sm-6\" id=\"js-histery-link\">EXIT</button>\n                </div>\n              <div class=\"col-sm-3\"></div>\n            </div>\n        </form>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["gasDipReport"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n        <div class=\"row\">\n          <div class=\"col-sm-8\">\n                <label class=\"control-label col-xs-3\" for=\"time\">Date</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-sm-10\">\n              <input type=\"text\" class=\"form-control js-cardReaderDate\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly />\n          </div>\n          <div class=\"col-sm-2\">\n              <span class=\"fa fa-calendar fa-2x\"></span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-xs-2\" for=\"time\">Time</label>\n            <input type=\"text\" class=\"form-control style-4 js-cardReaderTime\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-xs-4\" for=\"intials\">Employee Iniials</label>\n            <input type=\"text\" maxlength=\"3\" autocomplete=\"off\" class=\"form-control style-4 js-empIntial\" onkeypress=\"return onlyAlphabets(event,this);\" name=\"intials\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;\">\n        </div>\n        <div class=\"radio\">\n            <label class=\"control-label\" for=\"reportConfirmation\">Tanks Dipped?</label> <br />\n            &nbsp&nbsp&nbsp&nbsp <input type=\"radio\" name=\"reportConfirmation\" value=true >YES &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n            <input type=\"radio\" name=\"reportConfirmation\" value=false checked>NO\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn--action btn-block\" id=\"js-gasDipReportSubmit\" style=\"background-color:#00985C\">OK</button>\n        </div>\n    </form>\n    <div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["gasDipReportEntry"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "            <input type=\"radio\" name=\"reportConfirmation\" value=true checked>YES &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n            <input type=\"radio\" name=\"reportConfirmation\" value=false >NO\n";
  },"3":function(depth0,helpers,partials,data) {
  return "            <input type=\"radio\" name=\"reportConfirmation\" value=true >YES &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n            <input type=\"radio\" name=\"reportConfirmation\" value=false checked>NO\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <tr class=\"card\">\n                    <td class=\"form-group mytable\">\n                        <p class=\"js-tank\">"
    + escapeExpression(((helper = (helper = helpers.tank || (depth0 != null ? depth0.tank : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tank","hash":{},"data":data}) : helper)))
    + "</p>\n                    </td>\n                    <td class=\"form-group mytable \">\n                        <p class=\"js-desc\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "<p>\n                    </td>\n                    <td class=\"form-group mytable\">\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </td>\n                </tr>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <input type=\"text\" data-dayid=\""
    + escapeExpression(((helper = (helper = helpers.dayid || (depth0 != null ? depth0.dayid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dayid","hash":{},"data":data}) : helper)))
    + "\" data-gallons=\""
    + escapeExpression(((helper = (helper = helpers.gallons || (depth0 != null ? depth0.gallons : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gallons","hash":{},"data":data}) : helper)))
    + "\" data-inches=\""
    + escapeExpression(((helper = (helper = helpers.inches || (depth0 != null ? depth0.inches : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inches","hash":{},"data":data}) : helper)))
    + "\" data-temp=\""
    + escapeExpression(((helper = (helper = helpers.temp || (depth0 != null ? depth0.temp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"temp","hash":{},"data":data}) : helper)))
    + "\" data-ullage=\""
    + escapeExpression(((helper = (helper = helpers.ullage || (depth0 != null ? depth0.ullage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ullage","hash":{},"data":data}) : helper)))
    + "\" data-ts=\""
    + escapeExpression(((helper = (helper = helpers.ts || (depth0 != null ? depth0.ts : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ts","hash":{},"data":data}) : helper)))
    + "\" class=\"js-water js-decimal-type textright\" min=0 value=\""
    + escapeExpression(((helper = (helper = helpers.water || (depth0 != null ? depth0.water : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"water","hash":{},"data":data}) : helper)))
    + "\" readonly=\"readonly\" placeholder=\"0.00\">\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <input type=\"text\" data-dayid=\""
    + escapeExpression(((helper = (helper = helpers.dayid || (depth0 != null ? depth0.dayid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dayid","hash":{},"data":data}) : helper)))
    + "\" data-gallons=\""
    + escapeExpression(((helper = (helper = helpers.gallons || (depth0 != null ? depth0.gallons : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gallons","hash":{},"data":data}) : helper)))
    + "\" data-inches=\""
    + escapeExpression(((helper = (helper = helpers.inches || (depth0 != null ? depth0.inches : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inches","hash":{},"data":data}) : helper)))
    + "\" data-temp=\""
    + escapeExpression(((helper = (helper = helpers.temp || (depth0 != null ? depth0.temp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"temp","hash":{},"data":data}) : helper)))
    + "\" data-ullage=\""
    + escapeExpression(((helper = (helper = helpers.ullage || (depth0 != null ? depth0.ullage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ullage","hash":{},"data":data}) : helper)))
    + "\" data-ts=\""
    + escapeExpression(((helper = (helper = helpers.ts || (depth0 != null ? depth0.ts : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ts","hash":{},"data":data}) : helper)))
    + "\" class=\"js-water js-decimal-type textright\" min=0 value=\""
    + escapeExpression(((helper = (helper = helpers.water || (depth0 != null ? depth0.water : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"water","hash":{},"data":data}) : helper)))
    + "\"  placeholder=\"0.00\">\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"row\">\n  <div id=\"js-GasDiphisterydiv\">\n      <h4 style=\"text-align:right; margin-right: 10%;\"><a class=\"btn btn-success\" style=\"margin-right:125px;margin-top:0px;\" id=\"js-histery-gasDip\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n  </div>\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <!-- <div class=\"row\">\n    <div id=\"js-GasDiphisterydiv\">\n        <h4 style=\"text-align:right; margin-right: 10%;\"><a id=\"js-histery-gasDip\">Go To History Page</a></h4></div>\n    </div> -->\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px; width: 80%; height:220px\">\n        <div class=\"row\">\n          <div class=\"col-sm-8\">\n                <label class=\"control-label col-xs-5\" for=\"time\" style=\"margin-left:-15px;\">Date</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"gas_date\" value=\""
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly />\n          </div>\n          <div class=\"col-sm-2\">\n              <span class=\"fa fa-calendar fa-2x\"></span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-xs-6\" for=\"intials\" style=\"margin-left:-15px;\">Employee Initials</label>\n            <input autofocus type=\"text\" maxlength=\"3\" class=\"form-control style-4 js-empIntial\" onkeypress=\"return onlyAlphabets(event,this);\" name=\"intials\" value=\""
    + escapeExpression(((helper = (helper = helpers.init || (depth0 != null ? depth0.init : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"init","hash":{},"data":data}) : helper)))
    + "\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white; width: 295px;\">\n        </div>\n        <div class=\"radio\">\n            <label class=\"control-label\" for=\"reportConfirmation\">Tanks Dipped?</label> <br />\n            &nbsp&nbsp&nbsp&nbsp\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.dipped_yn : depth0), 1, {"name":"equaltoo","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n    </form>\n    <div>\n</div>\n\n\n<div class=\"row\">\n    <table class=\"table\" style=\"width:80%;\">\n        <thead>\n            <tr class=\"card\">\n                <th>Tank</th>\n                <th>Description</th>\n                <th>Water</th>\n            </tr>\n        </thead>\n\n        <tbody class=\"js-manualGasDipBody\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </tbody>\n    </table>\n</div>\n<div class=\"row\">\n    <div class=\"form-group col-sm-3 col-sm-offset-6\">\n        <button class=\"btn btn--dark btn-block js-gasDipReportSubmit\" data-accType=\"Save\" data-loading-text=\"Loading...\">Save</button>\n    </div>\n    <div class=\"form-group col-sm-3\">\n        <button class=\"btn btn--action btn-block js-gasDipReportSubmit\" data-accType=\"Complete\" data-loading-text=\"Loading...\">Complete</button>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["histerytable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <tr>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bdate","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"initials","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.Over_Short || (depth0 != null ? depth0.Over_Short : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Over_Short","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>\n                            <div class=\"row\">\n                                <div class=\"col-sm-3 col-sm-offset-2\">\n                                    <i class=\"fa fa-list fa-2x js-shiftcheckinActions\" data-reconid=\""
    + escapeExpression(((helper = (helper = helpers.cash_recon_id || (depth0 != null ? depth0.cash_recon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cash_recon_id","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\" style=\"margin-left: -6px;cursor: pointer; cursor: hand;\"></i>\n\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n    <div class=\"row js-changeOrder\">\n        <div class=\"col-sm-3 pull-right\">\n            <button  class=\"js-addshiftChechIn btn btn-success\" type=\"button\">\n              <i class=\"fa fa-plus\"></i>&nbsp Add New\n            </button>\n        </div>\n    </div>\n\n    <div class=\"row db-shiftCheck\" style=\"width: 1020px\">\n        <table id=\"example\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n            <thead>\n                <tr>\n                    <th>BusinessDate</th>\n                    <th>Date</th>\n                    <th>Time</th>\n                    <th>Initials</th>\n                    <th>Over/short</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["home"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.read : depth0), 0, {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <div class=\"panel panel-default bs-callout bs-callout-danger\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-10\">\n                          <div class=\"col-sm-4\">\n                            <h4 class=\"panel-title\">\n                              <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\n                              <span>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</span>\n                            </h4>\n                          </div>\n                          <div class=\"col-sm-5\">\n\n                            <span>"
    + escapeExpression(((helper = (helper = helpers.date_sent || (depth0 != null ? depth0.date_sent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date_sent","hash":{},"data":data}) : helper)))
    + "</span>\n                          </div>\n                          <div class=\"col-sm-3\">\n\n                            <span>"
    + escapeExpression(((helper = (helper = helpers.time_sent || (depth0 != null ? depth0.time_sent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time_sent","hash":{},"data":data}) : helper)))
    + "</span>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\" data-read=\""
    + escapeExpression(((helper = (helper = helpers.read || (depth0 != null ? depth0.read : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"read","hash":{},"data":data}) : helper)))
    + "\" data-message_id=\""
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "\">\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#"
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "\" class=\"js-statusText\">Show</a>&nbsp&nbsp<i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                    <div id=\""
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">"
    + escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper)))
    + "</div>\n                    </div>\n                </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <div class=\"panel panel-default bs-callout bs-callout-success\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-10\">\n                        <div class=\"col-sm-4\">\n                          <h4 class=\"panel-title\">\n                            <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\n                            <span>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</span>\n                          </h4>\n                        </div>\n                        <div class=\"col-sm-5\">\n\n                          <span>"
    + escapeExpression(((helper = (helper = helpers.date_sent || (depth0 != null ? depth0.date_sent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date_sent","hash":{},"data":data}) : helper)))
    + "</span>\n                        </div>\n                        <div class=\"col-sm-3\">\n\n                          <span>"
    + escapeExpression(((helper = (helper = helpers.time_sent || (depth0 != null ? depth0.time_sent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time_sent","hash":{},"data":data}) : helper)))
    + "</span>\n                        </div>\n                      </div>\n                        <div class=\"col-sm-2\" data-read=\""
    + escapeExpression(((helper = (helper = helpers.read || (depth0 != null ? depth0.read : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"read","hash":{},"data":data}) : helper)))
    + "\" data-message_id=\""
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "\">\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#"
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "\" class=\"js-statusText\">Show</a>&nbsp&nbsp<i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\n                        </div>\n                    </div>\n                    <div id=\""
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">"
    + escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper)))
    + "</div>\n                    </div>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"row\">\n    <div class=\"panel-group\" id=\"accordion\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["ithelpdesk"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"inline\">\n    <div class=\"col-sm-10\">\n\n        <h3 class=\"col-sm-4\">One Time Password:</h3>\n        <input type=\"text\" class=\"col-sm-2\" id=\"messageOTP\" style=\"margin-top:20px;\" readonly=\"\"></div>\n\n      </div>\n    </div>\n        </div>\n";
  },"useData":true});
this["MyApp"]["templates"]["itpaymentHistory"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- <div class=\"row\">\n<div id=\"js-itpaymenthisterydiv\">\n    <h4 style=\"text-align:right; margin-right: 10%;\"><a id=\"js-histery-itPayment\">Go To History Page</a></h4></div>\n</div> -->\n";
  },"useData":true});
this["MyApp"]["templates"]["itpaymentTable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                    <tr>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bdate","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.employee_initials || (depth0 != null ? depth0.employee_initials : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"employee_initials","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.checked_status : depth0), 1, {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        <td>"
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "</td>\n                    </tr>\n";
},"2":function(depth0,helpers,partials,data) {
  return "                            <td> Yes </td>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "                                <td> No </td>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n    <div class=\"row col-sm-3 pull-right\">\n        <h4><a class = \"btn btn-success\" id=\"js-addItPayment\" style=\"margin-left: -39px;\" style=\"margin-left: -38;\"><i class=\"fa fa-plus\"></i>&nbsp Add New </a></h4>\n    </div>\n    <div class=\"row db-itPayment\" style=\"width: 1020px\">\n        <table id=\"itpaymentexample\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n            <thead>\n                <tr>\n                    <th>BusinessDate</th>\n                    <th>Employee Initials</th>\n                    <th>Checked Status </th>\n                    <th>Reported Date</th>\n                    <th>Reported Time</th>\n                </tr>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tablerows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["manualGasHistory"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- <div class=\"row\">\n<div id=\"js-GasDiphisterydiv\">\n    <h4 style=\"text-align:right; margin-right: 10%;\"><a id=\"js-histery-gasDip\">Go To History Page</a></h4></div>\n</div> -->\n";
  },"useData":true});
this["MyApp"]["templates"]["manualGasdipTable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                    <tr>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bdate","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.dipped_yn : depth0), "1", {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.init || (depth0 != null ? depth0.init : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"init","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>\n                            <div class=\"row\">\n                                <div class=\"col-sm-3 col-sm-offset-2\">\n                                    <i class=\"fa fa-list fa-2x js-gasdipOrderActions\" data-date=\""
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\" style=\"margin-left: -6px;cursor: pointer; cursor: hand;\"></i>\n                                </div>\n                            </div>\n                        </td>\n\n                    </tr>\n";
},"2":function(depth0,helpers,partials,data) {
  return "                                Yes\n";
  },"4":function(depth0,helpers,partials,data) {
  return "                                    No\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n    <div class=\"row js-changeOrder\">\n        <div class=\"col-sm-3 pull-right\">\n            <button style=\"margin-left:-32px;\" class=\"btn btn-success dropdown-toggle js-addgasDipPayment\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      <i class=\"fa fa-plus\"></i>&nbsp Add New\n    </button>\n        </div>\n    </div>\n\n    <div class=\"row db-manualGas\" style=\"width: 1020px\">\n        <table id=\"manualgasdipexample\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n            <thead>\n                <tr>\n                    <th>BusinessDate</th>\n                    <th>ReportedDate</th>\n                    <th>Time</th>\n                    <th>Dipped</th>\n                    <th>Initials</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n\n                </tr>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tablerows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["moneyOrder"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-3\" style=\"margin-top:10%;\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n\n      <div class=\"row\">\n        <label class=\"control-label\" for=\"time\">Scan item or enter Money Order number</label>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control style-4 js-moneyOrderNum js-number-type\" name=\"time\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" autofocus maxlength=\"11\">\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn--action btn-block js-moneyOrderSubmit\" style=\"background-color:#00985C\" data-loading-text=\"Loading...\">Continue</button>\n      </div>\n    </form>\n    <div>\n    </div>\n";
  },"useData":true});
this["MyApp"]["templates"]["moneyOrderCashedErr"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-4\" style=\"margin-top: 30px;margin-bottom:30px\">\n     <p style=\"font-weight: bold;font-size: 20px\">***  WARNING *** DO NOT CASH ***</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-7 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n       <p>Only the office can Authorize cashing of this money order</p></br />\n       <p>Please ask customer to contact the office Monday- Friday from 8am to 5pm</p></br />\n       <p>Office phone: 405-682-5711</p></br />\n       <p>Moneyorder Already cashed.</p></br />\n       <div class=\"row\">\n         <div class=\"col-sm-2 col-sm-offset-5\">\n             <button class=\"btn btn-block js-moneyOrderExit\"style=\"background-color: #00985C;\"\">EXIT</button>\n         </div>\n       </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["moneyOrderConfirmation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-7 col-sm-offset-2\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n       <p>Before cashing the check on holds or stops</p></br />\n       <p>Call 1-877-278-8807</p>\n       <p>CASH THIS MONEY ORDER</p></br />\n       <div class=\"row\">\n         <div class=\"col-sm-2 col-sm-offset-4\">\n             <button class=\"btn btn--action btn-block js-moneyOrderCashed\" data-SerialNo=\"\">YES</button>\n         </div>\n         <div class=\"col-sm-2\">\n             <button class=\"btn btn-danger btn-block js-moneyOrderQuit\">NO</button>\n         </div>\n       </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["moneyOrderErr"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-4\" style=\"margin-top: 30px;margin-bottom:30px\">\n     <p style=\"font-weight: bold;font-size: 20px\">***  WARNING *** DO NOT CASH ***</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n       <p>Only the office can Authorize cashing of this money order</p></br />\n       <p>Please ask customer to contact the office Monday- Friday from 8am to 5pm</p></br />\n       <p>Office phone: 405-682-5711</p></br />\n       <!-- <p>ElSE IF AUTHCODE EQ 'AMOUNT ERROR' MOVE 'INVALID AMOUNT'</p></br /> -->\n       <div class=\"row\">\n         <div class=\"col-sm-2 col-sm-offset-5\">\n             <button class=\"btn btn-block js-moneyOrderExit\" style=\"background-color:#00985C;\">EXIT</button>\n         </div>\n       </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["moneyOrderInfo"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"time\">MO Number : </label>\n          <input type=\"text\" class=\"form-control style-4 js-moneyOrderConfirmNumber\" value=\""
    + escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"number","hash":{},"data":data}) : helper)))
    + "\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly>\n        </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"time\">MO Amount : </label>\n          <input type=\"text\" class=\"form-control style-4 js-moneyOrderConfirmAmount\" value=\""
    + escapeExpression(((helper = (helper = helpers.rows || (depth0 != null ? depth0.rows : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rows","hash":{},"data":data}) : helper)))
    + "\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.number : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n      <div class=\"form-group\">\n        <button class=\"btn btn--action btn-block js-moneyOrderConfirmSubmit\" data-cashed=\"\" style=\"background-color:#00985C\">Continue</button>\n      </div>\n    </form>\n  </div>\n    </div>\n";
},"useData":true});
this["MyApp"]["templates"]["moneyOrderSuccessTemp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\" style=\"margin-top:7%;\">\n  <div class=\"col-sm-5 col-sm-offset-4\" style=\"margin-top: 30px;margin-bottom:30px\">\n    <p style=\"font-weight: bold;font-size: 20px\">*** SUCCESS ***</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-2\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n      <p>YOUR MONEY ORDER IS CASHED</p>\n      </br />\n      <div class=\"row\">\n      <!-- <div class=\"col-sm-2 col-sm-offset-4\">\n          <button class=\"btn btn-block js-moneyOrderSuccess\">OK</button>\n        </div> -->\n        <div class=\"col-sm-4\"></div>\n         <div class=\"col-sm-4\">\n          <button class=\"btn btn-block js-moneyOrderExit\" style=\"background-color: #00985C;\">EXIT</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["paymentReport"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"container\">\n    <div class=\"row col-sm-9\">\n        <div id=\"js-itpaymenthisterydiv\">\n            <h4><a class=\"btn btn-success pull-right\" id=\"js-histery-itPayment\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n    </div>\n    <div class=\"row col-sm-6 col-sm-offset-3\">\n        <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n            <div class=\"row\">\n                <div class=\"col-sm-8\">\n                    <label class=\"control-label col-xs-3\" for=\"time\">Date</label>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-sm-10\">\n                    <input type=\"text\" name=\"datetime\" class=\"form-control js-itPaymentDate\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly />\n                </div>\n                <div class=\"col-sm-2\">\n                    <span class=\"fa fa-calendar fa-2x\"></span>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-xs-2\" for=\"time\">Time</label>\n                <input type=\"text\" class=\"form-control style-4 js-itPaymentTime\" name=\"time\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" readonly>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-xs-4\" for=\"intials\">Employee Initials</label>\n                <input type=\"text\" maxlength=\"3\" class=\"form-control style-4 js-empIntial\" onkeypress=\"return onlyAlphabets(event,this);\" id=\"js-it-empIntial\" name=\"intials\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;\"\n                    autofocus>\n            </div>\n            <div class=\"radio\">\n                <label class=\"control-label\" for=\"reportConfirmation\">IT & Payment Equipment Checked?</label><br />\n                <input type=\"radio\" name=\"reportConfirmation\" value=true>YES&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n                <input type=\"radio\" name=\"reportConfirmation\" value=false checked>NO\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn--action btn-block js-reportSubmit\" id=\"js-itPaymentSubmit\" style=\"background-color:#00985C\">OK</button>\n            </div>\n        </form>\n    </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["printShelfErr"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3 text-center\" style=\"margin-top: 30px;margin-bottom:30px\">\n    <p style=\"font-weight: bold;font-size: 20px\">NOTICE</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n      <p><span id=\"js-reportName\"></span> UPC verification Failed!!\n      </p>\n      <br/>\n\n\n      <div class=\"row\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <button class=\"btn btn-block js-print-success-exit\" style=\"background-color: #00985C;\">EXIT</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["printShelfSuccess"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3 text-center\" style=\"margin-top: 30px;margin-bottom:30px\">\n    <p style=\"font-weight: bold;font-size: 20px\">NOTICE</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n      <p><span id=\"js-reportName\"></span> UPC has been successfully verified</p>\n      <br/>\n    <p>done at&nbsp&nbsp<span style=\"font-weight: bold;\">\n      </span>&nbsp&nbsp&nbspon&nbsp&nbsp&nbsp\n      <span class=\"js-respDate\" style=\"font-weight: bold;\">\n        Product Name : "
    + escapeExpression(((helper = (helper = helpers.product_name || (depth0 != null ? depth0.product_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"product_name","hash":{},"data":data}) : helper)))
    + "\n      </span>\n    </p>\n      <br/>\n      <div class=\"row\">\n        <!-- <div class=\"col-sm-2 col-sm-offset-4\">\n    <button class=\"btn btn-block js-moneyOrderSuccess\">OK</button>\n  </div> --><div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <button class=\"btn btn-block js-print-success-exit\" style=\"background-color: #00985C;\">Exit</button>\n          <button class=\"btn btn-block js-print-success-print\" style=\"background-color: #0097F8;\">Print</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["printShelfTag"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-3\" style=\"margin-top:10%;\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n\n        <div class=\"form-group\">\n            <label class=\"control-label col-xs-2\" for=\"time\">UPC</label>\n            <input type=\"number\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' class=\"form-control style-4 js-printShelfNum\" name=\"time\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\"autofocus>\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn--action btn-block js-printShelfSubmit\" style=\"background-color:#00985C\">Continue</button>\n        </div>\n    </form>\n    <div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["receivedOrder"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" maxlength=\"3\" onkeypress=\"return onlyAlphabets(event,this);\" class=\"form-control style-4 js-receiveOrderIntial border-thick\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.receivedDetails : depth0)) != null ? stack1.received_by : stack1), depth0))
    + "\" name=\"intials\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 20px;\" disabled autofocus=\"\">\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              <input type=\"text\" maxlength=\"3\" onkeypress=\"return onlyAlphabets(event,this);\" class=\"form-control style-4 js-receiveOrderIntial border-thick\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.receivedDetails : depth0)) != null ? stack1.received_by : stack1), depth0))
    + "\" name=\"intials\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 20px;\" autofocus=\"\">\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <tr class=\"card\" style=\"height: 58px\">\n              <td class=\"mytable\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n            </tr>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <tr class=\"card\">\n              <td class=\"mytable\" style=\"position:relative;\">\n                <label for=\"\" style=\"position: absolute;\n                  left: -7px;\n                  top: 16px;\n                  border-radius: 50px;\n                  width: 20px;\n                  height: 20px;\n                  font-weight: bold;\n                  padding-left: 5px;\">$</label>\n                <input type=\"number\" min=\"0\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' style=\"text-align: right\" class=\"form-control border-thick\" value=\""
    + escapeExpression(((helper = (helper = helpers.order_amount || (depth0 != null ? depth0.order_amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_amount","hash":{},"data":data}) : helper)))
    + "\" disabled>\n              </td>\n            </tr>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.received_status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <tr class=\"card\">\n                <td class=\"mytable\" style=\"position:relative;\" data-currencyId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-currency=\""
    + escapeExpression(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currency","hash":{},"data":data}) : helper)))
    + "\">\n                  <label for=\"\" style=\"position: absolute;\n              left: -7px;\n              top: 16px;\n              border-radius: 50px;\n              width: 20px;\n              height: 20px;\n              font-weight: bold;\n              padding-left: 5px;\">$</label>\n                  <input type=\"number\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' style=\"text-align: right\" min=\"0\" class=\"form-control js-receivedEntry border-thick\" value=\""
    + escapeExpression(((helper = (helper = helpers.received_amount || (depth0 != null ? depth0.received_amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"received_amount","hash":{},"data":data}) : helper)))
    + "\" data-status=\""
    + escapeExpression(((helper = (helper = helpers.order_status || (depth0 != null ? depth0.order_status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_status","hash":{},"data":data}) : helper)))
    + "\" disabled><span></span>\n                </td>\n                <td class=\"mytable text-info\">$ "
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = helpers.bill || (depth0 != null ? depth0.bill : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bill","hash":{},"data":data}) : helper)))
    + "</td>\n              </tr>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <tr class=\"card\">\n                  <td class=\"mytable\" style=\"position:relative;\" data-currencyId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-currency=\""
    + escapeExpression(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currency","hash":{},"data":data}) : helper)))
    + "\">\n                    <label for=\"\" style=\"position: absolute;\n              left: -7px;\n              top: 16px;\n              border-radius: 50px;\n              width: 20px;\n              height: 20px;\n              font-weight: bold;\n              padding-left: 5px;\">$</label>\n                    <input type=\"number\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' style=\"text-align: right\" min=\"0\" class=\"form-control js-receivedEntry border-thick\" value=\""
    + escapeExpression(((helper = (helper = helpers.received_amount || (depth0 != null ? depth0.received_amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"received_amount","hash":{},"data":data}) : helper)))
    + "\" data-status=\""
    + escapeExpression(((helper = (helper = helpers.order_status || (depth0 != null ? depth0.order_status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_status","hash":{},"data":data}) : helper)))
    + "\" step=\"";
  stack1 = ((helpers.parseNumber || (depth0 && depth0.parseNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.Amount : depth0), {"name":"parseNumber","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"><span></span>\n                  </td>\n                  <td class=\"mytable  text-info\">$ "
    + escapeExpression(((helper = (helper = helpers.Amount || (depth0 != null ? depth0.Amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Amount","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = helpers.bill || (depth0 != null ? depth0.bill : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bill","hash":{},"data":data}) : helper)))
    + "</td>\n                </tr>\n";
},"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)));
  },"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.received_amount || (depth0 != null ? depth0.received_amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"received_amount","hash":{},"data":data}) : helper)));
  },"17":function(depth0,helpers,partials,data) {
  return "  <div class=\"row\" style=\"display: none\">\n    <div class=\"col-sm-5 col-sm-offset-5\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <button class=\"btn btn--dark btn-block js-receiveOrder-actions\" data-changeOrderId=\"\" data-accType=\"Save\" data-loading-text=\"Loading...\">Save</button>\n        </div>\n        <div class=\"col-sm-4\">\n          <button class=\"btn btn--action btn-block js-receiveOrder-actions\" data-changeOrderId=\"\" data-accType=\"Complete\">Complete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n";
  },"19":function(depth0,helpers,partials,data) {
  return "    <div class=\"row\" style=\"margin-bottom:20px;\">\n      <div class=\"col-sm-5 col-sm-offset-5\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <button class=\"btn btn--dark btn-block js-receiveOrder-actions\" data-changeOrderId=\"\" data-accType=\"Save\" data-loading-text=\"Loading...\">Save</button>\n          </div>\n          <div class=\"col-sm-4\">\n            <button class=\"btn btn--action btn-block js-receiveOrder-actions\" data-changeOrderId=\"\" data-accType=\"Complete\">Complete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"row\">\n  <div id=\"js-GasDiphisterydiv\">\n    <h4 style=\"text-align:right; margin-right: 10%;\"><a class=\"btn btn-success\" id=\"js-histery-changeorder\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n  <div class=\"col-sm-10 col-sm-offset-1\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px;padding-bottom:0px;\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\" style=\"margin-top: -10px;margin-bottom: 20px\">\n          <center><strong><h4>Ordered</h4></strong></center>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <label class=\"control-label col-xs-3\" for=\"time\">Date</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-10\">\n              <input type=\"text\" class=\"form-control js-createOrderDate\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" disabled />\n            </div>\n            <div class=\"col-sm-2\">\n              <span class=\"fa fa-calendar fa-2x\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"intials\">Employee Initials</label>\n            <input type=\"text\" maxlength=\"3\" autocomplete=\"off\" class=\"form-control style-4 js-empOrderIntial\" onkeypress=\"return onlyAlphabets(event,this);\" name=\"intials\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 20px;\" disabled autofocus>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-10 col-sm-offset-1\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px;padding-bottom:0px;\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\" style=\"margin-top: -10px;margin-bottom: 20px\">\n          <center><strong><h4>Received</h4></strong></center>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <label class=\"control-label col-xs-3\" for=\"time\">Date</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-10\">\n              <input type=\"text\" class=\"form-control js-receivedOrderDate\" style=\"padding: 10px;border: none;border-bottom: solid 2px #c9c9c9;transition: border 0.3s;background-color: white;font-size: 18px;\" disabled />\n            </div>\n            <div class=\"col-sm-2\">\n              <span class=\"fa fa-calendar fa-2x\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"intials\">Employee Initials</label>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.received_status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-2 col-sm-offset-2\"></div>\n  <div class=\"col-sm-2\">\n    <center>\n      <h4>Ordered</h4></center>\n  </div>\n  <div class=\"col-sm-2\">\n    <center>\n      <h4>Received</h4></center>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2 col-sm-offset-2\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px;padding-bottom:0px;\">\n      <table class=\"table\" cellspacing=\"0\" width=\"100%\">\n        <thead>\n          <tr class=\"card\">\n            <th>Type</th>\n          </tr>\n        </thead>\n        <tbody id=\"js-createOrderBody\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.denominations : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "          <tr class=\"card\" style=\"height: 58px\">\n            <td class=\"mytable\">Total</td>\n          </tr>\n        </tbody>\n      </table>\n    </form>\n  </div>\n  <div class=\"col-sm-2\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px;padding-bottom:0px;\">\n      <table class=\"table\" cellspacing=\"0\" width=\"100%\">\n        <thead>\n          <tr class=\"card\">\n            <th>$ Amount</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody id=\"js-createOrderBody\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.denominations : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "          <tr class=\"card\">\n            <td class=\"mytable\" style=\"position:relative;\">\n              <label for=\"\" style=\"position: absolute;\n              left: -7px;\n              top: 16px;\n              border-radius: 50px;\n              width: 20px;\n              height: 20px;\n              font-weight: bold;\n              padding-left: 5px;\">$</label>\n              <input type=\"number\" min=\"0\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' style=\"text-align: right\" class=\"form-control border-thick\" value=\""
    + escapeExpression(((helper = (helper = helpers.totalordered || (depth0 != null ? depth0.totalordered : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalordered","hash":{},"data":data}) : helper)))
    + "\" disabled>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n    </form>\n  </div>\n  <div class=\"col-sm-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px;padding-bottom:0px;\">\n      <table class=\"table\" cellspacing=\"0\" width=\"100%\" style=\"margin-bottom:0px;\">\n        <thead>\n          <tr class=\"card\">\n            <th>$ Amount</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody class=\"js-receivedOrderBody\" data-total=\""
    + escapeExpression(((helper = (helper = helpers.totalordered || (depth0 != null ? depth0.totalordered : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalordered","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.denominations : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "          <tr class=\"card\">\n            <td class=\"mytable\" style=\"position:relative;\" data-currencyId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n              <label for=\"\" style=\"position: absolute;\n              left: -7px;\n              top: 16px;\n              border-radius: 50px;\n              width: 20px;\n              height: 20px;\n              font-weight: bold;\n              padding-left: 5px;\">$</label>\n              <input type=\"number\" tabindex=\"-1\" min=\"0\" onkeypress='return event.charCode >= 48 && event.charCode <= 57 &&event.charCode != 189' style=\"text-align: right\" class=\"form-control js-receivedTotal\" value=\"";
  stack1 = ((helpers.denominationTotal || (depth0 && depth0.denominationTotal) || helperMissing).call(depth0, (depth0 != null ? depth0.denominations : depth0), {"name":"denominationTotal","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" readonly=\"\">\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </form>\n  </div>\n</div>\n\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), "Complete", {"name":"equaltoo","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<div class=\"modal fade\" id=\"js-userConfirmation\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span>\n        </button>\n        <br>\n        <form class=\"form-horizontal\">\n          <div class=\"row\" style=\"position:relative; width:80%; left:12%\">\n            <div class=\"form-group\">\n              <center>\n                <p>\n                  <h4>The received amount is not equal to the ordered amount. Are you sure you want to save the amount?</h4></p>\n              </center>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"btn btn-danger col-sm-2 col-sm-offset-4\" id=\"js-user-confirmation-no\" data-dismiss=\"modal\">No</div>\n            <div class=\"btn btn-success col-sm-2 col-sm-offset-1\" id=\"js-user-confirmation-Yes\" data-obj=\"\">Yes</div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["reportErrTemp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3 text-center\" style=\"margin-top: 30px;margin-bottom:30px\">\n    <p style=\"font-weight: bold;font-size: 20px\">NOTICE</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n      <p><span id=\"js-reportName\"></span>&nbspsuccessfully</p>\n      </br />\n      <p>done at&nbsp&nbsp<span class=\"js-respTime\" style=\"font-weight: bold;\"></span>&nbsp&nbsp&nbspon&nbsp&nbsp&nbsp<span class=\"js-respDate\" style=\"font-weight: bold;\"></span></p>\n      </br />\n      <div class=\"row\">\n        <!-- <div class=\"col-sm-2 col-sm-offset-4\">\n    <button class=\"btn btn-block js-moneyOrderSuccess\">OK</button>\n  </div> --><div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <button class=\"btn btn-block js-itpaymenterr-Exit\" style=\"background-color: #00985C;\">EXIT</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["reportSuccessTemp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3 text-center\" style=\"margin-top: 30px;margin-bottom:30px\">\n    <p style=\"font-weight: bold;font-size: 20px\">NOTICE</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 15px;border-radius: 5px\">\n      <p><span id=\"js-reportName\"></span>&nbspsuccessfully</p>\n      </br />\n      <p>done at&nbsp&nbsp<span class=\"js-respTime\" style=\"font-weight: bold;\"></span>&nbsp&nbspon&nbsp&nbsp&nbsp<span class=\"js-respDate\" style=\"font-weight: bold;\"></span></p>\n      </br />\n      <div class=\"row\">\n        <!-- <div class=\"col-sm-2 col-sm-offset-4\">\n         <button class=\"btn btn-block js-moneyOrderSuccess\">OK</button>\n       </div> -->\n       <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <button class=\"btn btn-block js-itpaymentsucc-Exit\" style=\"background-color: #00985C;\">EXIT</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["sendMessageHistry"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "          <tr data-messageid=\""
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "\" data-deliverydate=\""
    + escapeExpression(((helper = (helper = helpers.deliver_date || (depth0 != null ? depth0.deliver_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"deliver_date","hash":{},"data":data}) : helper)))
    + "\"\n           data-deliverytime=\""
    + escapeExpression(((helper = (helper = helpers.deliver_time || (depth0 != null ? depth0.deliver_time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"deliver_time","hash":{},"data":data}) : helper)))
    + "\" data-subject=\""
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "\" data-body=\""
    + escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + escapeExpression(((helper = (helper = helpers.date_sent || (depth0 != null ? depth0.date_sent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date_sent","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.deliver_date || (depth0 != null ? depth0.deliver_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"deliver_date","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.deliver_time || (depth0 != null ? depth0.deliver_time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"deliver_time","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = ((helpers.equaltoo || (depth0 && depth0.equaltoo) || helperMissing).call(depth0, (depth0 != null ? depth0.read : depth0), 1, {"name":"equaltoo","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <td>"
    + escapeExpression(((helper = (helper = helpers.sent_by || (depth0 != null ? depth0.sent_by : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sent_by","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.time_sent || (depth0 != null ? depth0.time_sent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time_sent","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>\n              <div class=\"row\">\n                <div class=\"col-sm-3 col-sm-offset-2\">\n                  <span class=\"pull-right\"><a class=\"js-sendmsg-edituser edpen\" href=\"\"><i class=\"fa fa-pencil\"></i></a></span>\n                  <!-- <a href=\"#\" class='js-superadmin-edituser btn btn-info' style=\"padding:3px;\"> <i class=\"fa fa-pencil\"></i>Edit</a> -->\n                </div>\n              </div>\n            </td>\n            <td>\n              <div class=\"row\">\n                <div class=\"col-sm-3 col-sm-offset-2\">\n                  <span class=\"pull-right\">\n                 <a class=\"js-sendmsg-deleteuser edpen\" href=\"\"> <i class=\"fa fa-trash-o\"></i></a></span>\n                  <!-- <a href=\"#\" class='js-superadmin-deleteuser btn btn-danger' style=\"padding:3px;\">\n                    <i class=\"fa fa-remove\"></i>Delete</a> -->\n                </div>\n              </div>\n            </td>\n          </tr>\n";
},"2":function(depth0,helpers,partials,data) {
  return "              <td> Yes </td>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "                <td> No </td>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n  <div class=\"row\">\n    <!-- <button class=\"btn btn-success dropdown-toggle js-addshiftChechIn\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    <i class=\"fa fa-plus\"></i> Go To shift checkin\n  </button> -->\n    <h4 style=\"text-align:right; margin-right:0;\"><a class=\"js-addsendMessageHistry btn btn-success pull-right\" style=\"margin-right:186px;margin-top:0px;margin-bottom:10px\"><i class=\"fa fa-plus\"></i>&nbsp Add New </a></h4>\n  </div>\n  <div class=\"row db-sendMessageHistry\" style=\"width: 1020px\">\n    <table id=\"sendMessageHistryexample\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n      <thead>\n        <tr>\n          <th>Date Sent</th>\n          <th>Delivery Date</th>\n          <th>Delivery Time</th>\n          <th>Message</th>\n          <th>Read</th>\n          <th>Send By</th>\n          <th>Time Sent</th>\n          <th>Edit</th>\n          <th>Delete</th>\n          <!-- <th>Actions</th> -->\n        </tr>\n      </thead>\n\n      <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["shiftNoData"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3 text-center\" style=\"margin-top: 30px;margin-bottom:30px\">\n    <p style=\"font-weight: bold;font-size: 20px\">Warning</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n      <p><span id=\"js-reportName\"></span> No recent data available for Shift Checkin!!\n      </p>\n      <br/>\n      <p> Please click continue to proceed with recently available data. </p>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <button class=\"btn btn-block btn--action col-sm-6 js-noShiftData-continue\" style=\"background-color: #00985C;\">CONTINUE</button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button class=\"btn btn-block btn--action col-sm-6 js-noShiftData-exit\" >EXIT</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["shifthistary"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n <div id=\"js-histerydiv\"> <h4  style=\"text-align:right; margin-right: 10%;\"><a class=\"btn btn-success\" style=\"margin-right:125px;margin-top:0px;\" id=\"js-histery-link\"><i class=\"fa fa-list\"></i> View History</a></h4></div>\n <div id=\"js-histerydetailspage\"></div>\n <div id=\"js-contentdiv\"></div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["superAdminEditMsg"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"container\">\n  <div class=\"row col-sm-12\">\n    <div class=\"col-sm-10\"></div>\n    <div class=\"col-sm-2\">\n        <h4><a class=\"js-admViewHistry btn btn-success pull-right\"><i class=\"fa fa-plus\"></i>&nbsp View History </a></h4>\n    </div>\n  </div>\n  <div class=\"col-sm-12\" style=\"border-style:solid;border-width: 1px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2\" readonly>\n          Date / Time :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"dateid\" name=\"date\" value=\""
    + escapeExpression(((helper = (helper = helpers.todaydate || (depth0 != null ? depth0.todaydate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"todaydate","hash":{},"data":data}) : helper)))
    + "\" readonly>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2\">\n          Subjet :\n        </div>\n        <div class=\"col-sm-8 form-group\">\n          <input type=\"text\" class=\"form-control\" value=\""
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "\" id=\"js-editmsgsubject\" name=\"subject\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2\">\n          Body :\n        </div>\n        <div class=\"col-sm-8 form-group\">\n          <textarea rows=\"4\" cols=\"50\" type=\"text\"  class=\"form-control\" id=\"js-editmsgtextbox\" name=\"textbox\">\n            "
    + escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper)))
    + "\n          </textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2 \">\n          Delivery Date :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <div class='input-group date' id='datetimepicker10'>\n            <input type='text'id=\"js-msgdelivarydate\" value=\""
    + escapeExpression(((helper = (helper = helpers.delivery_date || (depth0 != null ? depth0.delivery_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"delivery_date","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n            <span class=\"input-group-addon\">\n                    <span class=\"glyphicon glyphicon-calendar\">\n                    </span>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-2\">\n          Delivery Time :\n        </div>\n        <div class=\"col-sm-4 form-group\">\n          <div class='input-group date' id='datetimepicker3'>\n            <input type='text'id=\"js-msgdelivarytime\" value=\""
    + escapeExpression(((helper = (helper = helpers.delivery_time || (depth0 != null ? depth0.delivery_time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"delivery_time","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n            <span class=\"input-group-addon\">\n                     <span class=\"glyphicon glyphicon-time\"></span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n    <div class=\"row col-sm-12\">\n      <div class=\"col-sm-10\"></div>\n      <div class=\"form-group col-sm-2\">\n        <button class=\"btn btn--action btn-block js-editsendmsgsubmit\" data-messageid=\""
    + escapeExpression(((helper = (helper = helpers.message_id || (depth0 != null ? depth0.message_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_id","hash":{},"data":data}) : helper)))
    + "\" data-accType=\"submit\">Submit</button>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["table"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <tr>\n                    <td>"
    + escapeExpression(((helper = (helper = helpers.orderedDate || (depth0 != null ? depth0.orderedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"orderedDate","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + escapeExpression(((helper = (helper = helpers.ordered_by || (depth0 != null ? depth0.ordered_by : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ordered_by","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + escapeExpression(((helper = (helper = helpers.orderTotal || (depth0 != null ? depth0.orderTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"orderTotal","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + escapeExpression(((helper = (helper = helpers.receivedDate || (depth0 != null ? depth0.receivedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"receivedDate","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + escapeExpression(((helper = (helper = helpers.received_by || (depth0 != null ? depth0.received_by : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"received_by","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + escapeExpression(((helper = (helper = helpers.receivedTotal || (depth0 != null ? depth0.receivedTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"receivedTotal","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + escapeExpression(((helper = (helper = helpers.Status || (depth0 != null ? depth0.Status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Status","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3 col-sm-offset-2\">\n                              <i class=\"fa fa-list fa-2x js-changeOrderActions\"\n                              data-changeOrderID=\""
    + escapeExpression(((helper = (helper = helpers.changeOrderID || (depth0 != null ? depth0.changeOrderID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"changeOrderID","hash":{},"data":data}) : helper)))
    + "\" data-total=\""
    + escapeExpression(((helper = (helper = helpers.orderTotal || (depth0 != null ? depth0.orderTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"orderTotal","hash":{},"data":data}) : helper)))
    + "\" data-date=\""
    + escapeExpression(((helper = (helper = helpers.orderedDate || (depth0 != null ? depth0.orderedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"orderedDate","hash":{},"data":data}) : helper)))
    + "\" data-orderBy=\""
    + escapeExpression(((helper = (helper = helpers.ordered_by || (depth0 != null ? depth0.ordered_by : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ordered_by","hash":{},"data":data}) : helper)))
    + "\"\n                              data-receivedBy=\""
    + escapeExpression(((helper = (helper = helpers.received_by || (depth0 != null ? depth0.received_by : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"received_by","hash":{},"data":data}) : helper)))
    + "\" data-orderedDateTime = \""
    + escapeExpression(((helper = (helper = helpers.order_datetime || (depth0 != null ? depth0.order_datetime : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_datetime","hash":{},"data":data}) : helper)))
    + "\" data-receivedDatetime = \""
    + escapeExpression(((helper = (helper = helpers.received_datetime || (depth0 != null ? depth0.received_datetime : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"received_datetime","hash":{},"data":data}) : helper)))
    + "\"\n                              data-status=\""
    + escapeExpression(((helper = (helper = helpers.Status || (depth0 != null ? depth0.Status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Status","hash":{},"data":data}) : helper)))
    + "\" data-receivedDate=\""
    + escapeExpression(((helper = (helper = helpers.receivedDate || (depth0 != null ? depth0.receivedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"receivedDate","hash":{},"data":data}) : helper)))
    + "\" data-receivedTotal=\""
    + escapeExpression(((helper = (helper = helpers.ReceivedTotal || (depth0 != null ? depth0.ReceivedTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ReceivedTotal","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\" style=\"margin-left: -6px;cursor: pointer; cursor: hand;\"></i>                            </div>\n                        </div>\n                    </td>\n                </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n<div class=\"row js-changeOrder\">\n  <div class=\"col-sm-3 pull-right\">\n    <button style=\"margin-left:-32px;\" class=\"btn btn-success dropdown-toggle js-addNewOrder\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      <i class=\"fa fa-plus\"></i>&nbsp Add New\n    </button>\n  </div>\n</div>\n<div class=\"row db-changeOrder\" style=\"width: 1000px\">\n    <table id=\"example\" class=\"display example_wrapper\" cellspacing=\"0\" width=\"100%\">\n        <thead>\n            <tr>\n                <th>Order Date</th>\n                <th>Order By</th>\n                <th>Order Total</th>\n                <th>Received Date</th>\n                <th>Received By</th>\n                <th>Received Total</th>\n                <th>Status</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </tbody>\n    </table>\n</div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["tankDipDataErr"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3 text-center\" style=\"margin-top: 30px;margin-bottom:30px\">\n    <p style=\"font-weight: bold;font-size: 20px\">Warning</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-5 col-sm-offset-3\">\n    <form style=\"background-color: white;text-align: center;padding: 20px;border-radius: 5px\">\n      <p><span id=\"js-reportName\"></span> No current data available for tank reading!!\n      </p>\n      <br/>\n      <p> Please click continue to proceed with recently available data. </p>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <button class=\"btn btn-block btn--action col-sm-6 js-noTankData-continue\" style=\"background-color: #00985C;\">CONTINUE</button>\n        </div>\n        <div class=\"col-sm-6\">\n          <button class=\"btn btn-block btn--action col-sm-6 js-noTankData-exit\" >EXIT</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
  },"useData":true});