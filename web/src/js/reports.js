var userData = '';
var swiped = '@';
var businessDate = '';
var store_vendor_id = '';
var moneyOrderComplete = false;
$(document).ready(function() {
    userData = $.cookie('user');

    changeBusinessDate();

    $('#js-today-date-bakery').val(moment().format("MMM Do YYYY"));
    $('#js-today-date-bakery').datetimepicker({
        minDate: moment().subtract(1, 'month').format('MM DD YYYY'),
        ignoreReadonly: true,
        format: 'MMM Do YYYY',
        maxDate: moment()
    });

    $('#js-changeOrderDate').val(moment().format("MMM Do YYYY"));
    $('#js-changeOrderDate').datetimepicker({
        minDate: moment().subtract(1, 'month').format('MM DD YYYY'),
        ignoreReadonly: true,
        format: 'MMM Do YYYY',
        maxDate: moment()
    });
    $('#js-cardReaderDate').val(moment().format("MMM Do YYYY"));
    $('#js-cardReaderDate').datetimepicker({
        minDate: moment().subtract(1, 'month').format('MM DD YYYY'),
        ignoreReadonly: true,
        format: 'MMM Do YYYY',
        maxDate: moment()
    });
    $('#js-itpaymentDate').val(moment().format("MMM Do YYYY"));
    $('#js-itpaymentDate').datetimepicker({
        minDate: moment().subtract(1, 'month').format('MM DD YYYY'),
        ignoreReadonly: true,
        format: 'MMM Do YYYY',
        maxDate: moment()
    });



    $('#js-user-name').text($.cookie('user').username);
    paymentReportTemplate = MyApp.templates.paymentReport;
    cardReaderTemplate = MyApp.templates.cardReaderTemp;
    reportSuccessTemp = MyApp.templates.reportSuccessTemp;
    reportErrTemplate = MyApp.templates.reportErrTemp;
    changeOrderTemp = MyApp.templates.table;
    cardreaderTableTemp = MyApp.templates.cardreaderTable;
    manualGasdipTableTemp = MyApp.templates.manualGasdipTable;
    itpaymentTableTemp = MyApp.templates.itpaymentTable;
    createNewOrderTemp = MyApp.templates.createOrder;
    receivedOrderTemp = MyApp.templates.receivedOrder;
    bakeryOrderTemp = MyApp.templates.bakeryOrder;
    bakeryOrderActionsTemp = MyApp.templates.bakeryOrderActions;
    homeTemp = MyApp.templates.home;
    printShelfTemp = MyApp.templates.printShelfTag;
    manualGasTemp = MyApp.templates.gasDipReport;
    manualGasEntryTemp = MyApp.templates.gasDipReportEntry;
    manualGasEntryBasedOnDateTemp = MyApp.templates.dipReportInfo;
    moneyOrderTemp = MyApp.templates.moneyOrder;
    moneyOrderErrTemp = MyApp.templates.moneyOrderErr;
    moneyOrderCashedTemp = MyApp.templates.moneyOrderCashedErr;
    moneyOrderInfoTemp = MyApp.templates.moneyOrderInfo;
    moneyOrderConfirmationTemp = MyApp.templates.moneyOrderConfirmation;
    moneyOrderSuccessPopupTemp = MyApp.templates.moneyOrderSuccessTemp;
    checkInDataTemp = MyApp.templates.checkinData;
    histeryTemp = MyApp.templates.shifthistary;
    endofDayTemp = MyApp.templates.endofday;
    endhisteryTemp = MyApp.templates.endofdayhistry;
    shiftNoData = MyApp.templates.shiftNoData;
    // cardhisteryTemp = MyApp.templates.cardReaderHistory;
    // itpaymenthisteryTemp = MyApp.templates.itpaymentHistory;
    // gasDiphisteryTemp = MyApp.templates.manualGasHistory;
    histerTableTemp = MyApp.templates.histerytable;
    bakerytableTemp = MyApp.templates.bakeryOrdersTable;
    empithelpTemplate = MyApp.templates.empithelp;
    checkVerification = MyApp.templates.checkverification;
    enterCheckDetails = MyApp.templates.checkdetails;
    checkConfirmation = MyApp.templates.checkconfirmation;
    checkCashed = MyApp.templates.checkcashed;
    checkErr = MyApp.templates.checkerr;
    printShelfSuccess = MyApp.templates.printShelfSuccess;
    printShelfErr = MyApp.templates.printShelfErr;
    tankDipError = MyApp.templates.tankDipDataErr;
    endofDayWarningTemplate = MyApp.templates.endofdaywarning;
    $('#js-dynamicDataDiv').html('');
    $('#js-dynamicDataDiv').append('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');


    if (localStorage.getItem("/route/check/cardCheckReport")) {
        $.ajax({
            type: "POST",
            url: apiURL + "/route/check/cardCheckReport/sync",
            data: localStorage.getItem("/route/check/cardCheckReport"),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response.status == "failure") {

                } else if (response.status == "success") {
                    localStorage.removeItem('/route/check/cardCheckReport');
                }
            }
        });
    }
    if (localStorage.getItem("/route/check/itEquipmentReport")) {
        $.ajax({
            type: "POST",
            url: apiURL + "/route/check/itEquipmentReport/sync",
            data: localStorage.getItem("/route/check/itEquipmentReport"),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response.status == "failure") {

                } else if (response.status == "success") {
                    localStorage.removeItem('/route/check/itEquipmentReport');
                }
            }
        });
    }
    if (localStorage.getItem("/route/bakery/cashReconciliation")) {
        $.ajax({
            type: "POST",
            url: apiURL + "/route/bakery/cashReconciliation/sync",
            data: localStorage.getItem("/route/bakery/cashReconciliation"),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response.status == "failure") {

                } else if (response.status == "success") {
                    localStorage.removeItem('/route/bakery/cashReconciliation');
                }
            }
        });
    }
    if (localStorage.getItem("/route/bakery/manualGasDipReport")) {
        $.ajax({
            type: "POST",
            url: apiURL + "/route/bakery/cashReconciliation/sync",
            data: localStorage.getItem("/route/bakery/manualGasDipReport"),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response.status == "failure") {

                } else if (response.status == "success") {
                    localStorage.removeItem('/route/bakery/manualGasDipReport');
                }
            }
        });
    }
});

$(document).delegate('.js-statusText', 'click', function(ev) {
    ev.preventDefault();
    if ($(this).text() == 'Show') {
        $(this).parent().find("i.fa-angle-double-down").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
        $(this).text('Hide');
        var dataElement = $(this);
        var readStatus = parseInt($(this).parent().attr('data-read'));
        var message_id = parseInt($(this).parent().attr('data-message_id'));
        if (readStatus == 0) {
            $.ajax({
                type: "PUT",
                url: apiURL + "/route/bakery/message",
                data: JSON.stringify({
                    'read': 1,
                    'message_id': message_id,
                    'store_id': userData.store_id
                }),
                contentType: "application/json; charset=utf-8",
                success: function(response) {
                    $(dataElement).closest('div.bs-callout-danger').removeClass('bs-callout-danger').addClass('bs-callout-success');
                    var count = parseInt($('.js-notificationCount').text());
                    $('.js-notificationCount').text(count - 1);
                    if (count == 1) {
                        $('.js-notificationCount').closest('div').hide();
                    }
                }
            });
        }
    } else {
        $(this).parent().find("i.fa-angle-double-up").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
        $('.js-statusText').text('Show');
    }
});

function dynamicTime() {
    setInterval(function() {
        $('.js-itPaymentTime').val(moment().format('h:mm A'));
        $('.js-itPaymentDate').val(moment().format("MM/DD/YYYY"));
        $('.js-cardReaderTime').val(moment().format('h:mm A'));
        $('.js-cardReaderDate').val(moment().format("MM/DD/YYYY"));
    }, 1000);
}

$(document).delegate('.ending-cash', 'blur', function(ev) {
    if ($('#rigistersid').val() || $('#modrawer').val() || $('#topofsafe').val() || $('#changefund').val()) {
        var endingCash = getEndingCash();
        $('#endingcashid').val(endingCash);
        //Get Today's Cash and Add It There.
        var todaycash = getTodaysCash();
        $('#todaysid').val(parseFloat(parseFloat(todaycash) + parseFloat(endingCash)).toFixed(2));
        if ($('#todaysid').val()) {
            var amount = parseFloat(parseFloat($('#todaysid').val()) - parseFloat($('#cashsalesid').val() || 0)).toFixed(2);
            $('#overorshortid').val(amount);
            if (amount < 0) {
                $('#overorshortid').css('color', 'red');
            }
        }
    } else {
        $('#endingcashid').val(0);
    }
});

function getEndingCash() {
    if ($('#rigistersid').val()) {
        var reg = parseFloat($('#rigistersid').val()).toFixed(2);
    } else {
        var reg = 0;
    }
    $('#rigistersid').val(reg);
    if ($('#modrawer').val()) {
        var modra = parseFloat($('#modrawer').val()).toFixed(2);
    } else {
        var modra = 0;
    }
    $('#modrawer').val(modra);
    if ($('#topofsafe').val()) {
        var topsafe = parseFloat($('#topofsafe').val()).toFixed(2);
    } else {
        var topsafe = 0;
    }
    $('#topofsafe').val(topsafe);
    if ($('#changefund').val()) {
        var change = parseFloat($('#changefund').val()).toFixed(2);
    } else {
        var change = 0;
    }
    $('#changefund').val(change);
    var endingCash = parseFloat(parseFloat(reg) + parseFloat(modra) + parseFloat(topsafe) + parseFloat(change)).toFixed(2);
    return endingCash;
}

