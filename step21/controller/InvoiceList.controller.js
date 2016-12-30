sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "max/ui/test/model/formatter"
], function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("max.ui.test.controller.InvoiceList", {
        formatter: formatter,
        onInit : function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        }

    });
});