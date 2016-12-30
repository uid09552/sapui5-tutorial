/**
 * Created by Max on 26.10.2016.
 */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("max.ui.test.Component", {
        metadata : {
            //rootView: "max.ui.test.view.MyApp",
            manifest: "json"
        },
        init : function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient : {
                    name : "World from Component"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            var i18nModel = new ResourceModel({
                bundleName : "max.ui.test.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    });
});