$(document).delegate('.js-submitcheck', 'click', function(ev) {
    ev.preventDefault();
    $(this).button('loading');
    var routingNumber = $.trim($('.js-routingnumber').val());
    var accountNumber = $.trim($('.js-accountnumber').val());
    var checkNumber = $.trim($('.js-checknumber').val());
    var amount = $.trim($('.js-amount').val()) || 0;
    var checkObj = {
        "store_vendor_id": store_vendor_id,
        "routingNumber": routingNumber,
        "accountNumber": accountNumber,
        "checkNumber": checkNumber,
        "swiped": swiped,
        "amount": amount,
        "businessDate": moment().format('YYYY-MM-DD h:mm:ss'),
        "store_id": $.cookie('user').store_id
    }
    if (routingNumber.length != 9 || amount <= 0 || checkNumber.length == 0 || (accountNumber.length == 0 || accountNumber.length > 17)) {
        var errorText = '<ul>';
        if (routingNumber.length != 9) {
            errorText = errorText + '<li>Please enter valid routing number<li>';
        }
        if (accountNumber.length == 0 || accountNumber.length > 17) {
            errorText = errorText + '<li>Please enter valid account number<li>';
        }
        if (checkNumber.length == 0) {
            errorText = errorText + '<li>Please enter valid check number<li>';
        }
        if (amount <= 0) {
            errorText = errorText + '<li>Please enter valid amount<li>';
        }
        errorText = errorText + '</ul>';
        new PNotify({
            title: 'Error',
            text: errorText,
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
        $('.js-submitcheck').button('reset');
    } else {
        var str = "" + checkNumber;
        var pad = "000000";
        var paddedCheck = pad.substring(0, pad.length - str.length) + str;
        checkObj.checkNumber = paddedCheck;
        $.ajax({
            type: "GET",
            url: apiURL + "/route/checkValidations",
            data: checkObj,
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                $('.js-submitcheck').button('reset');
                if (response.status == 'success' && response.response) {
                    saveCheckTable(response.response, checkObj);
                } else {
                    new PNotify({
                        title: 'Error',
                        text: response.response,
                        type: 'error',
                        styling: 'fontawesome',
                        hide: true,
                        delay: 2000
                    });
                }
            }
        });
    }
});

$(document).delegate('.todays-cash', 'blur', function(ev) {

    if ($('#dropsid').val() || $('#checksid').val() || $('#changeorderid').val()) {
        var todaycash = getTodaysCash();
        var endingCash = getEndingCash();
        $('#todaysid').val(parseFloat(parseFloat(todaycash) + parseFloat(endingCash)).toFixed(2));
    }
    if ($('#todaysid').val()) {
        var amount = parseFloat(parseFloat($('#todaysid').val()) - parseFloat($('#cashsalesid').val() || 0)).toFixed(2);
        $('#overorshortid').val(amount);
        if (amount < 0) {
            $('#overorshortid').css('color', 'red');
        }
    }
});

function getTodaysCash() {
    if ($('#dropsid').val()) {
        var drop = parseFloat($('#dropsid').val()).toFixed(2);
    } else {
        var drop = 0;
    }
    $('#dropsid').val(drop);
    if ($('#checksid').val()) {
        var check = parseFloat($('#checksid').val()).toFixed(2);
    } else {
        var check = 0;
    }
    $('#checksid').val(check);
    if ($('#changeorderid').val()) {
        var changeorder = parseFloat($('#changeorderid').val()).toFixed(2);
    } else {
        var changeorder = 0;
    }
    $('#changeorderid').val(changeorder);
    if ($('#beginningcashid').val()) {
        var beginning = parseFloat($('#beginningcashid').val()).toFixed(2);
    } else {
        var beginning = 0;
    }
    $('#beginningcashid').val(beginning);
    var todaycash = parseFloat(parseFloat(drop) + parseFloat(check) - parseFloat(changeorder) - parseFloat(beginning)).toFixed(2);
    return todaycash;
}

$(document).delegate('.js-shiftcheckinsave', 'click', function(ev) {
    ev.preventDefault();
    $(this).button('loading');
    var obj = {};
    obj.initials = $('#initialsid').val();
    obj.Registers = parseFloat($('#rigistersid').val()) || 0;
    obj.Drawer = parseFloat($('#modrawer').val()) || 0;
    obj.Top_of_Safe = parseFloat($('#topofsafe').val()) || 0;
    obj.Change_Fund = parseFloat($('#changefund').val()) || 0;
    obj.Ending_Cash = parseFloat($('#endingcashid').val()) || 0;
    obj.Drops = parseFloat($('#dropsid').val()) || 0;
    obj.Checks = parseFloat($('#checksid').val()) || 0;
    obj.Change_Orders = parseFloat($('#changeorderid').val()) || 0;
    obj.Beginning_Cash = parseFloat($('#beginningcashid').val()) || 0;
    obj.Todays_Cash = parseFloat($('#todaysid').val()) || 0;
    obj.Cash_Sales = parseFloat($('#cashsalesid').val()) || 0;
    obj.Over_Short = parseFloat($('#overorshortid').val()) || 0;
    obj.businessDate = moment(businessDate).format('YYYY-MM-DD');
    // obj.dateTime = $('#dateid').val();
    if ($(this).data('status')) {
        obj.Status = $(this).data('status');
    } else {
        obj.Status = 'Save';
    }
    obj.store_id = userData.store_id;
    obj.dateTime = $('#dateid').val();
    obj.reported_date = moment(obj.dateTime).format('YYYY-MM-DD');
    if (!$(this).data('cash_recon_id')) {
        obj.cash_recon_id = 0;
    } else {
        obj.cash_recon_id = $(this).data('cash_recon_id');
    }
    obj.type = $('.js-shiftcheckinsave').data('type');

    obj.insert_flag = $('.js-shiftcheckinsave').data('insertflag');

    if (navigator.onLine && $('#initialsid').val().length > 0) {
        $.ajax({
            type: "POST",
            url: apiURL + "/route/bakery/cashReconciliation",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response.status == "failure") {
                    var errHtml = checkInDataTemp();
                    $('#js-dynamicDataDiv').html(errHtml);
                } else if (response.status == "success") {
                    $('.js-shiftcheckinsave').button('reset');
                    // response.response.date = date;
                    // var data = response.response;

                    // var errHtml = checkInDataTemp(data);
                    // $('#js-dynamicDataDiv').html(errHtml);
                    if (obj.type == "checkin") {
                        shiftCheckInTables();
                    } else {
                        endofDayTables();
                    }
                }

            }
        });
    } else if ($('#initialsid').val().length == 0) {
        $('.js-shiftcheckinsave').button('reset');
        new PNotify({
            title: 'Error!',
            text: 'Please fill employee Initials!',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    } else {
        localStorage.setItem("/route/bakery/cashReconciliation", JSON.stringify(obj));
        $('.js-shiftcheckinsave').button('reset');
        new PNotify({
            title: 'Success!',
            text: "You don't have internet connection, Once you get the connection your data will be stored.",
            type: 'success',
            styling: 'fontawesome',
            hide: true
        });
    }
});

$(document).delegate('.js-shiftcheckincomplete', 'click', function(ev) {
    ev.preventDefault();
    $(this).button('loading');
    var obj = {};
    obj.initials = $('#initialsid').val();
    obj.Registers = $('#rigistersid').val();
    obj.Drawer = $('#modrawer').val();
    obj.Top_of_Safe = $('#topofsafe').val();
    obj.Change_Fund = $('#changefund').val();
    obj.Ending_Cash = $('#endingcashid').val();
    obj.Drops = $('#dropsid').val();
    obj.Checks = $('#checksid').val();
    obj.Change_Orders = $('#changeorderid').val();
    obj.Beginning_Cash = $('#beginningcashid').val();
    obj.Todays_Cash = $('#todaysid').val();
    obj.Cash_Sales = $('#cashsalesid').val();
    obj.Over_Short = $('#overorshortid').val();
    obj.businessDate = moment(businessDate).format('YYYY-MM-DD');
    obj.Status = 'Complete';

    obj.store_id = userData.store_id;
    obj.dateTime = $('#dateid').val();
    obj.reported_date = moment(obj.dateTime).format('YYYY-MM-DD');
    if (!$(this).data('cash_recon_id')) {
        obj.cash_recon_id = 0;
    } else {
        obj.cash_recon_id = $(this).data('cash_recon_id');
    }

    obj.type = $('.js-shiftcheckincomplete').data('type');
    obj.insert_flag = $('.js-shiftcheckinsave').data('insertflag');

    if (navigator.onLine && $('#initialsid').val().length > 0) {

        $.ajax({
            type: "POST",
            url: apiURL + "/route/bakery/cashReconciliation",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response.status == "failure") {
                    var errHtml = checkInDataTemp();
                    $('#js-dynamicDataDiv').html(errHtml);
                } else if (response.status == "success") {
                    $('.js-shiftcheckincomplete').button('reset');
                    if (obj.type == "checkin") {
                        shiftCheckInTables();
                    } else {

                        $.when($.ajax(changeBusinessDate())).then(function() {
                            endofDayTables();
                        });
                    }
                }

            }
        });
    } else if ($('#initialsid').val().length == 0) {
        $('.js-shiftcheckincomplete').button('reset');
        new PNotify({
            title: 'Error!',
            text: 'Please fill employee Initials!',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    } else {
        localStorage.setItem("/route/bakery/cashReconciliation", JSON.stringify(obj));
        $('.js-shiftcheckincomplete').button('reset');
        new PNotify({
            title: 'Success!',
            text: "You don't have internet connection, Once you get the connection your data will be stored.",
            type: 'success',
            styling: 'fontawesome',
            hide: true
        });
    }
});

function isNumber(evt, element) {

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (
        (charCode != 45 || $(element).val().indexOf('-') != -1) && // “-” CHECK MINUS, AND ONLY ONE.
        (charCode != 46 || $(element).val().indexOf('.') != -1) && // “.” CHECK DOT, AND ONLY ONE.
        (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function thirdPartyCheck(encodedUrl, checkObj) {
    $.ajax({
        type: "GET",
        url: "https://posprod.certegy.com:443/POSIPGatewayWeb/POSIPGatewayServlet" + encodedUrl,
        headers: {
            "Authorization": "Basic " + btoa("PayNet.PosGateway.7ElevenOK" + ":" + "ru5sybk82gvvhfpdklo")
        },
        success: function(response) {
            saveCheckTable(response, checkObj);
        },
        error: function(request, status, errorThrown) {
            new PNotify({
                title: 'Check Validation Failed!',
                text: 'Incorrect check details.',
                type: 'error',
                styling: 'fontawesome',
                hide: true
            });
            console.log(errorThrown);
        }
    });
}

function saveCheckTable(response, checkObj) {
    checkObj.authcode = response;
    $.ajax({
        type: "POST",
        url: apiURL + "/route/checkHistory",
        data: JSON.stringify(checkObj),
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            checkVerificationData();
            new PNotify({
                title: 'Success!',
                text: "Verification successfuly completed!",
                type: 'success',
                styling: 'fontawesome',
                hide: true,
                delay: 2000
            });
        },
        error: function(jqXHR, exception) {
            new PNotify({
                title: 'Error!',
                text: "This check is already verified!",
                type: 'error',
                styling: 'fontawesome',
                hide: true,
                delay: 2000
            });
        }
    });
}

$(document).delegate('.js-side-nav li', 'click', function(ev) {
    ev.preventDefault();
    $('.js-side-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    if ($(this).find('a').text() == "Shift Check-In" || $(this).find('a').text() == "End of Day") {
        $('.js-tabInfo').text("Cash Reconciliation: " + $(this).find('a').text());
    } else {
        $('.js-tabInfo').text($(this).find('a').text());
    }
    $('#js-datepickerDiv').hide();
    $('.js-changeOrder').hide();
    $('#js-changeorder-div').hide();
    $('.ui-pnotify').hide();
    $('.js-checkverification').hide()
    $('#js-gasDipreportDiv').hide();
    $('#js-dynamicDataDiv').html('');
    $('#js-dynamicDataDiv').append('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
    if ($(this).find('a').text() == 'IT & Payment Equipment Check Report') {
        getItPaymentTableList();
        $('.js-cardReaderTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

        // checkTheStatusOfItPaymentCheckReport();
    } else if ($(this).find('a').text() == 'Card Reader Check Report') {
        // checkTheStatusOfCardReaderCheckReport();
        getCardreaderTableList();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'Change Orders') {
        getChangeOrderList();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').show();
    } else if ($(this).find('a').text() == 'Bakery Orders') {
        // bakeryOrders();
        bakeryOrdersTables();
        $('#js-datepickerDiv').show();
        $('.js-bakeryOrderstabTable').show();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'Home') {
        getNotificationData();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'Print Shelf Tag') {
        getPrintShelfTagData();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'Manual Gas Dip Report') {
        // getManualGasDipReportData();
        getManualGasDipTableList();
        $('#js-gasDipreportDiv').show();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'Money Order') {
        moneyOrderComplete = false;
        getMoneyOrderData();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'Shift Check-In') {
        // getCheckInData();
        shiftCheckInTables();
        //$('.js-shiftCheckIntabTable').show();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        //$('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'End of Day') {
        // getEndOfTheDayData();
        endofDayTables();
        //$('.js-endofDayTabtabTable').show();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        //$('.js-shiftCheckIntabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'Verify IT') {
        empgetIThelpDesk();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else if ($(this).find('a').text() == 'Check Verification') {
        checkVerificationData();
        storeVendorId();
        $('.js-cardReaderTable').hide();
        $('.js-itpaymentTable').hide();
        $('.js-gasDipTable').hide();
        $('.js-shiftCheckIntabTable').hide();
        $('.js-endofDayTabtabTable').hide();
        $('.js-bakeryOrderstabTable').hide();
        $('#js-changeorder-div').hide();

    } else {
        $('#js-dynamicDataDiv').html('');
    }
});

function getCheckInData() {
    //   $('.js-addshiftChechIn').hide();
    //var errHtml = histeryTemp();
    //$('#js-dynamicDataDiv').html(errHtml);
    $('#js-dynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
    $('.js-headingText').html('Cash Reconciliation : Shift Check-In');
    var store_id = userData.store_id;
    var date = moment(businessDate).format('YYYY-MM-DD');
    var date1 = moment().format('YYYY-MM-DD h:mm:ss');
    var newyesturday = moment(businessDate).subtract(1, 'd').format('YYYY-MM-DD');
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/cashReconciliation",
        data: {
            store_id: store_id,
            date: date,
            mediano: 1,
            today: newyesturday,
            type: 'checkin'
        },
        contentType: "application/json; charset=utf-8",
        success: function(response1) {
            if (response1.status == "failure") {
                var errHtml = checkInDataTemp();
                $('#js-contentdiv').html(errHtml);
                $("#initialsid").focus();
            } else if (response1.status == "success") {
                response1.response.date = date;
                response1.response.date1 = date1;
                var data = response1.response;
                if (data.checkin.length > 0) {

                    var categorizedData = _.groupBy(data.checkin, "stype");
                    var pickupGrouped = _.groupBy(data.pickup, "stype");
                    if ($.inArray('reserve', Object.keys(categorizedData)) == 1) {
                        var change_Fund = parseFloat(categorizedData["reserve"][0].value).toFixed(2);
                    } else {
                        var change_Fund = 0;
                    }

                    if ($.inArray('drops', Object.keys(categorizedData)) == 1) {
                        var Drops_dropVault = parseFloat(categorizedData["drops"][0].value).toFixed(2);
                    } else {
                        var Drops_dropVault = 0;
                    }

                    if ($.inArray('couriertray', Object.keys(categorizedData)) == 1) {
                        var Drops_courierVault = parseFloat(categorizedData["couriertray"][0].value).toFixed(2);
                    } else {
                        var Drops_courierVault = 0;
                    }

                    if ($.inArray('couriertray', Object.keys(pickupGrouped)) == 1) {
                        var today_pickup = parseFloat(pickupGrouped["couriertray"][0].value).toFixed(2);
                    } else {
                        var today_pickup = 0;
                    }

                    var previous_checks = parseFloat(data.previous_checks || 0);

                    var checks = previous_checks + today_pickup + Drops_dropVault + Drops_courierVault;

                    if ($.inArray('reader', Object.keys(categorizedData)) == 1) {
                        var Drops_Acceptor = parseFloat(categorizedData["reader"][0].value).toFixed(2);
                    } else {
                        var Drops_Acceptor = 0;
                    }

                    if ($.inArray('reject', Object.keys(categorizedData)) == 1 && $.inArray('dispenser', Object.keys(categorizedData)) == 1 && $.inArray('column', Object.keys(categorizedData)) == 1) {
                        var topSafe = parseFloat(categorizedData["reject"][0].value).toFixed(2) + parseFloat(categorizedData["dispenser"][0].value).toFixed(2) + parseFloat(categorizedData["column"][0].value).toFixed(2);
                    } else {
                        var topSafe = 0;
                    }


                    // var Drops_dropVault = parseFloat(categorizedData[maxEid].filter(function(p) {
                    //   return p.stype == 'drops'
                    // })[0].value - categorizedData[minEid].filter(function(p) {
                    //   return p.stype == 'drops'
                    // })[0].value);
                    // var Drops_courierVault = parseFloat(categorizedData[maxEid].filter(function(p) {
                    //   return p.stype == 'couriertray'
                    // })[0].value - categorizedData[minEid].filter(function(p) {
                    //   return p.stype == 'couriertray'
                    // })[0].value);
                    // var checks = Drops_dropVault.toFixed(2) + Drops_courierVault.toFixed(2);
                    // var Drops_Acceptor = parseFloat(categorizedData[maxEid].filter(function(p) {
                    //   return p.stype == 'reader'
                    // })[0].value - categorizedData[minEid].filter(function(p) {
                    //   return p.stype == 'reader'
                    // })[0].value).toFixed(2);
                    // if (data.checkin.filter(function(p) {
                    //     return p.stype == 'reject'
                    //   }).length > 0 && data.checkin.filter(function(p) {
                    //     return p.stype == 'dispenser'
                    //   }).length > 0 && data.checkin.filter(function(p) {
                    //     return p.stype == 'column'
                    //   }).length > 0) {
                    //   var topSafe = parseFloat(categorizedData[maxEid].filter(function(p) {
                    //     return p.stype == 'reject'
                    //   })[0].value + categorizedData[maxEid].filter(function(p) {
                    //     return p.stype == 'dispenser'
                    //   })[0].value + categorizedData[maxEid].filter(function(p) {
                    //     return p.stype == 'column'
                    //   })[0].value).toFixed(2);
                    // } else {
                    //   var topSafe = 0;
                    // }

                    data.Top_of_Safe = topSafe;
                    data.Change_Fund = change_Fund;
                    data.Drops = Drops_Acceptor;
                    data.Checks = checks;

                    var errHtml = checkInDataTemp(data);
                    $('#js-dynamicDataDiv').html(errHtml);
                    $("#initialsid").focus();
                    $('.js-shiftcheckinsave').attr('data-type', 'checkin');
                    $('.js-shiftcheckincomplete').attr('data-type', 'checkin');

                    if ($('#overorshortid').val() < 0) {
                        $('#overorshortid').css('color', 'red');
                    }
                } else {
                    var errHtml = shiftNoData();
                    $('#js-dynamicDataDiv').html(errHtml);
                    //$('#js-histerydiv').hide();
                }

            }
        }
    });

}

function getEndOfTheDayData() {
    //var errHtml = endhisteryTemp();
    //$('#js-dynamicDataDiv').html(errHtml);
    $('#js-dynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
    $('.js-headingText').html('Cash Reconciliation : Shift End Of The Day')
    var store_id = userData.store_id;
    var date = moment(businessDate).format('YYYY-MM-DD');
    var date1 = moment().format('YYYY-MM-DD HH:mm:ss');
    var curdate = moment().format('YYYY-MM-DD');
    var newyesturday = moment().subtract(1, 'd').format('YYYY-MM-DD');
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/cashReconciliation",
        data: {
            store_id: store_id,
            date: date,
            mediano: 1,
            today: newyesturday,
            type: 'endofday',
            curdate: curdate
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.response) {
                if (response.response.BakeryOrderStatus == 'Complete' && response.response.ChangeOrderStatus == 'Complete' && response.response.GasDipStatus == 'Complete' && response.response.ShiftCheckInStatus == 'Complete') {
                    response.response.date = date;
                    response.response.date1 = date1;
                    var data = response.response;
                    var errHtml = checkInDataTemp(data);
                    $('#js-dynamicDataDiv').html(errHtml);
                    $("#initialsid").focus();
                    $('.js-shiftcheckinsave').attr('data-type', 'endofday');
                    $('.js-shiftcheckincomplete').attr('data-type', 'endofday');
                    if ($('#overorshortid').val() < 0) {
                        $('#overorshortid').css('color', 'red');
                    }
                } else {
                    var data = {
                        "BakeryOrderStatus": response.response.BakeryOrderStatus,
                        "ChangeOrderStatus": response.response.ChangeOrderStatus,
                        "GasDipStatus": response.response.GasDipStatus,
                        "ShiftCheckInStatus": response.response.ShiftCheckInStatus
                    };
                    var warningHtml = endofDayWarningTemplate(data);
                    $('#js-dynamicDataDiv').html(warningHtml);
                }
            }

        }
    });

}


function getMoneyOrderData() {
    var dataHtml = moneyOrderTemp();
    $('#js-dynamicDataDiv').html(dataHtml);
    $(".js-moneyOrderNum").focus();
    //$(window).keyup();
}

$(document).delegate('.js-moneyOrderSubmit', 'click', function(ev) {
    ev.preventDefault();
    var moneyOrderEl = $(".js-moneyOrderNum");
    var moneyOrderNumber = $.trim(moneyOrderEl.val());
    var moneyOrderParent = moneyOrderEl.parent();
    var invalidNumber = false;
    if (moneyOrderNumber && moneyOrderNumber != '' && moneyOrderNumber.length == 11) {
        if (moneyOrderNumber <= 0) {
            invalidNumber = true;
            if (moneyOrderParent.hasClass('has-error')) {} else {
                moneyOrderParent.addClass('has-error');
                moneyOrderParent.append('<p class="help-block">Invalid money order number. Please scan again.</p>');
            }
        }
    } else {
        invalidNumber = true;
        if (moneyOrderParent.hasClass('has-error')) {} else {
            moneyOrderParent.addClass('has-error');
            moneyOrderParent.append('<p class="help-block">Invalid money order number. Please scan again.</p>');
        }
    }
    var dataObj = {};
    if (moneyOrderNumber.length == 11) {
        moneyOrderNumber = moneyOrderNumber.slice(0, -1);
    }
    dataObj.serialNo = moneyOrderNumber;
    dataObj.Store = userData.store_id;
    if (!invalidNumber) {
        $.ajax({
            type: "POST",
            url: apiURL + "/route/moneyOrder/moneyOrderInquire",
            data: JSON.stringify(dataObj),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                moneyOrderComplete = true;
                if (response.status == "failure") {
                    var data = {
                        rows: response.response,
                        number: dataObj.serialNo
                    };
                    var errHtml = moneyOrderErrTemp(data);
                    $('#js-dynamicDataDiv').html(errHtml);
                } else if (response.status == "success") {
                    var data = {
                        rows: response.response,
                        number: dataObj.serialNo
                    };
                    var errHtml = moneyOrderInfoTemp(data);
                    $('#js-dynamicDataDiv').html(errHtml);
                    $('.js-moneyOrderConfirmSubmit').attr('data-cashed', response.DocValue);
                }
            }
        });
    }
});

$(document).delegate('.js-moneyOrderExit', 'click', function(ev) {
    ev.preventDefault();
    moneyOrderComplete = false;
    getMoneyOrderData();
});
$(document).delegate('.js-itpaymenterr-Exit', 'click', function(ev) {
    ev.preventDefault();
    if ($('.js-side-nav li.active a ').data('url') == 'crCheckReport') {

        getCardreaderTableList();
    } else if ($('.js-side-nav li.active a ').data('url') == 'itPayment') {

        getItPaymentTableList();
    }
});
$(document).delegate('.js-itpaymentsucc-Exit', 'click', function(ev) {
    ev.preventDefault();
    if ($('.js-side-nav li.active a ').data('url') == 'crCheckReport') {

        getCardreaderTableList();
    } else if ($('.js-side-nav li.active a ').data('url') == 'itPayment') {

        getItPaymentTableList();
    }
});




$(document).delegate('.js-moneyOrderConfirmSubmit', 'click', function(ev) {
    ev.preventDefault();
    if ($(this).attr('data-cashed') == "true") {
        var errHtml = moneyOrderCashedTemp();
        $('#js-dynamicDataDiv').html(errHtml);
    } else {
        var serialNo = $('.js-moneyOrderConfirmNumber').val();
        var cnfrmHtml = moneyOrderConfirmationTemp();
        $('#js-dynamicDataDiv').html(cnfrmHtml);
        $('.js-moneyOrderCashed').attr('data-SerialNo', serialNo);
    }
});
$(document).delegate('.js-moneyOrderCashed', 'click', function(ev) {
    ev.preventDefault();
    moneyOrderComplete = false;
    var dataObj = {};
    dataObj.SerialNo = $('.js-moneyOrderCashed').attr('data-SerialNo');
    dataObj.Store = userData.store_id;
    $.ajax({
        type: "POST",
        url: apiURL + "/route/moneyOrder/moneyOrderCash",
        data: JSON.stringify(dataObj),
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.status == "failure") {
                var errHtml = moneyOrderErrTemp();
                $('#js-dynamicDataDiv').html(errHtml);
            } else if (response.status == "success") {
                var successHtml = moneyOrderSuccessPopupTemp();
                $('#js-dynamicDataDiv').html(successHtml);
            }
        }
    });
})
$(document).delegate('.js-moneyOrderQuit', 'click', function(ev) {
    ev.preventDefault();
    getMoneyOrderData();
});
$(document).delegate('.js-moneyOrderSuccess', 'click', function(ev) {
    ev.preventDefault();
    getMoneyOrderData();
});

