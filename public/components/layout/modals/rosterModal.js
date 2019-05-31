"use strict";
angular.module("epgpApp").controller("rosterModalController", function($scope, $mdDialog, rosterService) {
  this.hide = function() {
    $mdDialog.cancel();
  };

  $scope.roster = rosterService.getRoster();
});
