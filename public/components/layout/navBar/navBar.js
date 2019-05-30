"use strict";

angular.module("epgpApp").component("navBar", {
  bindings: {},
  templateUrl: "public/components/layout/navBar/navBar.html",
  controller: function($scope, $mdDialog) {
    let ctrl = this;

    ctrl.$onInit = function() {};

    ctrl.$onChanges = function(changes) {};

    ctrl.openOrganizationModal = function() {
      return $mdDialog
        .show({
          controller: "organizationModalController",
          templateUrl: "public/components/layout/modals/organizationModal.html",
          parent: angular.element(document.body),
          clickOutsideToClose: true,
          fullscreen: false
        })
        .then(
          function(result) {
            // Hide
          },
          function() {
            // Cancel
          }
        );
    };
  }
});
