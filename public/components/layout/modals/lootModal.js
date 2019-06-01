"use strict";
angular.module("epgpApp").controller("lootModalController", function($mdDialog) {
  this.hide = function() {
    $mdDialog.cancel();
  };
});
