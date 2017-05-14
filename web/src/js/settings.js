var userData = '';
var businessDate = '';
$(document).ready(function() {
  userData = $.cookie('user');
  //addNewUser();
  //changeBusinessDate();
  //  addNewMessageUser();
  $('#js-user-name').text($.cookie('user').username);
  checkVerification = MyApp.templates.checkverification;
  adminMoneyOrderTemp = MyApp.templates.adminMoneyOrder;
  sendMsgTemp = MyApp.templates.adminSendMsg;
  superAdminEditMsgTemp = MyApp.templates.superAdminEditMsg;
  sendMessageHistryTemp = MyApp.templates.sendMessageHistry;
  adminAddUserHistryTemp = MyApp.templates.adminAddUserHistry;
  adminAddFormTemp = MyApp.templates.adminAddForm;
  editAddUserFormTemp = MyApp.templates.editAddUserForm;
  //$('#checkexample').DataTable();

});

$(document).delegate('.js-side-nav li', 'click', function(ev) {
  ev.preventDefault();
  $('.js-side-nav li').removeClass('active');
  $(this).closest('li').addClass('active');
  $('.js-admintabinfo').text($(this).find('a').text());
  //$('#js-dynamicDataDiv').html('');
  $('#js-dynamicDataDiv').append('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
  if ($(this).find('a').text() == 'Check Verification') {
    checkVerificationData();
    //$('.js-validate-check-details').hide();
    $('.js-store-main-div').hide();
    $('.admn-settings').hide();
  } else if ($(this).find('a').text() == 'Add User') {
    //  addNewUser();
    adminAddUserHistry();
    // $('.js-store-main-div').show();
    //$('.admn-settings').show();
    //$('#js-admindynamicDataDiv').hide();
  } else if ($(this).find('a').text() == 'Money Order') {
    addMoneyOrder();
    $('.js-store-main-div').hide();
    $('.admn-settings').hide();
    //$('#js-admindynamicDataDiv').hide();
  } else if ($(this).find('a').text() == 'Send Message') {
    sendMessageHistry();
    $('#js-admindynamicDataDiv').show();
    $('.js-store-main-div').hide();
    $('.admn-settings').hide();
    //$('#js-admindynamicDataDiv').hide();
  }
});

function checkVerificationData() {
  $('.js-store-main-div').hide();
  $('#js-admindynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
  $.ajax({
    type: "GET",
    url: apiURL + "/route/checkHistory",
    data: {
      'store_id': userData.store_id,
      'businessDate': businessDate
    },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      console.log(response.response);
      var data = {
        rows: response.response,
        status: status
      };
      var checkData = checkVerification(data);
      $('.js-checkverification').show();
      $('#js-admindynamicDataDiv').html(checkData);
      if ($.cookie('user').role === 'Admin') {
        $('.js-validate-check-details').hide();
      }
      $('#checkexample').DataTable({
        "pagingType": "full_numbers",
        "searching": true,
        "order": [
          [0, "desc"]
        ]
      });

      $('.dataTables_length').hide();
      $('#example_filter').remove();

    }
  });
}

function addMoneyOrder() {
  var todaydate = moment(businessDate).format('YYYY-MM-DD');
  $('#js-admindynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
  $.ajax({
    type: "GET",
    url: apiURL + "/route/moneyOrder/moneyorderhistory",
    data: {
      'store_id': userData.store_id,
      todaydate: todaydate
    },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      console.log(response.response);
      var data = {
        tablerows: response.response,
        status: status
      };
      var checkData = adminMoneyOrderTemp(data);
      $('#js-admindynamicDataDiv').html(checkData);
      $('#moneyorderexample').DataTable({
        "pagingType": "full_numbers",
        "searching": true
      });

      $('.dataTables_length').hide();
      $('#example_filter').remove();
    }
  });

}

function adminAddUserHistry() {
  var todaydate = moment(businessDate).format('YYYY-MM-DD');
  $('#js-admindynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
  $.ajax({
    type: "GET",
    url: apiURL + "/route/auth/adduserhistory",
    // data: {
    //   'store_id': userData.store_id,
    //   todaydate: todaydate
    // },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      console.log(response.response);
      var data = {
        rows: response.response
          // status: status
      };
      var checkData = adminAddUserHistryTemp(data);
      $('#js-admindynamicDataDiv').html(checkData);
      $('#adminAddUserExample').DataTable({
        "pagingType": "full_numbers",
        "searching": true,
        "columnDefs": [{
          "targets": 5,
          "orderable": false
        }],
        "columnDefs": [{
          "targets": 6,
          "orderable": false
        }]
      });

      $('.dataTables_length').hide();
      $('#example_filter').remove();
    }
  });

}

function addNewUser() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/auth/addUserStoresList",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var html = "<option selected disabled>Select Store</option>";
      for (var i = 0; i < response.response.length; i++) {
        html += "<option value='" + response.response[i].store_id + "'>Store" + response.response[i].store_id + "</option>";
      }
      $('#js-addUser-stores').html(html);
      //changeBusinessDate();
    }
  });
}