function getManualGasDipReportData() {
    $('#js-gasDipreportDiv').show();
    var store_id = userData.store_id;
    //var date = moment($('#js-gasDip-reportDate').val(), 'MMM Do YYYY').format('YYYY-MM-DD');
    var date = moment().format('YYYY-MM-DD');

    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/manualGasDipReport",
        data: {
            store_id: store_id,
            date: date
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.response.length > 0) {
                $('.js-gasDipTable').hide();
                var data = {
                    rows: response.response,
                    date: date,
                    init: response.response[0].init,
                    dipped_yn: parseInt(response.response[0].dipped_yn)
                };
                var errHtml = manualGasEntryTemp(data);
                $('#js-dynamicDataDiv').html(errHtml);
                $('.js-empIntial').focus();
                //$('#gas_date').val(moment().format("MM/DD/YYYY"));
                if (response.response[0].status === 'Complete') {
                    $('input[type=radio][name=reportConfirmation]').attr('disabled', true);
                    $('.js-empIntial').attr('disabled', true);
                    $('button[data-accType="Save"]').attr('disabled', 'disabled');
                    $('button[data-accType="Complete"]').attr('disabled', 'disabled');
                }
            } else {
                var errHtml = tankDipError();
                $('#js-dynamicDataDiv').html(errHtml);
            }

        }
    });
}

$(document).delegate('.js-noTankData-exit', 'click', function(ev) {
    ev.preventDefault();
    getManualGasDipTableList();
    $('#js-gasDipreportDiv').show();
});

$(document).delegate('.js-noTankData-continue', 'click', function(ev) {
    ev.preventDefault();

    $('#js-gasDipreportDiv').show();
    var store_id = userData.store_id;
    //var date = moment($('#js-gasDip-reportDate').val(), 'MMM Do YYYY').format('YYYY-MM-DD');
    var date = moment().format('YYYY-MM-DD');

    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/dipreportmaxdate",
        data: {
            store_id: store_id
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.response.length > 0) {
                var obj = {};
                obj.rows = response.response;
                obj.date = moment(date).format('YYYY-MM-DD');
                obj.init = response.response[0].init;
                var tableHtml = manualGasEntryTemp(obj);
                $('#js-dynamicDataDiv').html(tableHtml);
                $(".js-empIntial").focus();
            } else {
                new PNotify({
                    title: 'Error!',
                    text: 'No Previous Data is available to proceed Manually',
                    type: 'error',
                    styling: 'fontawesome',
                    hide: true,
                    delay: 2000
                });
            }
        }
    });
});

$(document).delegate('.js-gasdipOrderActions', 'click', function(ev) {
    ev.preventDefault();

    var date = $(this).attr('data-date');
    var store_id = userData.store_id;
    // var date = moment($('#js-gasDip-reportDate').val(), 'MMM Do YYYY').format('YYYY-MM-DD');
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/manualGasDipReport/actions",
        data: {
            store_id: store_id,
            date: date
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            $('.js-gasDipTable').hide();
            var data = {
                rows: response.response,
                date: response.response[0].Date,
                init: response.response[0].init,
                dipped_yn: parseInt(response.response[0].dipped_yn)
            };
            var errHtml = manualGasEntryTemp(data);
            $('#js-dynamicDataDiv').html(errHtml);
            if (response.response[0].status === 'Complete') {
                $('button[data-accType="Save"]').attr('disabled', 'disabled');
                $('button[data-accType="Complete"]').attr('disabled', 'disabled');
                $('input[type=radio][name=reportConfirmation]').attr('disabled', true);
                $('.js-empIntial').attr('disabled', true);
            }
        }
    });



    $('#js-gasDipreportDiv').hide();
});



