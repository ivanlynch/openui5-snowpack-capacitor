sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ctx.controller.Home", {
		onInit : function () {

			const oImage = sap.ui.require.toUrl("ctx/img/img.jpeg");

			this.getView().setModel(new JSONModel({
				image: oImage
			}));
		}
	});
});