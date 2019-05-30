"use strict";
angular.module("epgpApp").controller("organizationModalController", function($scope, $mdDialog, roleService) {
  $scope.roles = roleService.getRoles();

  this.hide = function() {
    $mdDialog.cancel();
  };
});
