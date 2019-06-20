"use strict";
angular.module("epgpApp").controller("rosterModalController", function($scope, $mdDialog, rosterService) {
  this.hide = function() {
    $mdDialog.cancel();
  };

  $scope.roster = rosterService.getRoster();

  $scope.druidCount = rosterService.getClassCount("Druid");
  $scope.hunterCount = rosterService.getClassCount("Hunter");
  $scope.mageCount = rosterService.getClassCount("Mage");
  $scope.paladinCount = rosterService.getClassCount("Paladin");
  $scope.priestCount = rosterService.getClassCount("Priest");
  $scope.rogueCount = rosterService.getClassCount("Rogue");
  $scope.warriorCount = rosterService.getClassCount("Warrior");
});