$(document).delegate('.js-gasDipReportSubmit', 'click', function(ev) {
    ev.preventDefault();
    $(this).button('loading');
    var dataObj = {};
    dataObj.init = $('.js-empIntial').val();
    if ($("input[name='reportConfirmation']:checked").val() == 'true') {
        dataObj.dipped_yn = 1;
    } else {
        dataObj.dipped_yn = 0;
    }
    dataObj.reported_date = moment($('#gas_date').val() + " " + moment().format('HH:mm:ss')).format('YYYY-MM-DD HH:mm:ss');
    dataObj.store_id = userData.store_id;
    dataObj.status = $(this).attr('data-accType');
    dataObj.DipReport = [];
    $('.js-manualGasDipBody tr').each(function(ev) {
        var obj = {};
        obj.tank = parseInt($(this).find('p.js-tank').text());
        obj.description = $(this).find('p.js-desc').text();
        obj.water = parseFloat($(this).find('input.js-water').val() || 0);
        obj.status = dataObj.status;
        obj.type = 'mgd';
        obj.gallons = $(this).find('input.js-water').data('gallons');
        obj.dayid = $(this).find('input.js-water').data('dayid');
        obj.inches = $(this).find('input.js-water').data('inches');
        obj.temp = $(this).find('input.js-water').data('temp');
        obj.ullage = $(this).find('input.js-water').data('ullage');
        if ($(this).find('input.js-water').data('ts') == '') {
            obj.ts = moment().format('YYYY-MM-DD H:mm:ss');
        } else {
            obj.ts = $(this).find('input.js-water').data('ts');
        }
        if (obj.water >= 0) {
            dataObj.DipReport.push(obj);
        }
    });
    if (dataObj.DipReport.length > 0 && dataObj.init.length > 0) {
        $.ajax({
            type: "POST",
            url: apiURL + "/route/bakery/manualGasDipReport",
            data: JSON.stringify(dataObj),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                $('.js-gasDipReportSubmit').button('reset');
                getManualGasDipTableList();
            }

        });
    } else if (dataObj.init.length == 0) {
        $('.js-gasDipReportSubmit').button('reset');
        new PNotify({
            title: 'Error!',
            text: 'Please fill employee initials.',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    } else {
        $('.js-gasDipReportSubmit').button('reset');
    }
});

function getPrintShelfTagData() {
    var dataHtml = printShelfTemp();
    $('#js-dynamicDataDiv').html(dataHtml);
    $(".js-printShelfNum").focus();
    //$(window).trigger('keyup');
}

var capturedValue = '';
$(window).keyup(function(ev) {
    var key = (ev.which) ? ev.which : ev.keyCode;
    if (key === 9) {
        capturedValue = '';
    }
    if (key !== 13) {
        capturedValue = capturedValue + String.fromCharCode(key);
    }
    var str = '';
    if (key === 13) {
        str = capturedValue;
        capturedValue = '';
    } else {
        return false;
    }
    if ($('.js-side-nav li.active a').text() == 'Print Shelf Tag') {
        console.log('Print Shelf Tag Scanned Input');
        console.log(str);
        $('.js-printShelfNum').val(str);
        $('.js-printShelfSubmit').attr('disabled', false);
    } else if ($('.js-side-nav li.active a').text() == 'Money Order') {
        console.log('Money Order Scanned Input');
        console.log(str);
        if (!moneyOrderComplete) {
            if (str.length == 11) {
                str = str.slice(0, -1);
                $('.js-moneyOrderNum').val(str);
                $('.js-moneyOrderSubmit').attr('disabled', false);
            } else {
                new PNotify({
                    title: 'Error!',
                    text: 'Invalid money order number. Please scan again.',
                    type: 'error',
                    styling: 'fontawesome',
                    hide: true,
                    delay: 2000
                });
            }
        }
    } else if ($('.js-side-nav li.active a').text() == 'Check Verification') {
        console.log('Check Scanned Input');
        console.log(str);
        //Split the String Value into Check No, Account No, Routing No.
        if (str && str.length > 15) {
            var rNo = str.substring(0, 9); //First 9
            var chkNo = str.substring(str.length - 6, str.length); //Last 6
            var accNo = str.substring(9, str.length - 6); // Between
            $('.js-routingnumber').val(rNo);
            $('.js-accountnumber').val(accNo);
            $('.js-checknumber').val(chkNo);
            $('.js-routingnumber').prop('disabled', true);
            $('.js-accountnumber').prop('disabled', true);
            $('.js-checknumber').prop('disabled', true);
            $('#js-scanned-edit').show();
            swiped = 'S';
        }
    }
});

$(document).delegate('#js-scanned-edit', 'click', function(ev) {
    ev.preventDefault();
    $('.js-routingnumber').prop('disabled', false);
    $('.js-accountnumber').prop('disabled', false);
    $('.js-checknumber').prop('disabled', false);
});


$(document).delegate('.js-print-success-exit', 'click', function(ev) {
    ev.preventDefault();
    getPrintShelfTagData();
});

$(document).delegate('.js-print-success-print', 'click', function(ev) {
    ev.preventDefault();
    //var upc = $('.js-print-success-print').attr('upc');
    //var product_name = $('.js-print-success-print').attr('product_name');
    //var product_price = $('.js-print-success-print').attr('product_price');
    sendData();
    //printUpc(upc, product_name, product_price);
});



$(document).delegate('.js-printShelfSubmit', 'click', function(ev) {
    ev.preventDefault();
    var upc = $('.js-printShelfNum').val();
    if (upc.length > 0) {
        var printShelfUrl = $.cookie('user').printShelfUrl;
        $.ajax({
            type: "GET",
            url: printShelfUrl + upc,
            crossDomain: true,
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response.length > 0) {
                    if (response[0].UPC.length > 0) {
                        var product_name = response[0].NAME;
                        var printerOutput = "^XA^FO35,25^ACN,28,14^FD" + product_name + "^FS^FO70,100^ACN,28,14^FDEA^FS^FO280,90^ACN,48,24^FH^FD" + response[0].PRICE + "^FS^FO60,150^BEN,70^FD" + response[0].UPC + "^FS^FO220,170^ACN,28,14^XZ";
                        var printData = printShelfSuccess({
                            "product_name": product_name
                        });
                        $('#js-dynamicDataDiv').html(printData);
                        $('.js-print-success-print').attr({
                            'upc': response[0].UPC,
                            'product_name': response[0].NAME,
                            'product_price': response[0].PRICE,
                            'printerOutput': printerOutput
                        });
                        //TODO:Moved the Web Print to Here
                        setup_web_print();
                    }
                } else {
                    new PNotify({
                        title: 'Error!',
                        text: 'The format of response doesnot match',
                        type: 'error',
                        styling: 'fontawesome',
                        hide: true
                    });
                }
            },
            error: function(request, status, errorThrown) {
                var errData = printShelfErr();
                $('#js-dynamicDataDiv').html(errData);
            }
        });
    }
});

function printUpc(upc, product_name, product_price) {
    var newWindow = window.open();
    newWindow.document.write(upc + " " + "Product Name" + product_name + " Product Price" + product_price);
    newWindow.print();
}


function getNotificationData() {
    var newBusinessDate = moment().format('YYYY-MM-DD HH:mm:ss')
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/message",
        data: {
            store_id: userData.store_id,
            newBusinessDate: newBusinessDate
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            //console.log(response);
            var data = {
                rows: response.response
            };

            var count = 0;
            for (var i = 0; i < response.response.length; i++) {
                if (response.response[i].read == 0) {
                    count++;
                }
            }
            if (count == 0) {
                $('.js-notificationCount').closest('div').hide();
            } else {
                $('.js-notificationCount').text(count);
            }
            //Added this Logic to make sure the page Does not Reload
            if ($('#js-home').parent().hasClass('active')) {
                var dataHtml = homeTemp(data);
                $('#js-dynamicDataDiv').html(dataHtml);
            }

        }
    });
}

$(document).delegate('.js-notificationBell', 'click', function(ev) {
    ev.preventDefault();
    $('.js-side-nav li').removeClass('active');
    $('#js-home').parent().addClass('active');
    $('.js-changeOrder').hide();
    $('#js-datepickerDiv').hide();
    getNotificationData();
});

$(document).delegate('#js-changeOrders-viewHistory', 'click', function(ev) {
    ev.preventDefault();
    $('.js-addNewOrder').hide();
    getChangeOrderList();
});

function checkTheStatusOfItPaymentCheckReport() {

    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.reported_date = moment().format('YYYY-MM-DD');
    dataObj.bdate = moment(businessDate).format('YYYY-MM-DD');
    $.ajax({
        type: "GET",
        url: apiURL + "/route/check/itEquipmentReport",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            $('.js-itpaymentTable').hide();
            if (response.response.length > 0) {
                var time = moment(response.response[0].time, ["h:mm"]).format("h:mm");
                var errHtml = reportErrTemplate();
                $('#js-dynamicDataDiv').html(errHtml);
                $('.js-respTime').text(time);
            } else {
                var paymentReportHtml = paymentReportTemplate();
                $('#js-dynamicDataDiv').html(paymentReportHtml);
                $("#js-it-empIntial").focus();
                $('.js-itPaymentDate').val(moment().format("MM/DD/YYYY"));
                $('.js-itPaymentTime').val(moment().format("h:mm A"));
                dynamicTime();
            }
            $('#js-reportName').text('IT Payment Equipment Check Report');
            $('.js-respDate').text(dataObj.reported_date);
        }
    });
}

function checkTheStatusOfCardReaderCheckReport() {

    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.reported_date = moment().format('YYYY-MM-DD');
    dataObj.bdate = moment(businessDate).format('YYYY-MM-DD');
    $.ajax({
        type: "GET",
        url: apiURL + "/route/check/cardCheckReport",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            $('.js-cardReaderTable').hide();
            if (response.response.length > 0) {
                var time = moment(response.response[0].time, ["h:mm"]).format("h:mm");
                var errHtml = reportErrTemplate();
                $('#js-dynamicDataDiv').html(errHtml);
                $('.js-respTime').text(time);
            } else {
                var cardReaderHtml = cardReaderTemplate();
                $('#js-dynamicDataDiv').html(cardReaderHtml);
                $(".js-empIntial").focus();
                $('.js-cardReaderDate').val(moment().format("MM/DD/YYYY"));
                $('.js-cardReaderTime').val(moment().format('h:mm A'));
                dynamicTime();
            }
            $('#js-reportName').text('Card Reader Check Report');
            $('.js-respDate').text(dataObj.reported_date);
        }
    });
}

function getChangeOrderList() {

    var dataObj = {};
    $('#js-dynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
    // dataObj.order_amount = $('.js-change-entry').val();
    dataObj.store_id = userData.store_id;
    // dataObj.businessDate = businessDate;
    dataObj.businessDate = businessDate;
    $.ajax({
        type: "GET",
        url: apiURL + "/route/check/changeOrderHistory",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {

            if (response.status == "failure") {
                var errHtml = histeryTemp();
                $('#js-histerydetailspage').html(errHtml);
            } else if (response.status == "success") {
                var moneyFormat = wNumb({
                    mark: '.',
                    thousand: ',',
                    prefix: '$ '
                        //suffix: ' p.p.'
                });
                for (var i in response.response) {
                    response.response[i].orderTotal = moneyFormat.to(parseInt(response.response[i].orderTotal || 0))
                    response.response[i].receivedTotal = moneyFormat.to(parseInt(response.response[i].receivedTotal || 0))
                }
                // alert(JSON.stringify(response.response))

                var data = {
                    rows: response.response
                };
                //ending here

                var tableHtml = changeOrderTemp(data);
                $('#js-dynamicDataDiv').html(tableHtml);
                $('.js-changeOrder').show();
                $('#example').DataTable({
                    "columnDefs": [{
                        "targets": 7,
                        "width": "13%",
                        "orderable": true
                    }],
                    "pagingType": "full_numbers",
                    "searching": true,
                    "order": [
                        [0, "desc"]
                    ]
                });
                $('.dataTables_length').hide();
                $('#example_filter').remove();
                var todayPresence = _.some(response.response, function(c) {
                    return c.orderedDate == moment().format('YYYY-MM-DD')
                });

                if (todayPresence) {

                    $('.js-addNewOrder').attr('disabled', 'disabled').css('pointer-events', 'none');
                } else {
                    $('.js-addNewOrder').removeAttr('disabled', 'disabled')
                }
            }
        }
    });
    $('.js-addNewOrder').show();
}

function getCardreaderTableList() {
    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.businessDate = moment(businessDate).format('YYYY-MM-DD');
    $.ajax({
        type: "GET",
        url: apiURL + "/route/check/cardCheckHistory",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            console.log(response);
            var data = {
                tablerows: response.response
            };
            var tableHtml = cardreaderTableTemp(data);
            $('#js-dynamicDataDiv').html(tableHtml);
            $('.js-cardReaderTable').show();
            $('#cardreaderexample').DataTable({
                "pagingType": "full_numbers",
                "searching": false,
                "order": [
                    [0, "desc"]
                ]
            });
            $('.dataTables_length').hide();
            $('#example_filter').remove();

        }
    });
}

function getItPaymentTableList() {
    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.businessDate = moment(businessDate).format('YYYY-MM-DD');
    $.ajax({
        type: "GET",
        url: apiURL + "/route/check/itEquipmentHistory",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            console.log(response);
            var data = {
                tablerows: response.response
            };
            var tableHtml = itpaymentTableTemp(data);
            $('#js-dynamicDataDiv').html(tableHtml);
            $('.js-itpaymentTable').show();
            $('#itpaymentexample').DataTable({
                "pagingType": "full_numbers",
                "searching": false,
                "order": [
                    [0, "desc"]
                ]

            });
            $('.dataTables_length').hide();
            $('#example_filter').remove();
        }
    });
}

function getManualGasDipTableList() {
    $('#js-gasDipreportDiv').show();
    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.businessDate = businessDate;
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/manualGasDipHistory",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {

            console.log(response);
            var data = {
                tablerows: response.response
            };
            var tableHtml = manualGasdipTableTemp(data);
            $('#js-dynamicDataDiv').html(tableHtml);
            $('.js-gasDipTable').show();
            $('#manualgasdipexample').DataTable({
                "columnDefs": [{
                    "targets": 6,
                    "orderable": false
                }],
                "pagingType": "full_numbers",
                "searching": false,
                "order": [
                    [0, "desc"]
                ]

            });
            $('.dataTables_length').hide();
            $('#example_filter').remove();
        }
    });
}

// if ($(this).data('type')) {
//   obj.type = $(this).data('type');
// } else {
//   obj.type = 'checkin';
// }

function shiftCheckInTables() {
    // $('#js-contentdiv').hide();
    // $('#js-histerydetailspage').show();
    // $('#js-histerydiv').hide();
    var store_id = userData.store_id;
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/cashReconHistory",
        data: {
            store_id: store_id,
            type: 'checkin',
            'businessDate': moment(businessDate).format('YYYY-MM-DD')
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.status == "failure") {
                var errHtml = histeryTemp();
                $('#js-histerydetailspage').html(errHtml);
            } else if (response.status == "success") {
                var moneyFormat = wNumb({
                    mark: '.',
                    thousand: ',',
                    prefix: '$ ',
                    decimals: 2
                        //suffix: ' p.p.'
                });
                for (var i in response.response) {
                    response.response[i].Over_Short = moneyFormat.to(parseFloat(response.response[i].Over_Short))
                }
                // alert(JSON.stringify(response.response))

                var data = {
                    rows: response.response
                };
                var tableHtml = histerTableTemp(data);
                $('#js-dynamicDataDiv').html(tableHtml);

                $('#example').DataTable({
                    "columnDefs": [{
                        "targets": 6,
                        "orderable": false
                    }],
                    "pagingType": "full_numbers",
                    "searching": false,
                    "order": [
                        [0, "desc"]
                    ]

                });
                $('.dataTables_length').hide();
                $('#example_filter').remove();

            }
        }
    });
}
$(document).delegate('.js-shiftcheckinActions', 'click', function(ev) {
    ev.preventDefault();
    //var errHtml = histeryTemp();
    //$('#js-dynamicDataDiv').html(errHtml);
    var cashreconid = $(this).attr('data-reconid');
    // var dataObj = {};
    // dataObj.store_id = userData.store_id;
    // dataObj.cash_recon_id = cashreconid;

    // var store_id = userData.store_id;
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/cashreconactions",
        "data": {
            'cash_recon_id': cashreconid,
            type: 'checkin'
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.status == "failure") {
                var errHtml = histeryTemp();
                $('#js-histerydetailspage').html(errHtml);
            } else if (response.status == "success") {

                var data = {
                    rows: response.response
                };
                //var errHtml = histeryTemp();
                //$('#js-dynamicDataDiv').html(errHtml);
                var tableHtml = checkInDataTemp(response.response[0]);
                $('#js-dynamicDataDiv').html(tableHtml);

                var date1 = $("#dateid").val(moment().format('YYYY-MM-DD h:mm:ss'));

            }
        }
    });
});

