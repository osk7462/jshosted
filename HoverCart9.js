window.addEventListener("load", () => {
    console.log("jquery version", window.jQuery().jquery)
    if (window.jQuery && typeof window.jQuery == "function" && window.jQuery() !== null) {
        var vernums = window.jQuery().jquery.split('.');
        var currentVersion = window.jQuery().jquery;
    }
    if (typeof vernums !== "undefined" && typeof currentVersion !== "undefined" && window.jQuery && (currentVersion == "1.9.1" || (parseInt(vernums[0]) >= 1 && (parseInt(vernums[0]) > 1 || parseInt(vernums[1]) >= 9) && (parseInt(vernums[0]) > 1 || (parseInt(vernums[0]) == 1 && parseInt(vernums[1]) > 9) || parseInt(vernums[2]) > 1)))) {
        if (typeof $ == "function" && typeof $() !== "undefined" && $() !== null && typeof $().jquery !== "undefined") {
            console.log("jquery version: ", window.jQuery().jquery)
            $ = window.jQuery;
            loadHoverCart();
        }
    } else {
        (function () {
            const script = document.createElement("script");
            script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
            script.type = 'text/javascript';
            document.head.appendChild(script);
            script.addEventListener('load', () => {
                loadHoverCart();
            });
        })();
    }
});


function loadHoverCart() {
    $(document).ready(function (marketplace) {
        marketplace = window.sessionStorage.getItem("marketplace")
        if (marketplace) {
            console.log("marketplace id from session", marketplace)
            $.getScript("https://hovercart.quiverstest.com/?Marketplace=" + marketplace, function () { });
        } else {
            console.log("marketplace is not in session")
            $.ajax({
                url: "https://ipinfo.io/json",
                success: function (data) {
                    switch (data.region) {
                        case "California":
                            marketplace = "52a4d104-0875-4fb7-b02e-804c85d79430";
                            break;
                        default:
                            marketplace = "";
                    }
                    if (marketplace) {
                        console.log("saving marketplace in storage")
                        window.sessionStorage.setItem("marketplace", marketplace)
                        $.getScript("https://hovercart.quiverstest.com/?Marketplace=" + marketplace, function () { });
                    }
                }
            });
        }
    });
}
