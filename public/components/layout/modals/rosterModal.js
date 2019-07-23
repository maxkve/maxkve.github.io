"use strict";
angular.module("epgpApp").controller("rosterModalController", function($scope, $mdDialog, rosterService) {
  this.hide = function() {
    $mdDialog.cancel();
  };

  $scope.roster = rosterService.getRoster();

  $scope.druidCount = rosterService.getRaiderClassCount("Druid");
  $scope.hunterCount = rosterService.getRaiderClassCount("Hunter");
  $scope.mageCount = rosterService.getRaiderClassCount("Mage");
  $scope.paladinCount = rosterService.getRaiderClassCount("Paladin");
  $scope.priestCount = rosterService.getRaiderClassCount("Priest");
  $scope.rogueCount = rosterService.getRaiderClassCount("Rogue");
  $scope.warlockCount = rosterService.getRaiderClassCount("Warlock");
  $scope.warriorCount = rosterService.getRaiderClassCount("Warrior");
  $scope.raiderCount = rosterService.getRaiderCount();
});
