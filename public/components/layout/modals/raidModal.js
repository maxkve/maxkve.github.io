"use strict";
angular.module("epgpApp").controller("raidModalController", function($scope, $mdDialog) {
  this.hide = function() {
    $mdDialog.cancel();
  };
});
