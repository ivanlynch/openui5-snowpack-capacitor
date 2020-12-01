sap.ui.define([
	"sap/ui/core/UIComponent",
	"ctx/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, BaseController, JSONModel) {
	"use strict";

	return UIComponent.extend("ctx.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}
	});

});