sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("max.ui.test.controller.MyApp", {
        onOpenDialog : function () {
            this.getOwnerComponent().helloDialog.open(this.getView());
        }
    });
});