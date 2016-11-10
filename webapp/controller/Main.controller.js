sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.training.controller.Main", {
            
            onInit: function() {
                var oModel = new JSONModel();
                oModel.loadData("json/data.json");
                oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
                this.getView().setModel(oModel);
                
                
                
                /*var oModelNamed = new JSONModel();
                oModelNamed.loadData("json/data.json");
                this.getView().setModel(oModelNamed, "connections");*/
            }
            
	});
});