"use strict";
angular.module("epgpApp").controller("raidModalController", function($scope, $mdDialog, raidService) {
  $scope.raids = raidService.getRaids();

  this.hide = function() {
    $mdDialog.cancel();
  };
});
