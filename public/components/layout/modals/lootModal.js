"use strict";
angular.module("epgpApp").controller("lootModalController", function($scope, $mdDialog) {
  this.hide = function() {
    $mdDialog.cancel();
  };
});
