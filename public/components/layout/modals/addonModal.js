"use strict";
angular.module("epgpApp").controller("addonModalController", function($scope, $mdDialog) {
  this.hide = function() {
    $mdDialog.cancel();
  };
});
