sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("max.ui.test.controller.MyApp", {
        onShowHello : function () {
            // show a native JavaScript alert
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        },
        onInit : function () {
            var oData = {
                recipient: {
                    "name" : "Max"
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            var i18nModel = new ResourceModel({
               bundleName: "max.ui.test.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        }
    });
});