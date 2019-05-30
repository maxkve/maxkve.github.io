"use strict";
angular.module("epgpApp").controller("rosterModalController", function($scope, $mdDialog) {
  this.hide = function() {
    $mdDialog.cancel();
  };
});
