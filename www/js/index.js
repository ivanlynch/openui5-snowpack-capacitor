var app = {

    appInit: function () {

        sap.ui.getCore().attachInit(function () {
            
            var oCompContainer = new sap.ui.core.ComponentContainer({
                height: "100%"
            })

            new sap.m.Shell({
                app: oCompContainer,
                showLogout: false
            }).placeAt("content");
            var oComponent = sap.ui.component({
                name: "ctx.login",
                manifestFirst: true,
                async: true
            }).then(function (oComponent) {
                oCompContainer.setComponent(oComponent);
            });
        });

        console.log("Inicio la aplicacion");
    },

    appReady: function () {
        $(".app").hide();
        this.appInit();
    },

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        this.appReady();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();