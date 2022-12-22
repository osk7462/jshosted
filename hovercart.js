console.log("hovercart is loaded")
$(document).ready(function (marketplace) {
        $.ajax({
            url: "https://ipinfo.io/json",
            success: function (data) {
                if (data.region == "California") {
                    marketplace = "52a4d104-0875-4fb7-b02e-804c85d79430"; 
                    console.log(marketplace)
                    $.getScript("https://hovercart.quiverstest.com/?Marketplace=" + marketplace, function () { })
                }
            }
        });
});

//<script src="https://cdn.jsdelivr.net/gh/osk7462/jshosted/hovercart.js"></script>