$(document).delegate('#js-addUser-stores', 'change', function(ev) {
  ev.preventDefault();
  if ($('#js-addUser-stores option:selected').val() != 0) {
    $.ajax({
      type: "GET",
      url: apiURL + "/route/auth/addUser",
      data: {
        'store_id': $('#js-addUser-stores option:selected').val()
      },
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        if (response.response.length > 0) {
          var html = '';
          for (var i = 0; i < response.response.length; i++) {
            html += "<option value='" + response.response[i].id + "'>" + response.response[i].name + "</option>";
          }
          $('#js-addUser-Designation').html(html);
          $('#js-addUser-Designation').prop("disabled", false);
          $('#js-addNewUser-submit').prop("disabled", false);
        } else {
          var html = '';
          new PNotify({
            title: 'Failed!',
            text: 'Sorry. There are no more roles available for the store',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
          });
          $('#js-addUser-Designation').html('');
          $('#js-addUser-Designation').prop("disabled", true);
          $('#js-addNewUser-submit').prop("disabled", true);
        }
      }
    });
  } else {
    $('#js-addUser-Designation').html('');
    $('#js-addUser-Designation').prop("disabled", true);
  }
});

$(document).delegate('#js-addNewUser-submit', 'click', function(ev) {
  ev.preventDefault();
  if ($("#js-addUser-userId").val() && $("#js-addUser-userId").val() != '') {
    var userId = $("#js-addUser-userId").val();
  } else {
    var userId = '';
    if ($('#js-addUser-userId').parent().hasClass('has-error')) {} else {
      $('#js-addUser-userId').parent().addClass('has-error');
      $('#js-addUser-userId').parent().append('<p class="help-block">Please fill the userid.</p>');
    }
  }


  if ($("#js-addUser-inputName").val() && $("#js-addUser-inputName").val() != "") {
    var Name = $("#js-addUser-inputName").val();
  } else {
    var Name = '';
    if ($('#js-addUser-inputName').parent().hasClass('has-error')) {} else {
      $('#js-addUser-inputName').parent().addClass('has-error');
      $('#js-addUser-inputName').parent().append('<p class="help-block">Please fill the name.</p>');
    }
  }


  if ($("#js-addUser-E-mail").val() && $("#js-addUser-E-mail").val() != "") {
    var Email = $("#js-addUser-E-mail").val();
  } else {
    var Email = '';
    if ($('#js-addUser-E-mail').parent().hasClass('has-error')) {} else {
      $('#js-addUser-E-mail').parent().addClass('has-error');
      $('#js-addUser-E-mail').parent().append('<p class="help-block">Please fill the valid email.</p>');
    }
  }

  if ($("#js-addUser-Password").val() && $("#js-addUser-Password").val() != "") {
    var password = $.sha256($("#js-addUser-Password").val());
  } else {
    if ($('#js-addUser-Password').parent().hasClass('has-error')) {} else {
      $('#js-addUser-Password').parent().addClass('has-error');
      $('#js-addUser-Password').parent().append('<p class="help-block">Please fill the passsword.</p>');
    }
  }

  if ($("#js-addUser-Initials").val() && $("#js-addUser-Initials").val() != "") {
    var Initials = $("#js-addUser-Initials").val();
  } else {
    if ($('#js-addUser-Initials').parent().hasClass('has-error')) {} else {
      $('#js-addUser-Initials').parent().addClass('has-error');
      $('#js-addUser-Initials').parent().append('<p class="help-block">Please fill the initials.</p>');
    }
  }

  var Designation = $("#js-addUser-Designation option:selected").val();

  var Store = $('#js-addUser-stores option:selected').val();
  if (validateEmail($("#js-addUser-E-mail").val())) {
    if (userId && Name && Email && password && Initials) {
      $.ajax({
        type: "POST",
        url: apiURL + "/route/auth/addUser",
        data: JSON.stringify({
          "name": Name,
          "email": Email,
          "password": password,
          "initials": Initials,
          "user_id": userId,
          "store_id": Store,
          "role_id": Designation
        }),
        contentType: "application/json; charset=utf-8",
        success: function(response) {
          adminAddUserHistry();
          // $('#js-signup-form').find("input[type=text], input[type=Name], input[type=password]").val("");
          // $('#successmessage').show();
          // $("#successmessage").fadeTo(2000, 500).slideUp(500, function() {
          //   $("#successmessage").hide();
          // });
          // $('#js-addNewUser-submit').prop("disabled", true);
          // $('#js-addUser-Designation').html("");
          // $('#js-addUser-Designation').prop("disabled", true);
          // $('#js-signup-form').find('input[type=password],[type=Name],[type=email],[type=text]').val('')
          // $('#js-addUser-stores').prop('selectedIndex', 0);
          // $('#js-signup-form').find('p').remove();
          // $('#js-signup-form').find('input').parent().removeClass('has-error');
          // addNewUser();
        },
        error: function(xhr, ajaxOptions, thrownError) {
          new PNotify({
            title: 'Add User Failed!',
            text: 'User has already existed for this store.',
            type: 'error',
            styling: 'fontawesome'
          });
          $('#js-addNewUser-submit').prop("disabled", true);
          $('#js-addUser-Designation').html("");
          $('#js-addUser-Designation').prop("disabled", true);
          $('#js-signup-form').find('input[type=password],[type=Name],[type=email],[type=text]').val('')
          $('#js-addUser-stores').prop('selectedIndex', 0);
          $('#js-signup-form').find('p').remove();
          $('#js-signup-form').find('input').parent().removeClass('has-error');
          addNewUser();
        }
      });
    }
  } else {
    if ($('#js-addUser-E-mail').parent().hasClass('has-error')) {} else {
      $('#js-addUser-E-mail').parent().addClass('has-error');
      $('#js-addUser-E-mail').parent().append('<p class="help-block">Please enter valid email.</p>');
    }
  }
});

