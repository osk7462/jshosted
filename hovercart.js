console.log("hovercart is loaded")
$(document).ready(function (marketplace) {
        $.ajax({
            url: "https://ipinfo.io/json",
            success: function (data) {
                if (data.region == "California") {
                    marketplace = "49699297-b2f7-418b-9f51-de15ff091009";
                    $.getScript("https://hovercart.quivers.com/?Marketplace=" + marketplace, function () { })
                }
            }
        });
});
