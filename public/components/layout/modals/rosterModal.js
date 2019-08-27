"use strict";
angular.module("epgpApp").controller("rosterModalController", function($scope, $mdDialog, rosterService) {
  this.hide = function() {
    $mdDialog.cancel();
  };

  $scope.roster = rosterService.getRoster();

  $scope.druidCount = rosterService.getRaiderClassCount("druid");
  $scope.hunterCount = rosterService.getRaiderClassCount("hunter");
  $scope.mageCount = rosterService.getRaiderClassCount("mage");
  $scope.paladinCount = rosterService.getRaiderClassCount("paladin");
  $scope.priestCount = rosterService.getRaiderClassCount("priest");
  $scope.rogueCount = rosterService.getRaiderClassCount("rogue");
  $scope.warlockCount = rosterService.getRaiderClassCount("warlock");
  $scope.warriorCount = rosterService.getRaiderClassCount("warrior");
  $scope.raiderCount = rosterService.getRaiderCount();
});
