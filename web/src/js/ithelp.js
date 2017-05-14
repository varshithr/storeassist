var userData = '';
$(document).ready(function() {

    ithelpdeskTemplate = MyApp.templates.ithelpdesk;

    $('#js-dynamicDataDivdesk').html('');
    $('#js-dynamicDataDivdesk').append('<div class="col-lg-offset-5 dots-loader spinner-div-style" style="margin-top:20%; margin-left: 50%">Loading…</div>');
    getOPTdesk();
    $.ajax({
        type: "GET",
        url: apiURL + "/route/itAuthentication",
        contentType: "application/json; charset=utf-8",
        success: function(response) {

            if (response.status == "success") {
                var otp = response.response.otp
                var data = response.response;
                var errHtml = ithelpdeskTemplate(data);
                $('#js-dynamicDataDivdesk').html(errHtml);

                $('#messageOTP').val(otp);
                setInterval(function(){
                  $.ajax({
                      type: "GET",
                      url: apiURL + "/route/itAuthentication",
                      contentType: "application/json; charset=utf-8",
                      success: function(response) {

                          if (response.status == "success") {
                              var otp = response.response.otp
                              var data = response.response;
                              var errHtml = ithelpdeskTemplate(data);
                              $('#js-dynamicDataDivdesk').html(errHtml);

                              $('#messageOTP').val(otp);
                          }

                      }
                  });

                },40000);
            }


        }
    });

});

function getOPTdesk() {
    var data = '';
    var errHtml = ithelpdeskTemplate(data);
    $('#js-dynamicDataDivdesk').html(errHtml);
}
