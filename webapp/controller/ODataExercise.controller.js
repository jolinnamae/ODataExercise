sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], (Controller, Filter, FilterOperator, Sorter) => {
    "use strict";

    return Controller.extend("training.odata.odataexercise.controller.ODataExercise", {

        // Initialize the controller
        onInit() {
            var oModel = this.getOwnerComponent().getModel(); // Get the OData model
            this.getView().setModel(oModel); // Set model to the view

            // Apply sorting and filtering to the table on initialization
            this._applySortingAndFiltering();
        },

        // Apply Sorting and Filtering for Products
        _applySortingAndFiltering: function () {
            var oTable = this.byId("productTable"); // Get reference to the table

            // Create a filter to exclude discontinued products
            var oFilter = new Filter({
                path: "Discontinued", // Filter the Discontinued field
                operator: FilterOperator.EQ, // Only show non-discontinued products
                value1: false
            });

            // Create a sorter to sort the products by ProductName
            var oSorter = new Sorter("ProductName", false); // false means ascending order

            // Apply the filter and sorter to the table
            oTable.getBinding("items").filter(oFilter).sort(oSorter);
        }
    });
});
