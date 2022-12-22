console.log("hovercart is loaded")
if ('undefined' === typeof jQuery){
  (function() {
  const script = document.createElement("script");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
  script.type = 'text/javascript';
  script.addEventListener('load', () => {
    console.log(`jQuery ${$.fn.jquery} has been loaded successfully!`);
    // use jQuery below
  });
  document.head.appendChild(script);
})();
}

$(document).ready(function (marketplace) {
        $.ajax({
            url: "https://ipinfo.io/json",
            success: function (data) {
                    console.log(data)
                if (data.region == "Illinois") {
                    marketplace = "52a4d104-0875-4fb7-b02e-804c85d79430"; 
                    console.log(marketplace)
                    $.getScript("https://hovercart.quiverstest.com/?Marketplace=" + marketplace, function () { })
                }
            }
        });
});