// function shiftCheckInTables() {
//   $('#js-contentdiv').hide();
//   $('#js-histerydetailspage').show();
//   $('#js-histerydiv').hide();
//   var store_id = userData.store_id;
//   var tableHtml = histerTableTemp();
//   $('#js-dynamicDataDiv').html(tableHtml);
//   var table = $('#example').DataTable({
//     "pagingType": "full_numbers",
//     "searching": false,
//     "order": [
//       [0, "desc"]
//     ],
//     'ajax': {
//       "type": "GET",
//       "url": apiURL + "/route/bakery/cashReconHistory",
//       "data": {
//         'store_id': store_id
//       },
//       "dataSrc": function(response) {
//         return response.response;
//       }
//     },
//     "columns": [{
//         "data": "bdate"
//       }, {
//         "data": "initials"
//       }, {
//         "data": "Over_Short"
//       }]
//       // }, {
//       //   "data": "Action",
//       //   bSortable: false,
//       //   mRender: function(o) {
//       //     return '<i class="ui-tooltip fa fa-list js-shiftcheckinActions" data-date="{{bdate}}" style="font-size: 22px;" data-original-title="Action"></i>';
//       //   }
//       // }]
//   });
//   $('.dataTables_length').hide();
//   $('#example_filter').remove();
//
//   $('#example tbody').on('click', 'td', function() {
//     var tr = $(this).closest('tr');
//     var row = table.row(tr);
//
//     if (row.child.isShown()) {
//       // This row is already open - close it
//       row.child.hide();
//       tr.removeClass('shown');
//     } else {
//       // Open this row
//       row.child(format(row.data())).show();
//       tr.addClass('shown');
//     }
//   });
//
// }

// function format(d) {
//   // `d` is the original data object for the row
//   console.log(d);
//   return '<center><table cellpadding="10" cellspacing="0" border="0" style="padding-left:50px;">' +
//
//     '<tr>' +
//     '<td>Cash:Registers:</td>' +
//     '<td>' + d.Registers + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>+ Cash : M.O. Drawer </td>' +
//     '<td>' + d.Drawer + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>+ Cash : Top of Safe </td>' +
//     '<td>' + d.Top_of_Safe + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>+ Change Fund /Other</td>' +
//     '<td>' + d.Change_Fund + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>= Ending Cash </td>' +
//     '<td>' + d.Ending_Cash + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>+ Drops</td>' +
//     '<td>' + d.Drops + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>+ Checks</td>' +
//     '<td>' + d.Checks + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>- Change Orders</td>' +
//     '<td>' + d.Change_Orders + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>- Beginning Cash</td>' +
//     '<td>' + d.Beginning_Cash + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>= Today Cash</td>' +
//     '<td>' + d.Todays_Cash + '</td>' +
//     '</tr>' +
//     '<tr>' +
//     '<td>- Cash Sales</td>' +
//     '<td>' + d.Cash_Sales + '</td>' +
//     '</tr>' +
//     '<td>= Over / Short</td>' +
//     '<td>' + d.Over_Short + '</td>' +
//     '</tr>' +
//
//     '</table></center>';
// }
function endofDayTables() {
    // $('#js-contentdiv').hide();
    // $('#js-histerydetailspage').show();
    // $('#js-histerydiv').hide();
    //var tableHtml = endofDayTemp();
    //$('#js-dynamicDataDiv').html(tableHtml);
    var store_id = userData.store_id;
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/cashReconHistory",
        data: {
            store_id: store_id,
            type: 'endofday',
            'businessDate': moment(businessDate).format('YYYY-MM-DD')
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.status == "failure") {
                var errHtml = histeryTemp();
                $('#js-histerydetailspage').html(errHtml);
            } else if (response.status == "success") {
                var moneyFormat = wNumb({
                    mark: '.',
                    thousand: ',',
                    prefix: '$ ',
                    decimals: 2
                        // postfix: ' p.p.'
                });
                for (var i in response.response) {
                    response.response[i].Over_Short = moneyFormat.to(parseFloat(response.response[i].Over_Short))
                }
                var data = {
                    rows: response.response
                };
                var tableHtml = endofDayTemp(data);
                $('#js-dynamicDataDiv').html(tableHtml);

                $('#example').DataTable({
                    "columnDefs": [{
                        "targets": 6,
                        "orderable": false
                    }],
                    "pagingType": "full_numbers",
                    "searching": false,
                    "order": [
                        [0, "desc"]
                    ]
                });
                $('.dataTables_length').hide();
                $('#example_filter').remove();

                var todayPresence = _.some(response.response, function(c) {
                    return c.bdate == moment(businessDate).format('YYYY-MM-DD')
                });

                if (todayPresence) {

                    $('.js-addendofDay').attr('disabled', 'disabled').css('pointer-events', 'none');
                } else {
                    $('.js-addendofDay').removeAttr('disabled', 'disabled')
                }
            }
        }
    });
}
$(document).delegate('.js-endofthedayActions', 'click', function(ev) {
    ev.preventDefault();

    var cashreconid = $(this).attr('data-reconid');
    // var dataObj = {};
    // dataObj.store_id = userData.store_id;
    // dataObj.cash_recon_id = cashreconid;

    // var store_id = userData.store_id;
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/cashreconactions",
        "data": {
            'cash_recon_id': cashreconid,
            type: 'endofday'
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.status == "failure") {
                var errHtml = endhisteryTemp();
                $('#js-histerydetailspage').html(errHtml);
            } else if (response.status == "success") {

                var data = {
                    rows: response.response
                };
                //var errHtml = endhisteryTemp();
                //$('#js-dynamicDataDiv').html(errHtml);
                var tableHtml = checkInDataTemp(response.response[0]);
                $('#js-dynamicDataDiv').html(tableHtml);


                var date1 = $("#dateid").val(moment().format('YYYY-MM-DD h:mm:ss'));

            }

        }
    });
});

// function endofDayTables() {
//
//   $('#js-contentdiv').hide();
//   $('#js-histerydetailspage').show();
//   $('#js-histerydiv').hide();
//   var store_id = userData.store_id;
//   var tableHtml = endofDayTemp();
//   $('#js-dynamicDataDiv').html(tableHtml);
//   // $('.dataTables_length').hide();
//   // $('#example_filter').remove();
//   var table = $('#example').DataTable({
//     "pagingType": "full_numbers",
//     "searching": false,
//     "order": [
//       [0, "desc"]
//     ],
//     'ajax': {
//       "type": "GET",
//       "url": apiURL + "/route/bakery/cashReconHistory",
//       "data": {
//         'store_id': store_id
//       },
//       "dataSrc": function(response) {
//         return response.response;
//       }
//     },
//     "columns": [{
//       "data": "bdate"
//     }, {
//       "data": "initials"
//     }, {
//       "data": "Over_Short"
//     }]
//   });
//   $('.dataTables_length').hide();
//   $('#example_filter').remove();
//   $('#example tbody').on('click', 'td', function() {
//     var tr = $(this).closest('tr');
//     var row = table.row(tr);
//
//     if (row.child.isShown()) {
//       // This row is already open - close it
//       row.child.hide();
//       tr.removeClass('shown');
//     } else {
//       // Open this row
//       row.child(format(row.data())).show();
//       tr.addClass('shown');
//     }
//   });
// }

function bakeryOrdersTables() {
    $('.js-bakeryOrders').show();
    $('#js-contentdiv').hide();
    // $('#js-histerydetailspage').show();
    $('#js-histerydiv').hide();
    var store_id = userData.store_id;
    var today = moment();
    var tomorrow = moment(today).add(1, 'day');
    // console.log(cdate);
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/bakeryOrdersHistory",
        data: {
            store_id: store_id,
            'businessDate': businessDate
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.status == "failure") {
                var errHtml = bakerytableTemp();
                $('#js-histerydetailspage').html(errHtml);
            } else if (response.status == "success") {
                var data = {
                    rows: response.response
                };
                var tableHtml = bakerytableTemp(data);
                $('#js-dynamicDataDiv').html(tableHtml);
                $('#example').DataTable({
                    "columnDefs": [{
                        "targets": 5,
                        "orderable": false
                    }],
                    "pagingType": "full_numbers",
                    "searching": false,
                    "order": [
                        [0, "desc"]
                    ]
                });
                $('.dataTables_length').hide();
                $('#example_filter').remove();

                var todayPresence = _.some(response.response, function(c) {
                    return c.DATE == moment().add(1, 'day').format("YYYY-MM-DD")
                });
                if (todayPresence) {
                    $('.js-bakeryOrders').attr('disabled', 'disabled').css('pointer-events', 'none');
                }

            }
        }
    });
}

$(document).delegate('input[name="reportConfirmation"]', 'change', function(ev) {
    ev.preventDefault();
    if ($(this).val() == "true") {
        $('.ui-pnotify').hide();
    }
});

$(document).delegate('.js-empIntial', 'keyup', function(ev) {
    ev.preventDefault();
    var intialValue = $.trim($('.js-empIntial').val());
    if (intialValue != '') {
        $('.ui-pnotify').hide();
    }
});

$(document).delegate('#js-itPaymentSubmit', 'click', function(ev) {
    ev.preventDefault();
    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.reported_date = moment().format('YYYY-MM-DD');
    dataObj.bdate = moment(businessDate).format('YYYY-MM-DD');
    dataObj.employee_initials = $.trim($('.js-empIntial').val());

    if ($("input[name='reportConfirmation']:checked").val() == "true") {
        dataObj.checked_status = 1;
    } else {
        dataObj.checked_status = 0;
    }

    dataObj.reported_time = moment().format('HH:mm:ss');
    if (dataObj.employee_initials != "") {
        if (navigator.onLine) {
            $.ajax({
                type: "POST",
                url: apiURL + "/route/check/itEquipmentReport",
                data: JSON.stringify(dataObj),
                contentType: "application/json; charset=utf-8",
                success: function(response) {
                    if (response.response.length > 0) {
                        var time = moment(dataObj.reported_time, ["HH:mm:ss"]).format('HH:mm:ss');
                        var errHtml = reportErrTemplate();
                        $('#js-dynamicDataDiv').html(errHtml);
                        $('.js-respTime').text(time);
                    } else {
                        var time = moment(dataObj.reported_time, ["HH:mm:ss"]).format('HH:mm:ss');
                        var successHtml = reportSuccessTemp();
                        $('#js-dynamicDataDiv').html(successHtml);
                        $('.js-respTime').text(time);
                    }
                    $('#js-reportName').text('IT Payment Equipment Check Report done ');
                    $('.js-respDate').text(dataObj.reported_date);
                }
            });
        } else {
            localStorage.setItem("/route/check/itEquipmentReport", JSON.stringify(dataObj));
            $('#js-itPaymentSubmit').button('reset');
            new PNotify({
                title: 'Success!',
                text: "You don't have internet connection, Once you get the connection your data will be stored.",
                type: 'success',
                styling: 'fontawesome',
                hide: true
            });
        }
    } else {
        new PNotify({
            title: 'Failed!',
            text: 'Please enter employee intials',
            type: 'error',
            styling: 'fontawesome',
            hide: true
        });
    }
});

$(document).delegate('#js-cardReaderSubmit', 'click', function(ev) {
    ev.preventDefault();
    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.reported_date = moment().format('YYYY-MM-DD');
    dataObj.employee_initials = $.trim($('.js-empIntial').val());
    if ($("input[name='reportConfirmation']:checked").val() == 'true') {
        dataObj.checked_status = 1;
    } else {
        dataObj.checked_status = 0;
    }
    dataObj.reported_time = moment().format('HH:mm:ss');
    dataObj.bdate = moment(businessDate).format('YYYY-MM-DD');
    if (dataObj.employee_initials != "") {
        if (navigator.onLine) {
            $.ajax({
                type: "POST",
                url: apiURL + "/route/check/cardCheckReport",
                data: JSON.stringify(dataObj),
                contentType: "application/json; charset=utf-8",
                success: function(response) {
                    if (response.response.length > 0) {
                        var time = moment(response.response[0].time, ["HH:mm:ss"]).format("HH:mm:ss");
                        var errHtml = reportErrTemplate();
                        $('#js-dynamicDataDiv').html(errHtml);
                        $('.js-respTime').text(time);
                    } else {
                        var time = moment(dataObj.reported_time, ["HH:mm:ss"]).format("HH:mm:ss");
                        var successHtml = reportSuccessTemp();
                        $('#js-dynamicDataDiv').html(successHtml);
                        $('.js-respTime').text(time);
                    }
                    $('#js-reportName').text('Card Reader Check Report');
                    $('.js-respDate').text(dataObj.reported_date);
                }
            });
        } else {
            localStorage.setItem("/route/check/cardCheckReport", JSON.stringify(dataObj));
            $('#js-cardReaderSubmit').button('reset');
            new PNotify({
                title: 'Success!',
                text: "You don't have internet connection, Once you get the connection your data will be stored.",
                type: 'success',
                styling: 'fontawesome',
                hide: true
            });
        }
    } else {
        new PNotify({
            title: 'Failed!',
            text: 'Please enter employee initials',
            type: 'error',
            styling: 'fontawesome',
            hide: true
        });
    }
});

