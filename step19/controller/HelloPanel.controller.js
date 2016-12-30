sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("max.ui.test.controller.HelloPanel", {
        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        },
        _getDialog : function () {
            if (!this._oDialog) {
                this._oDialog = sap.ui.xmlfragment("max.ui.test.view.HelloDialog", this);
                this.getView().addDependent(this._oDialog);
            }
            return this._oDialog;
        },
        onOpenDialog : function () {
            this.getOwnerComponent().helloDialog.open(this.getView());
        },
        onCloseDialog : function () {
        this._getDialog().close();
    }
    });
});