$(document).delegate('#js-button-reset', 'click', function(ev) {
  $('#js-addUser-Designation').html("");
  $('#js-addUser-Designation').prop("disabled", true);
  $('#js-signup-form').find('p').remove();
  $('#js-signup-form').find('input').parent().removeClass('has-error');
});

function validateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(sEmail)) {
    return true;
  } else {
    return false;
  }
}

function check(evt, id) {
  var value = id.value;
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  // Don't validate the input if below arrow, delete and backspace keys were pressed
  key = String.fromCharCode(key);
  var regex = /[a-zA-Z0-9 ]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault)
      theEvent.preventDefault();
  }
}

function checkinitial(evt, id) {
  var value = id.value;
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  // Don't validate the input if below arrow, delete and backspace keys were pressed
  key = String.fromCharCode(key);
  var regex = /[a-zA-Z0-9 ]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault)
      theEvent.preventDefault();
  }
}

function changeBusinessDate() {
  $.blockUI({ message: 'Loading…' })
  $.ajax({
    type: "GET",
    url: apiURL + "/route/auth/businessdate",
    data: {
      "store_id": $.cookie('user').store_id
    },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      businessDate = response.response.Businessdate;
      // store_vendor_id = response.V_ID.store_vendor_id;
      $('#js-employeePage-title').text('StoreAssist on ' + businessDate);
      $(document).ajaxStop($.unblockUI);
      if ($.cookie('user').role == 'Admin') {
        checkVerificationData();
      } else if ($.cookie('user').role == 'SuperAdmin') {
        adminAddUserHistry();
      }

    },
    error: function(request, status, errorThrown) {
      console.log(errorThrown);
    }
  });
}

function sendMessage() {
  var date1 = moment(businessDate + " " + moment().format("HH:mm:ss")).format('YYYY-MM-DD HH:mm:ss');
  var data = {};
  data.date1 = date1;
  var errHtml = sendMsgTemp(data);
  $('#js-admindynamicDataDiv').html(errHtml);
  $('#datetimepicker3').datetimepicker({
    format: 'HH:mm'
  });
  $('#datetimepicker10').datetimepicker({
    minDate: moment(businessDate).format('YYYY-MM-DD'),
    ignoreReadonly: true,
    format: 'YYYY-MM-DD',
    defaultDate: moment(businessDate).format('YYYY-MM-DD')
  });
  getStoreList();
}

function adminAddForm() {
  //var date1 = moment(businessDate + " " + moment().format("HH:mm:ss")).format('YYYY-MM-DD HH:mm:ss');
  var data = {};
  // data.date1 = date1;
  var errHtml = adminAddFormTemp(data);
  $('#js-admindynamicDataDiv').html(errHtml);
  addNewUser();
}

