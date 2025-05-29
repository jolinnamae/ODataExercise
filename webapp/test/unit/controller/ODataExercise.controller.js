/*global QUnit*/

sap.ui.define([
	"training/odata/odataexercise/controller/ODataExercise.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ODataExercise Controller");

	QUnit.test("I should test the ODataExercise controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
