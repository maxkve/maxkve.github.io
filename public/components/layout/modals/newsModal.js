"use strict";
angular.module("epgpApp").controller("newsModalController", function($scope, $mdDialog, newsItem) {
  $scope.newsItem = newsItem;
  $scope.newsItemContent = newsItem.content;

  this.hide = function() {
    $mdDialog.cancel();
  };
});
