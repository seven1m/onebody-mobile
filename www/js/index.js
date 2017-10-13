document.addEventListener('deviceready', function () {
    var browser = null;
    console.log('deviceready called');

    document.querySelector('#connect').addEventListener('click', function (event) {
        event.preventDefault();
        // TODO Error handling
        var server = document.querySelector('#server').value;

        browser = cordova.InAppBrowser.open(server, '_blank', 'location=no,zoom=no,hidden=yes,toolbar=no');
        
        // TODO show a loading spinner
        browser.addEventListener("loadstop", () => {
            browser.show();
        });
    });
});