$(document).delegate('.js-addNewOrder', 'click', function(ev) {
    ev.preventDefault();
    var changeOrderID = parseInt(0);
    var total = 0;
    var orderBy = null;
    var orderedDate = businessDate;
    createOrderBasedOnOrderId(changeOrderID, total, orderBy, orderedDate);
});
$(document).delegate('#js-addCardReader', 'click', function(ev) {
    ev.preventDefault();
    // var errHtml = cardhisteryTemp();
    // $('#js-cardReadercontentdiv').html(errHtml);
    checkTheStatusOfCardReaderCheckReport();
});
$(document).delegate('#js-addItPayment', 'click', function(ev) {
    ev.preventDefault();
    // var iterrHtml = itpaymenthisteryTemp();
    // $('#js-itPaymentcontentdiv').html(iterrHtml);
    checkTheStatusOfItPaymentCheckReport();
});
$(document).delegate('.js-addgasDipPayment', 'click', function(ev) {
    ev.preventDefault();
    // var gaserrHtml = gasDiphisteryTemp();
    // $('#js-gasDipcontentdiv').html(gaserrHtml);
    getManualGasDipReportData();
    $('#js-gasDipreportDiv').hide();
});
$(document).delegate('.js-checkVerify', 'click', function(ev) {
    ev.preventDefault();
    checkVerificationData();
    //storeVendorId();
});
$(document).delegate('.js-validate-check-details', 'click', function(ev) {
    ev.preventDefault();
    validateCheckDetails();
});
$(document).delegate('.js-addshiftChechIn', 'click', function(ev) {

    ev.preventDefault();
    getCheckInData();
});
$(document).delegate('.js-addendofDay', 'click', function(ev) {
    ev.preventDefault();
    getEndOfTheDayData();
});
$(document).delegate('.js-bakeryOrders', 'click', function(ev) {
    ev.preventDefault();
    var today = new Date().getHours();
    //change bakery time here while debugging
    if (today >= 9 && today <= 23) {
        bakeryOrders();
    } else {
        new PNotify({
            title: 'Error',
            text: 'Time limit is completed.',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    }
    //bakeryOrders();
});
// $(document).delegate('.js-submitcheck', 'click', function(ev) {
//   ev.preventDefault();
//   $(this).button('loading');
//   var dataObj = {};
//   dataObj.store_id = userData.store_id;
//   dataObj.routingnumber = $.trim($('.js-routingnumber').val());
//   dataObj.accountnumber = $.trim($('.js-accountnumber').val());
//   dataObj.checknumber = $.trim($('.js-checknumber').val());
//   dataObj.amount = $.trim($('.js-amount').val());
//   if (dataObj.store_id && dataObj.routingnumber && dataObj.accountnumber && dataObj.checknumber && dataObj.amount) {
//     var tableHtml = checkConfirmation();
//     $('#js-dynamicDataDiv').html(tableHtml);
//   } else {
//     var tableHtml = checkErr();
//     $('#js-dynamicDataDiv').html(tableHtml);
//   }
// });
$(document).delegate('.js-checkconfirmation', 'click', function(ev) {
    ev.preventDefault();
    var tableHtml = checkCashed();
    $('#js-dynamicDataDiv').html(tableHtml);
});
$(document).delegate('.js-checkcashedsuccess', 'click', function(ev) {
    ev.preventDefault();
    checkVerificationTable();
});

function checkVerificationTable() {
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
            $('#js-dynamicDataDiv').html(checkData);
            $('.js-validate-check-details').show();
        }
    });
}

function validateCheckDetails() {
    var tempHtml = enterCheckDetails();
    $('#js-dynamicDataDiv').html(tempHtml);
    // $(".js-routingnumber").focus();
    $('.js-validate-check-details').hide();
}
$(document).delegate('.js-order-actions', 'click', function(ev) {
    ev.preventDefault();

    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.orderBy = $.trim($('.js-empOrderIntial').val());
    //dataObj.orderTime = moment(businessDate + " " + moment().format('H:mm:ss')).format('YYYY-MM-DD H:mm:ss');
    dataObj.bdate = businessDate;
    dataObj.orderTime = moment().format('YYYY-MM-DD H:mm:ss');
    dataObj.orderStatus = $(this).attr('data-accType');
    dataObj.receivedStatus = "";
    dataObj.order_amount = ($('.js-change-entry').val());
    if ($(this).attr('data-changeorderid') != "") {
        dataObj.orderID = $(this).attr('data-changeorderid');
    } else {
        dataObj.orderID = 0;
    }
    var dataArray = [];
    var redFlag = false;
    $('#js-createOrderBody tr').each(function(el, ev) {
        if ($(ev).hasClass('has-error')) {
            redFlag = true;
        }
        var dataObj = {};
        dataObj.orderQuantity = parseFloat($(this).find('td.js-orderNumber input').val() || 0);
        dataObj.currencyId = $(this).find('td.js-orderNumber input').attr('data-currencyId');
        if ($(this).find('td.js-orderNumber input').attr('data-id') != '') {
            dataObj.changeorderId = $(this).find('td.js-orderNumber input').attr('data-id')
        } else {
            dataObj.changeorderId = 0;
        }

        if (dataObj.orderQuantity >= 0 && !redFlag) {
            dataArray.push(dataObj);
        }

    });

    if (dataArray.length > 0 && $('.js-empOrderIntial').val().length > 0 && !redFlag) {
        dataObj.changeOrderDetails = dataArray;
        $(this).button('loading');
        $.ajax({
            type: "POST",
            url: apiURL + "/route/check/changeOrder",
            data: JSON.stringify(dataObj),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                $('.js-order-actions').button('reset');
                getChangeOrderList();
            }
        });

    } else if ($('.js-empOrderIntial').val().length == 0) {
        $('.js-order-actions').button('reset');
        new PNotify({
            title: 'Error',
            text: 'Please enter Initials.',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    } else if (redFlag) {
        $('.js-order-actions').button('reset');
        new PNotify({
            title: 'Error!',
            text: 'Please change values in the red boxes',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    }

});

$(document).delegate('.js-change-entry', 'keyup', function(ev) {
    $(".js-change-entry").next('span').hide();
    //var span = $(this).next('span');
    $(this).parent().removeClass('has-error');
    var count = 0;
    if (parseInt($(this).val()) % parseInt($(this).attr('data-amount')) != 0 && $(this).val() != "") {
        $(this).parent().addClass('has-error');
        //span.text("Please enter correct value").css('color', '#a94442').show();
    } else {
        if ($('.has-error').length < 0) {
            //span.text('').hide();
        }
    }
    $('#js-createOrderBody tr').each(function() {
        var changeEntryVal = $(this).find('input.js-change-entry').val();
        if (changeEntryVal >= 0 && changeEntryVal != "") {
            if (parseInt(changeEntryVal) % parseInt($(this).find('input.js-change-entry').attr('data-amount')) != 0 && parseInt(changeEntryVal) > 0) {
                $(this).find('input').closest('tr').addClass('has-error');
            } else {
                $(this).find('input').closest('tr').removeClass('has-error');
                $(this).find('input').parent().removeClass('has-error');
            }
            count = count + parseFloat($(this).find('input.js-change-entry').val())
        }
    });
    if (count > 0) {
        $('.js-ordered-amountTotal').val(count);
    } else {
        $('.js-ordered-amountTotal').val('');
    }
});

$(document).delegate('.js-productQtyOnHand', 'blur', function(ev) {
    var count = 0;
    $('.js-bakeryOrdersBody tr').each(function() {
        if ($(this).find('input.js-productQtyOnHand').val() >= 0 && $(this).find('input.js-productQtyOnHand').val() != "") {
            if (parseInt($(this).find('input.js-productQtyOnHand').val()) % parseInt($(this).find('input.js-productQtyOnHand').attr('data-amount')) != 0 && parseInt($(this).find('input.js-productQtyOnHand').val()) > 0) {}
            count = count + parseFloat($(this).find('input.js-productQtyOnHand').val())
        }
    });
    if (count > 0) {
        $('.js-bakeryordered-amountTotal').val(count);
    } else {
        $('.js-bakeryordered-amountTotal').val('');
    }
});

$(document).delegate('.js-productQtyReturn', 'blur', function(ev) {
    var count = 0;
    $('.js-bakeryOrdersBody tr').each(function() {
        if ($(this).find('input.js-productQtyReturn').val() >= 0 && $(this).find('input.js-productQtyReturn').val() != "") {
            if (parseInt($(this).find('input.js-productQtyReturn').val()) % parseInt($(this).find('input.js-productQtyReturn').attr('data-amount')) != 0 && parseInt($(this).find('input.js-productQtyReturn').val()) > 0) {}
            count = count + parseFloat($(this).find('input.js-productQtyReturn').val())
        }
    });
    if (count > 0) {
        $('.js-bakeryReturn-amountTotal').val(count);
    } else {
        $('.js-bakeryordered-amountTotal').val('');
    }
});

function bakeryOrders() {
    // $('.js-bakeryOrders').hide();
    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.date = businessDate;
    // dataObj.date = moment($('#js-today-date-bakery').val(), 'MMM Do YYYY').format('YYYY-MM-DD');
    // if (moment($('#js-today-date-bakery').val(), 'MMM Do YYYY').isSame(moment(), 'day')) {
    //   var status = 'today';
    // } else {
    //   var status = 'notToday';
    // }
    if (businessDate) {
        var status = 'today';
    } else {
        var status = 'notToday';
    }
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/bakeryOrders",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            console.log(response.response);
            var data = {
                rows: response.response,
                status: status,
                "total": 100
            };
            data.rows = [];
            for (var i = 0; i < response.response.length; i++) {
                if (response.response[i].ID === null) {
                    data.returnsTotal = response.response[i].return_total;
                    data.handsTotal = response.response[i].on_hand_total;
                } else {
                    data.rows.push(response.response[i]);
                }
            }
            var bakeryHtml = bakeryOrderTemp(data);
            $('#js-dynamicDataDiv').html(bakeryHtml);
            // $(".js-productQtyOnHand").focus();
            $($($('.js-bakeryOrdersBody tr')[0]).find("input")[0]).focus()
            for (var i = 0; i < response.response.length; i++) {
                if (response.response[i].active != null) {
                    if (response.response[i].active == "Complete") {
                        $('.js-bakeryOrdersBody tr').find("input").attr('disabled', true);
                    }
                } else {
                    $('.js-bakeryOrder-actions').attr('disabled', false);
                }
            }
            if (response.response[0].status === 'today') {
                // $('button[data-accType="Save"]').attr('disabled', false);
                $('button[data-accType="Complete"]').attr('disabled', false);

            }
        }
    });

}

$(document).delegate('.fa-calendar', 'click', function(ev) {
    //Trigger the event on the next element.
    $(this).next().trigger('select');
});


function createOrderBasedOnOrderId(changeOrderID, total, orderedBy, orderedDate) {

    var dataObj = {};
    var order_amount = $('.js-change-entry').val();
    dataObj.store_id = userData.store_id;
    dataObj.date = moment().format("YYYY-MM-DD");
    dataObj.changeorderId = changeOrderID;
    if (total != 0) {
        total = total.slice(2)
    }
    $.ajax({
        type: "GET",
        url: apiURL + "/route/check/changeOrder",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            var data = {
                "denominations": response.response,
                "changeOrderId": changeOrderID,
                "ordered_by": orderedBy,
                "totalordered": total
            };
            var testData = [];
            for (var i = 0; i < response.response.length; i++) {
                if (response.response[i].id !== null) {
                    testData.push(response.response[i]);
                }
            }
            for (var i = 0; i < response.response.length; i++) {
                if (response.response[i].id == null) {
                    data.denominations[i].orderdata = 0;
                }
                data.denominations[i].checkData = testData.length;
            }
            // data.order_amount = order_amount;
            var tempHtml = createNewOrderTemp(data);
            $('#js-dynamicDataDiv').html(tempHtml);
            $(".js-empOrderIntial").focus();
            $('.js-createOrderDate').val(moment().format("MM/DD/YYYY H:mm:ss"));
            var count = 0;
            $('#js-createOrderBody tr').each(function() {
                if ($(this).find('input.js-orderPrice').val() > 0) {
                    count = count + parseFloat($(this).find('input.js-orderPrice').val())
                }
            });
            if (count > 0) {
                $('.js-orderTotal').val(count);
                $('.js-order-actions').attr('disabled', false);
            } else {
                $('.js-orderTotal').val('');
            }
            $('.js-addNewOrder').hide();
        }

    });
}

