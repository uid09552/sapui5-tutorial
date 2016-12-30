sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("max.ui.test.controller.MyApp", {
        onShowHello : function () {
            // show a native JavaScript alert
            MessageToast.show("Hello World");
        },
        onInit : function () {
            var oData = {
                recipient: {
                    "name" : "Max"
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});