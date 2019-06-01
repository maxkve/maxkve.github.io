"use strict";
angular.module("epgpApp").controller("newsModalController", function($scope, $mdDialog, newsItem) {
  $scope.newsItem = newsItem;

  this.hide = function() {
    $mdDialog.cancel();
  };
});