$(document).delegate('.js-changeOrderActions', 'click', function(ev) {
    ev.preventDefault();

    var orderStatus = $(this).attr('data-status');
    var receivedStatus = $(this).attr('data-received_status');
    var changeOrderID = $(this).attr('data-changeOrderID');
    var orderedDate = $(this).attr('data-orderedDateTime');

    var orderedBy = $(this).attr('data-orderBy');
    var total = $(this).attr('data-total');
    var receivedDate = $(this).attr('data-receivedDatetime');
    $('.js-addNewOrder').hide();

    if (orderStatus == 'Order Saved') {
        createOrderBasedOnOrderId(changeOrderID, total, orderedBy, orderedDate);
    } else {
        var dataObj = {};
        dataObj.status = 'Complete';
        dataObj.changeorderId = changeOrderID;
        // debugger;
        $.ajax({
            type: "GET",
            url: apiURL + "/route/check/changeOrderReceived",
            data: dataObj,
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                var data = {
                    denominations: response.response,
                    receivedDetails: response.response[0],
                    totalordered: response.totalordered
                };
                if (receivedStatus == "Complete") {
                    data.status = "Complete";
                }
                data.total = total;
                var errHtml = receivedOrderTemp(data);
                $('#js-dynamicDataDiv').html(errHtml);
                $('.js-receiveOrderIntial').focus();
                $('.js-createOrderDate').val(moment(orderedDate).format("MM/DD/YYYY H:mm:ss"));
                $('.js-empOrderIntial').val(orderedBy);
                if (receivedDate) {
                    $('.js-receivedOrderDate').val(moment(receivedDate).format("MM/DD/YYYY H:mm:ss"));
                } else {
                    $('.js-receivedOrderDate').val(moment().format("MM/DD/YYYY H:mm:ss"));

                }
                if (response.response.length > 0) {
                    if (response.response[0].received_status == 'Complete') {
                        $('.js-receiveOrderIntial').attr('disabled', true);
                        $('.js-receivedEntry').attr('disabled', true);
                        $('.js-receiveOrder-actions').attr('disabled', true);
                    }
                }

                $('.js-receiveOrder-actions').attr('data-changeOrderId', changeOrderID);
            }

        });
    }
});
$(document).delegate('.js-bakeryOrderActions', 'click', function(ev) {
    ev.preventDefault();

    var orderedDate = $(this).attr('data-orderedDateTime');
    var receivedDate = $(this).attr('data-orderedDateTime');
    var deliveryDate = $(this).attr('data-date');
    var dataObj = {};
    dataObj.store_id = userData.store_id;
    dataObj.date = orderedDate;
    // if (moment($('#js-today-date-bakery').val(), 'MMM Do YYYY').isSame(moment(), 'day')) {
    //   var status = 'today';
    // } else {
    //   var status = 'notToday';
    // }
    if (moment().format('YYYY-MM-DD')) {
        var status = 'today';
    } else {
        var status = 'notToday';
    }
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/bakeryOrders",
        data: dataObj,
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            console.log(response.response);

            var data = {
                rows: response.response,
                status: status,
                returnsTotal: 0,
                handsTotal: 0
            };

            for (var i = 0; i < response.response.length; i++) {
                data.returnsTotal += parseInt(response.response[i].return_qty || 0);
                data.handsTotal += parseInt(response.response[i].on_hand_qty || 0);
            }

            var bakeryHtml = bakeryOrderActionsTemp(data);
            $('#js-dynamicDataDiv').html(bakeryHtml);
            $('.js-bakeryDeliveryDate').val(moment(deliveryDate).format("MM/DD/YYYY"));
            $('.js-bakeryReceivedDate').val(moment(receivedDate).format("MM/DD/YYYY H:mm:ss"));
            $($($('.js-bakeryOrdersBody tr')[0]).find("input")[0]).focus()
            console.log(response);
            for (var i = 0; i < response.response.length; i++) {
                if (response.response[i].active == "Complete") {

                    $('.js-bakeryOrdersBody tr').find("input").attr('disabled', true);
                    $('button[data-accType="Save"]').attr('disabled', 'disabled');
                    $('button[data-accType="Complete"]').attr('disabled', 'disabled');

                }

                // else if (response.response[i].active == "Save") {
                //   $('.js-bakeryOrder-actions').attr('disabled', false);
                // }
            }

            // $('#js-today-date-bakery').val(moment(orderedDate).format("MM/DD/YYYY"));
        }
    });
});

$(document).delegate('#js-histery-cardReader', 'click', function(ev) {
    ev.preventDefault();
    getCardreaderTableList();
    // $('#js-histery-cardReader').hide();
});
$(document).delegate('#js-histery-itPayment', 'click', function(ev) {
    ev.preventDefault();
    getItPaymentTableList();
    // $('#js-histery-itPayment').hide();
});
$(document).delegate('#js-histery-gasDip', 'click', function(ev) {
    ev.preventDefault();
    getManualGasDipTableList();
    // $('#js-histery-gasDip').hide();
    $('#js-gasDipreportDiv').show();
});
$(document).delegate('#js-histery-bakery', 'click', function(ev) {
    ev.preventDefault();
    bakeryOrdersTables();

});
$(document).delegate('#js-histery-changeorder', 'click', function(ev) {
    ev.preventDefault();
    getChangeOrderList();

});

// $(document).delegate('#js-endofday-histery-link', 'click', function(ev) {
//   ev.preventDefault();
//   $('#js-contentdiv').hide();
//   $('#js-histerydetailspage').show();
//   $('#js-histerydiv').hide();
//   var store_id = userData.store_id;
//   $.ajax({
//     type: "GET",
//     url: apiURL + "/route/bakery/cashReconHistory",
//     data: {
//       store_id: store_id,
//       type: 'endofday'
//     },
//     contentType: "application/json; charset=utf-8",
//     success: function(response) {
//       if (response.status == "failure") {
//         var errHtml = endhisteryTemp();
//         $('#js-histerydetailspage').html(errHtml);
//       } else if (response.status == "success") {
//         var data = {
//           rows: response.response
//         };
//         var tableHtml = endofDayTemp(data);
//         $('#js-dynamicDataDiv').html(tableHtml);
//
//         $('#example').DataTable({
//           "pagingType": "full_numbers",
//           "searching": false,
//           "order": [
//             [0, "desc"]
//           ]
//         });
//         $('.dataTables_length').hide();
//         $('#example_filter').remove();
//
//       }
//     }
//   });
// $('#js-contentdiv').hide();
// $('#js-histerydetailspage').show();
// $('#js-histerydiv').hide();
// var store_id = userData.store_id;
// $.ajax({
//   type: "GET",
//   url: apiURL + "/route/bakery/cashReconHistory",
//   data: {
//     store_id: store_id,
//   },
//   contentType: "application/json; charset=utf-8",
//   success: function(response) {
//     if (response.status == "failure") {
//       var errHtml = histeryTemp();
//       $('#js-histerydetailspage').html(errHtml);
//     } else if (response.status == "success") {
//       var data = {
//         rows: response.response
//       };
//       var tableHtml = histerTableTemp(data);
//       $('#js-histerydetailspage').html(tableHtml);
//
//       $('#example').DataTable({
//         "pagingType": "full_numbers"
//       });
//       $('.dataTables_length').hide();
//       $('#example_filter').remove();
//
//     }
//   }

// });
// if ($(this).find('a').text() == 'Shift Check-In') {
//   $('.js-addshiftChechIn').show();
// } else if ($(this).find('a').text() == 'End of Day') {
//   $('.js-addendofDay').show();
// }
// format();
//});




$(document).delegate('#js-histery-link', 'click', function(ev) {
    ev.preventDefault();
    $('#js-dynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
    if ($('.js-side-nav li.active a').data('url') == 'endOfDay') {
        var reconType = 'endofday';
    } else if ($('.js-side-nav li.active a').data('url') == 'Check-In') {
        var reconType = 'checkin';
    }
    //$('#js-contentdiv').hide();
    //$('#js-histerydetailspage').show();
    //$('#js-histerydiv').hide();
    var store_id = userData.store_id;
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/cashReconHistory",
        data: {
            store_id: store_id,
            type: reconType,
            'businessDate': moment().format('YYYY-MM-DD')
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.status == "failure") {
                var errHtml = histeryTemp();
                $('#js-histerydetailspage').html(errHtml);
            } else if (response.status == "success") {
                var data = {
                    rows: response.response
                };
                if (reconType == 'checkin') {
                    var tableHtml = histerTableTemp(data);
                } else if (reconType == 'endofday') {
                    var tableHtml = endofDayTemp(data);
                }
                $('#js-dynamicDataDiv').html(tableHtml);

                $('#example').DataTable({
                    "columnDefs": [{
                        "targets": 5,
                        "orderable": false
                    }],
                    "pagingType": "full_numbers",
                    "searching": false,
                    "order": [
                        [0, "desc"]
                    ]
                });
                $('.dataTables_length').hide();
                $('#example_filter').remove();
                if (reconType == 'endofday') {
                    var todayPresence = _.some(response.response, function(c) {
                        return c.bdate == moment(businessDate).format('YYYY-MM-DD')
                    });

                    if (todayPresence) {

                        $('.js-addendofDay').attr('disabled', 'disabled').css('pointer-events', 'none');
                    } else {
                        $('.js-addendofDay').removeAttr('disabled', 'disabled')
                    }
                }
            }
        }
    });
    // $('#js-contentdiv').hide();
    // $('#js-histerydetailspage').show();
    // $('#js-histerydiv').hide();
    // var store_id = userData.store_id;
    // $.ajax({
    //   type: "GET",
    //   url: apiURL + "/route/bakery/cashReconHistory",
    //   data: {
    //     store_id: store_id,
    //   },
    //   contentType: "application/json; charset=utf-8",
    //   success: function(response) {
    //     if (response.status == "failure") {
    //       var errHtml = histeryTemp();
    //       $('#js-histerydetailspage').html(errHtml);
    //     } else if (response.status == "success") {
    //       var data = {
    //         rows: response.response
    //       };
    //       var tableHtml = histerTableTemp(data);
    //       $('#js-histerydetailspage').html(tableHtml);
    //
    //       $('#example').DataTable({
    //         "pagingType": "full_numbers"
    //       });
    //       $('.dataTables_length').hide();
    //       $('#example_filter').remove();
    //
    //     }
    //   }

    // });
    // if ($(this).find('a').text() == 'Shift Check-In') {
    //   $('.js-addshiftChechIn').show();
    // } else if ($(this).find('a').text() == 'End of Day') {
    //   $('.js-addendofDay').show();
    // }
    // format();
});

// $(document).delegate('#js-backtoshiftcheckin', 'click', function(ev) {
//   ev.preventDefault();
//   $('#js-contentdiv').show();
//   $('#js-histerydetailspage').hide();
//   $('#js-histerydiv').show();
// });

$(document).delegate('.js-receivedEntry', 'keyup', function(ev) {
    ev.preventDefault();
    if ($(ev.currentTarget).data('status') !== 'Complete') {
        if (parseInt($(this).val()) % parseInt($(this).attr('step')) != 0 && $(this).val() != "") {
            $(this).parent().addClass('has-error');
        }
    }
    var receivedCount = 0;
    $('.js-receivedOrderBody tr').each(function() {
        if ($(this).find('input.js-receivedEntry').val() != "" && $(this).find('input.js-receivedEntry').val() >= 0) {
            if (parseInt($(this).find('input.js-receivedEntry').val()) % parseInt($(this).find('input.js-receivedEntry').attr('step')) != 0 && parseInt($(this).find('input.js-receivedEntry').val()) > 0) {
                $(this).find('input').closest('tr').addClass('has-error');
            } else {
                $(this).find('input').closest('tr').removeClass('has-error');
                $(this).find('input').parent().removeClass('has-error');
            }
            receivedCount = receivedCount + parseFloat($(this).find('input.js-receivedEntry').val())
        }
    });
    $('.js-receivedTotal').val(receivedCount);
});

$(document).delegate('.js-noShiftData-exit', 'click', function(ev) {
    ev.preventDefault();
    shiftCheckInTables();
});

