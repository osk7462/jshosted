console.log("loading HoverCart")
if (window.jQuery && typeof window.jQuery == "function" && window.jQuery() !== null) {
    loadHoverCart() 
} else {
    (function () {
        const script = document.createElement("script");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
        script.type = 'text/javascript';
        script.addEventListener('load', () => {
            console.log("JQuery is loaded")
            loadHoverCart()
        });
        document.head.appendChild(script);
    })();
}

function loadHoverCart() {
    $(document).ready(function (marketplace) {
        $.ajax({
            url: "https://ipinfo.io/json",
            success: function (data) {
                switch (data.region) {
                    case "Illinois":
                        marketplace = "52a4d104-0875-4fb7-b02e-804c85d79430";
                        break;
                    case "California":
                        marketplace = "52a4d104-0875-4fb7-b02e-804c85d79430";
                        break;
                    default:
                        marketplace = ""
                }
                if (marketplace)
                    $.getScript("https://hovercart.quiverstest.com/?Marketplace=" + marketplace, function () { })
            }
        })
    });
}