$(document).delegate('.js-sendmsgsubmit', 'click', function(ev) {
  ev.preventDefault();
  adminSendMessage();
});
$(document).delegate('.js-addsendMessageHistry', 'click', function(ev) {
  ev.preventDefault();
  sendMessage();
});
$(document).delegate('.js-admViewHistry', 'click', function(ev) {
  ev.preventDefault();
  sendMessageHistry();
});
$(document).delegate('.js-addUserButton', 'click', function(ev) {
  ev.preventDefault();
  adminAddForm();
  //$('.js-store-main-div').show();
});
$(document).delegate('.js-adminaddformuser', 'click', function(ev) {
  ev.preventDefault();
  adminAddUserHistry();
});

function adminSendMessage() {
  var store_id;
  if ($('#js-msgstoreid').val()) {
    store_id = $('#js-msgstoreid').val();
  }else{
    store_id = null;
  }


  var subject = $('#js-msgsubject').val();
  var body = $('#js-msgtextbox').val();
  var date_sent = moment(businessDate).format('YYYY-MM-DD');
  var time_sent = moment().format('h:mm:ss');
  var sent_by = $('#js-msgsendby').val();
  var deliver_date = $('#js-msgdelivarydate').val();
  var deliver_time = $('#js-msgdelivarytime').val();
  //var date1 = moment(businessDate).format('YYYY-MM-DD h:mm:ss');
if(store_id && subject && body && deliver_date && deliver_time && sent_by){
  $.ajax({
    type: "POST",
    url: apiURL + "/route/message/addmessage",
    data: JSON.stringify({
      "store_id": store_id,
      "subject": subject,
      "body": body,
      "deliver_date": deliver_date,
      "deliver_time": deliver_time,
      "sent_by": sent_by,
      "date_sent": date_sent,
      "time_sent": time_sent,
      "read": 0

    }),
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      if (response.status == "success") {
        //response.response.date1 = date1;
        sendMessageHistry();
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      new PNotify({
        title: 'Message Failed!',
        text: 'Failed to send the message.',
        type: 'error',
        styling: 'fontawesome'
      });
      sendMessage();
    }
  });
}else{
  new PNotify({
    title: 'Fill Details!',
    text: 'Please fill all the details.',
    type: 'error',
    styling: 'fontawesome'
  });
}

};

function sendMessageHistry() {
  var todaydate = moment(businessDate).format('YYYY-MM-DD');
  $('#js-admindynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
  $.ajax({
    type: "GET",
    url: apiURL + "/route/message/addmessage",
    data: {
      todaydate: todaydate
    },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      console.log(response.response);
      var data = {
        rows: response.response
          //status: status
      };
      var sendData = sendMessageHistryTemp(data);
      $('#js-admindynamicDataDiv').html(sendData);
      $('#sendMessageHistryexample').DataTable({
        "pagingType": "full_numbers",
        "searching": false
      });

      $('.dataTables_length').hide();
      $('#example_filter').remove();
    }
  });

}


function getStoreList() {
  var html = "";
  $.ajax({
    type: "GET",
    url: apiURL + "/route/auth/storelist",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      console.log(response);
      for (var i = 0; i < response.response.length; i++) {
        // listOfStores.push(response.response[i].store_id);
        html += "<option value='" + response.response[i].store_id + "'>Store" + response.response[i].store_id + "</option>";
      }
      $('#js-msgstoreid').html(html);
      $('#js-msgstoreid').multiselect({
        includeSelectAllOption : true
      });
    }
  });

}