$(document).delegate('.js-noShiftData-continue', 'click', function(ev) {
    ev.preventDefault();
    //var errHtml = histeryTemp();
    //$('#js-dynamicDataDiv').html(errHtml);
    //$('.js-headingText').html('Cash Reconciliation : Shift Check-In');
    $('#js-dynamicDataDiv').html('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
    var store_id = userData.store_id;
    var date = moment(businessDate).format('YYYY-MM-DD');
    var date1 = moment().format('YYYY-MM-DD HH:mm:ss');
    var newyesturday = moment(businessDate).subtract(1, 'd').format('YYYY-MM-DD');
    $.ajax({
        type: "GET",
        url: apiURL + "/route/bakery/cashreconcontinue",
        data: {
            store_id: store_id,
            date: date,
            mediano: 1,
            today: newyesturday,
        },
        contentType: "application/json; charset=utf-8",
        success: function(response1) {
            response1.response.date = date;
            response1.response.date1 = date1;
            var data = response1.response;
            // var categorizedData = _.groupBy(data.checkin, "eid");
            // var maxEid = Math.max.apply(null, Object.keys(categorizedData));
            // var minEid = Math.min.apply(null, Object.keys(categorizedData));
            // var change_Fund = parseFloat(categorizedData[maxEid].filter(function(p){ return p.stype =='reserve'})[0].value).toFixed(2);
            // var Drops_dropVault = parseFloat(categorizedData[maxEid].filter(function(p){ return p.stype =='drops'})[0].value - categorizedData[minEid].filter(function(p){ return p.stype =='drops'})[0].value);
            // var Drops_courierVault = parseFloat(categorizedData[maxEid].filter(function(p){ return p.stype =='couriertray'})[0].value - categorizedData[minEid].filter(function(p){ return p.stype =='couriertray'})[0].value);
            // var checks = Drops_dropVault.toFixed(2) + Drops_courierVault.toFixed(2) ;
            // var Drops_Acceptor = parseFloat(categorizedData[maxEid].filter(function(p){ return p.stype =='reader'})[0].value - categorizedData[minEid].filter(function(p){ return p.stype =='reader'})[0].value).toFixed(2);
            // if (data.checkin.filter(function (p){return p.stype =='reject'}).length > 0 && data.checkin.filter(function (p){return p.stype =='dispenser'}).length >0 && data.checkin.filter(function (p){return p.stype =='column'}).length > 0){
            //     var topSafe = parseFloat(categorizedData[maxEid].filter(function(p){ return p.stype =='reject'})[0].value + categorizedData[maxEid].filter(function(p){ return p.stype =='dispenser'})[0].value + categorizedData[maxEid].filter(function(p){ return p.stype =='column'})[0].value).toFixed(2);
            // }else {
            //    var topSafe = 0;
            // }
            //
            // data.Top_of_Safe = topSafe;
            // data.Change_Fund =change_Fund;
            // data.Drops = Drops_Acceptor;
            // data.Checks = checks;

            var errHtml = checkInDataTemp(data);
            $('#js-dynamicDataDiv').html(errHtml);
            $("#initialsid").focus();
            $('.js-shiftcheckinsave').attr('data-type', 'checkin');
            $('.js-shiftcheckincomplete').attr('data-type', 'checkin');

            $('.js-shiftcheckinsave').attr('data-insertFlag', 'false');

            if ($('#overorshortid').val() < 0) {
                $('#overorshortid').css('color', 'red');
            }

        }

    });

});


$(document).delegate('.js-receiveOrder-actions', 'click', function(ev) {
    ev.preventDefault();
    var obj = {};
    var total = parseFloat($('.js-receivedOrderBody').attr('data-total'));
    if ($(this).attr('data-accType') == 'Save') {
        obj.receivedStatus = 'Save';
    } else {
        obj.receivedStatus = 'Complete';
    }
    obj.receivedBy = $('.js-receiveOrderIntial').val();
    obj.receivedDate = moment().format('YYYY-MM-DD H:mm:ss');
    obj.changeOrderID = $('.js-receiveOrder-actions').attr('data-changeOrderId');
    var receivedChangeOrder = [];
    var count = 0;
    var redFlagRecv = false;
    $('.js-receivedOrderBody tr').each(function(el, ev) {
        if ($(this).find('input.js-receivedEntry').val() >= 0 && $(this).find('input.js-receivedEntry').val() != '') {

            if (parseInt($(this).find('input.js-receivedEntry').val()) % parseInt($(this).find('input.js-receivedEntry').attr('step')) != 0 && parseInt($(this).find('input.js-receivedEntry').val()) > 0) {
                $(this).find('input').closest('tr').addClass('has-error');
            } else {
                $(this).find('input').closest('tr').removeClass('has-error');
                $(this).find('input').parent().removeClass('has-error');
            }

            var dataObj = {};
            if ($(ev).hasClass('has-error')) {
                redFlagRecv = true;
            }
            dataObj.receivedAmount = $(this).find('input').val();
            count = count + parseFloat($(this).find('input').val());
            if ($(this).find('td').attr('data-currencyId') == "") {
                dataObj.currencyId = 0;
            } else {
                dataObj.currencyId = $(this).find('td').attr('data-currencyId');
            }
            dataObj.currency = $(this).find('td').attr('data-currency');
            if (!redFlagRecv && parseInt(dataObj.receivedAmount) > 0) {
                receivedChangeOrder.push(dataObj);
            }

        }
    });
    obj.receivedChangeOrder = receivedChangeOrder;
    obj.redFlagRecv = redFlagRecv;

    if (count == 0) {
        new PNotify({
            title: 'Error!',
            text: 'Please enter atleast one denomination.',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    }
    if (obj.receivedBy.length > 0 && count > 0) {
        if (obj.redFlagRecv) {
            $('.js-receiveOrder-actions').button('reset');
            new PNotify({
                title: 'Error!',
                text: 'Please change values in red boxes',
                type: 'error',
                styling: 'fontawesome',
                hide: true,
                delay: 2000
            });
        } else {
            if (count != total) {
                $('#js-userConfirmation').modal('show');
                $('#js-user-confirmation-Yes').attr('data-obj', JSON.stringify(obj));
            } else {
                $(this).button('loading');
                saveReceivedOrder(obj);
            }
        }
    } else if (obj.receivedBy.length == 0) {
        new PNotify({
            title: 'Error!',
            text: 'Please enter employee initials.',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    }

});

$(document).delegate('#js-user-confirmation-Yes', 'click', function(ev) {
    ev.preventDefault();
    $('#js-userConfirmation').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    saveReceivedOrder(JSON.parse($(this).attr('data-obj')));
});

$(document).delegate('#js-user-confirmation-no', 'click', function(ev) {
    ev.preventDefault();
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $('.js-receiveOrder-actions').button('reset');
});

function saveReceivedOrder(savedObj) {
    $.ajax({
        type: "POST",
        url: apiURL + "/route/check/changeOrderReceived",
        data: JSON.stringify(savedObj),
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            getChangeOrderList();
        }
    });
}

$(document).delegate('.js-bakeryOrder-actions', 'click', function(ev) {
    ev.preventDefault();
    var dataArray = [];
    var status = $(this).attr('data-accType');

    $('.js-bakeryOrdersBody tr').each(function() {
        if ($(this).find('td input:disabled').length == 0) {
            var dataObj = {};
            dataObj.store_id = userData.store_id;
            dataObj.active = status;
            // dataObj.date = moment(businessDate).format('YYYY-MM-DD');
            var today = moment();
            var tomorrow = moment(today).add(1, 'day');
            dataObj.date = tomorrow.format("YYYY-MM-DD");
            dataObj.descr = $(this).attr('data-name');
            dataObj.ordertime = moment().format('YYYY-MM-DD h:mm:ss');
            if ($(this).attr('data-requests_id') != '' && $(this).attr('data-requests_id') > 0) {
                dataObj.order_id = $(this).attr('data-requests_id');
                dataObj.last_modified = moment(businessDate).format('YYYY-MM-DD');
            } else {
                dataObj.order_id = 0;
            }
            dataObj.id = $(this).attr('data-id');
            dataObj.nbr = $(this).attr('data-nbr');
            dataObj.pick_nbr = $(this).attr('data-pick_nbr');
            dataObj.sku = $(this).attr('data-sku');

            if ($(this).find('input.js-productQtyOnHand').val() != '' && $(this).find('input.js-productQtyOnHand').val() >= 0) {
                dataObj.on_hand_qty = parseInt($(this).find('input.js-productQtyOnHand').val());
            } else {
                dataObj.on_hand_qty = "null"
            }
            if ($(this).find('input.js-productQtyReturn').val() != '' && $(this).find('input.js-productQtyReturn').val() >= 0) {
                dataObj.return_qty = parseInt($(this).find('input.js-productQtyReturn').val());
            } else {
                dataObj.return_qty = "null"
            }
            if (dataObj.on_hand_qty != "null" || dataObj.return_qty != "null") {
                if (dataObj.on_hand_qty >= 0 || dataObj.return_qty >= 0) {
                    if (dataObj.on_hand_qty >= 0 && dataObj.return_qty >= 0) {

                    } else if (dataObj.on_hand_qty == "null" && dataObj.return_qty >= 0) {
                        dataObj.on_hand_qty = 0;
                    } else if (dataObj.on_hand_qty >= 0 && dataObj.return_qty == "null") {
                        dataObj.return_qty = 0;
                    }
                    dataArray.push(dataObj);
                }
            } else {
                if (dataObj.order_id > 0 && dataObj.on_hand_qty == "null" && dataObj.return_qty == "null") {
                    dataArray.push(dataObj);
                }
            }
        }
    });
    if (dataArray.length > 0) {
        $(this).button('loading');
        $.ajax({
            type: "POST",
            url: apiURL + "/route/bakery/bakeryOrders",
            data: JSON.stringify(dataArray),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                console.log(response)
                $('.js-bakeryOrder-actions').button('reset');
                // if (response.status == "success") {
                //
                //   $('.js-bakeryOrdersBody tr').find("input").attr('disabled', true);
                //
                // }
                bakeryOrdersTables();
            }
        });

    } else {
        $('.js-bakeryOrder-actions').button('reset');
        //$('.js-bakeryOrdersBody tr').find("input").attr('disabled', true);
    }
});

$('#js-today-date-bakery').on('dp.change', function(ev) {
    ev.preventDefault();
    if ($('.js-side-nav li.active').find('a').text() == 'Bakery Orders') {
        bakeryOrders();
    }
});


// $('#js-gasDip-reportDate').on('dp.change', function(ev) {
//   ev.preventDefault();
//   $('#js-dynamicDataDiv').html('');
//   $('#js-dynamicDataDiv').append('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
//   if ($('.js-side-nav li.active').find('a').text() == 'Manual Gas Dip Report') {
//     if (moment($('#js-gasDip-reportDate').val(), 'MMM Do YYYY').isSame(moment(), 'day')) {
//       getManualGasDipReportData();
//     } else {
//       $('#js-gasDipreportDiv').show();
//       var store_id = userData.store_id;
//
//       var date = moment($('#js-gasDip-reportDate').val(), 'MMM Do YYYY').format('YYYY-MM-DD');
//       $.ajax({
//         type: "GET",
//         url: apiURL + "/route/bakery/dipReportByDate",
//         data: {
//           store_id: store_id,
//           date: date
//         },
//         contentType: "application/json; charset=utf-8",
//         success: function(response) {
//           if (response.response.length > 0) {
//             var data = {
//               rows: response.response,
//               date: response.response[0].Date,
//               init: response.response[0].init,
//               dipped_yn: parseInt(response.response[0].dipped_yn)
//             };
//
//             var errHtml = manualGasEntryBasedOnDateTemp(data);
//             $('#js-dynamicDataDiv').html(errHtml);
//           } else {
//             $('#js-dynamicDataDiv').html('<h4><p>No entries found for ' + $('#js-gasDip-reportDate').val() + ' </p></h4>');
//           }
//         }
//       });
//     }
//   }
// });
$('#js-changeOrderDate').on('dp.change', function(ev) {
    ev.preventDefault();
    if ($('.js-side-nav li.active').find('a').text() == 'Change Orders') {
        var dataObj = {};
        dataObj.store_id = userData.store_id;
        dataObj.date = moment($('#js-changeOrderDate').val(), 'MMM Do YYYY').format('YYYY-MM-DD');

        $.ajax({
            type: "POST",
            url: apiURL + "/route/check/changeOrderHistory",
            data: JSON.stringify(dataObj),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                var data = {
                    rows: response.response
                };
                var tableHtml = changeOrderTemp(data);
                $('#js-dynamicDataDiv').html(tableHtml);
                $('#example').DataTable({
                    "pagingType": "full_numbers"
                });
                $('.dataTables_length').hide();
                $('#example_filter').remove();
                $('#js-changeOrderDate').val(moment(dataObj.date).format("MMM Do YYYY"));
                $('#js-changeOrderDate').datetimepicker({
                    minDate: moment().subtract(1, 'month').format('MM DD YYYY'),
                    ignoreReadonly: 'true',
                    format: 'MMM Do YYYY',
                    maxDate: moment()
                });
                var dataVal = 0;
                for (var i = 0; i < response.response.length; i++) {
                    if (moment(response.response[i].Date).isSame(moment().toDate(), 'day')) {
                        dataVal++;
                    }
                }
                if (dataVal > 0) {
                    $('.js-addNewOrder').attr('disabled', 'disabled')
                } else {
                    $('.js-addNewOrder').removeAttr('disabled', 'disabled')

                }
            }
        });

    }
});

function empgetIThelpDesk() {
    var data = '';
    var errHtml = empithelpTemplate(data);
    $('#js-dynamicDataDiv').html(errHtml);
    $("#empitotpid").focus();
}


function storeVendorId() {
    $.ajax({
        type: "GET",
        url: apiURL + "/route/auth/storevendorid",
        data: {
            'store_id': userData.store_id
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            store_vendor_id = response.response;
        }
    });
}

function checkVerificationData() {

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
            $('#js-dynamicDataDiv').html(checkData);
            $('#checkexample').DataTable({
                "pagingType": "full_numbers",
                "searching": false,
                "order": [
                    [0, "desc"]
                ]
            });

            $('.dataTables_length').hide();
            $('#example_filter').remove();

        }
    });
}
$(document).delegate('.js-empOPTverify', 'click', function(ev) {
    ev.preventDefault();
    console.log(userData.store_id);
    $.ajax({
        type: "POST",
        url: apiURL + "/route/itAuthentication",
        data: JSON.stringify({
            'otp': $('#empitotpid').val(),
            'status': 'Verified',
            'store_id': userData.store_id
        }),
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            if (response.status == "success") {

                new PNotify({
                    title: 'Success!',
                    text: 'OTP Verified successfully',
                    type: 'success',
                    styling: 'fontawesome',
                    hide: true,
                    delay: 3000
                });
                setTimeout(function() {
                    $('#js-home').trigger('click');
                }, 3000);


            } else {
                new PNotify({
                    title: 'Error',
                    text: 'invalid OTP',
                    type: 'error',
                    styling: 'fontawesome',
                    hide: true,
                    delay: 2000
                });

            }
        }
    });
});
$(document).delegate('#initialsid', 'blur', function(ev) {
    ev.preventDefault();
    var intialvalue = $("#initialsid").val();
    var intial = intialvalue.toUpperCase();
    $("#initialsid").val(intial);
});
$(document).delegate('.js-empIntial', 'blur', function(ev) {
    ev.preventDefault();
    var intialvalue = $(".js-empIntial").val();
    var intial = intialvalue.toUpperCase();
    $(".js-empIntial").val(intial);
});
$(document).delegate('.js-empOrderIntial', 'blur', function(ev) {
    ev.preventDefault();
    var intialvalue = $(".js-empOrderIntial").val();
    var intial = intialvalue.toUpperCase();
    $(".js-empOrderIntial").val(intial);
});
$(document).delegate('.js-receiveOrderIntial', 'blur', function(ev) {
    ev.preventDefault();
    var intialvalue = $(".js-receiveOrderIntial").val();
    var intial = intialvalue.toUpperCase();
    $(".js-receiveOrderIntial").val(intial);
});

$(document).delegate('.js-amount', 'blur', function(ev) {
    ev.preventDefault();
    if (this.value) {
        this.value = parseFloat(this.value).toFixed(2);
    }
});

$(document).delegate('.js-moneyOrderNum', 'blur', function(ev) {
    ev.preventDefault();
    if (this.value && this.value.length != 11) {
        new PNotify({
            title: 'Error',
            text: 'Invalid money order number. Please scan again.',
            type: 'error',
            styling: 'fontawesome',
            hide: true,
            delay: 2000
        });
    }
});

function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}

function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}

function changeBusinessDate() {
    $.blockUI({
        message: 'Loading…'
    });
    $.ajax({
        type: "GET",
        url: apiURL + "/route/auth/businessdate",
        data: {
            "store_id": $.cookie('user').store_id
        },
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            businessDate = response.response.Businessdate;
            //store_vendor_id = response.V_ID.store_vendor_id;
            $('#js-employeePage-title').text('StoreAssist on ' + businessDate);
            $(document).ajaxStop($.unblockUI);
        },
        error: function(request, status, errorThrown) {
            console.log(errorThrown);
        }
    });
}
