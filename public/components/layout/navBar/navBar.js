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
    ctrl.openLootModal = function() {
      return $mdDialog
        .show({
          controller: "lootModalController",
          templateUrl: "public/components/layout/modals/lootModal.html",
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
    ctrl.openRaidModal = function() {
      return $mdDialog
        .show({
          controller: "raidModalController",
          templateUrl: "public/components/layout/modals/raidModal.html",
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
    ctrl.openRosterModal = function() {
      return $mdDialog
        .show({
          controller: "rosterModalController",
          templateUrl: "public/components/layout/modals/rosterModal.html",
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