$(document).delegate('.js-superadmin-edituser', 'click', function(ev) {
  ev.preventDefault();
  $('#js-admindynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
  // var defered1 = $.ajax({
  //  type: "GET",
  //  url: apiURL + "/route/auth/storelist",
  //  contentType: "application/json; charset=utf-8"
  // });
  var data = {
     "id" : $(this).closest('tr').data("id"),
     "user_id" : $(this).closest('tr').data("userid"),
     "name" : $(this).closest('tr').data("name"),
     "email" : $(this).closest('tr').data("email"),
     "initials": $(this).closest('tr').data("initials"),
     "user_store_id" : $(this).closest('tr').data("storeid"),
     "role" : $(this).closest('tr').data("role")
 };
  //$.when(defered1).then(function(v1) {
  //  data.stores = v1.response;
   var tableHtml = editAddUserFormTemp(data);
   $('#js-admindynamicDataDiv').html(tableHtml);
 //});

});


$(document).delegate('.js-superadmin-editusersubmit', 'click', function(ev) {
  ev.preventDefault();
  var id = $(this).data("id");
  var user_id = $(this).closest('tr').attr("data_id");
  var userId = $("#js-editUser-userId").val();
  var Name = $("#js-editUser-inputName").val();
  var Email = $("#js-editUser-E-mail").val();
  var password = $("#js-editUser-Password").val();
  var Initials = $("#js-editUser-Initials").val();
  var Store = $('#js-msgstoreid option:selected').val();
  $.ajax({
    type: "PUT",
    url: apiURL + "/route/auth/addUser",
    data: JSON.stringify({
      "name": Name,
      "email": Email,
      "password": password,
      "initials": Initials,
      "user_id": userId,
      "store_id": Store,
      "id" : id
    }),
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      $('#editDbqProduct').modal('hide');
      if (response.status == "failure") {
        var errHtml = editAddUserFormTemp();
        $('#js-superadminhistrypage').html(errHtml);
      } else if (response.status == "success") {

        // var data = {
        //   rows: response.response
        // };
        var tableHtml = editAddUserFormTemp(response.response[0]);
        $('#js-admindynamicDataDiv').html(tableHtml);

        adminAddUserHistry();
      }

    }
  });
});

$(document).delegate('.js-superadmin-deleteuser', 'click', function(ev) {
  ev.preventDefault();
  var u_id = $(this).closest('tr').attr("data-id");
  $('#js-Delete-adduser-Yes').attr("userid", u_id);
  $('#js-adduser-deleteModal').modal('show');
});

$(document).delegate('#js-Delete-adduser-Yes', 'click', function(ev) {
  ev.preventDefault();
  var user_id = $(this).attr("userid");
  $.ajax({
    type: "DELETE",
    url: apiURL + "/route/auth/addUser",
    data: JSON.stringify({
      "user_id": user_id
    }),
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      $('#js-adduser-deleteModal').modal('hide');
    }
  });
});

$(document).delegate('.js-editUserBack', 'click', function(ev) {
    ev.preventDefault();
    adminAddUserHistry();
});


$(document).delegate('.js-sendmsg-edituser', 'click', function(ev) {
  ev.preventDefault();
  var data = {
    "todaydate" : moment(businessDate + " " + moment().format("HH:mm:ss")).format('YYYY-MM-DD HH:mm:ss'),
    "message_id" : $(this).closest('tr').data("messageid"),
    "delivery_date": $(this).closest('tr').data("deliverydate"),
    "subject" : $(this).closest('tr').data("subject"),
    "body" : $(this).closest('tr').data("body"),
    "delivery_time" : $(this).closest('tr').data("deliverytime")
  }
  var tableHtml = superAdminEditMsgTemp(data);
  $('#js-admindynamicDataDiv').html(tableHtml);
  $('#datetimepicker3').datetimepicker({
    format: 'HH:mm'
  });
  $('#datetimepicker10').datetimepicker({
    ignoreReadonly: true,
    format: 'YYYY-MM-DD'
  });
});

$(document).delegate('.js-editsendmsgsubmit', 'click', function(ev) {
  ev.preventDefault();
  var DateTime = $("#dateid").val();
  var subject = $("#js-editmsgsubject").val();
  var body = $("#js-editmsgtextbox").val();
  var message_id = $(this).data("messageid");
  $.ajax({
    type: "PUT",
    url: apiURL + "/route/message/addmessage",
    data: JSON.stringify({
      "todaydate": DateTime,
      "subject": subject,
      "body": body,
      "delivery_date": $('#js-msgdelivarydate').val(),
      "delivery_time" : $('#js-msgdelivarytime').val(),
      "message_id" : message_id
    }),
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      sendMessageHistry();
    }
  });
});

$(document).delegate('.js-sendmsg-deleteuser', 'click', function(ev) {
  ev.preventDefault();
  var message_id = $(this).closest('tr').data("messageid");
  $("#js-superadmindelete-sendmsg-Yes").attr("messageid", message_id);
  $('#js-superadminsend-deleteModal').modal('show');
});

$(document).delegate('#js-superadmindelete-sendmsg-Yes', 'click', function(ev) {
  ev.preventDefault();
  var message_id = $(this).attr("messageid");
  $.ajax({
    type: "DELETE",
    url: apiURL + "/route/message/addmessage",
    data: JSON.stringify({
      "message_id": message_id
    }),
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      $('#js-superadminsend-deleteModal').modal('hide');
    }
  });
});
