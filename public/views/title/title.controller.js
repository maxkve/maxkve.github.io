"use strict";

angular.module("epgpApp").controller("titleController", function($scope, newsService) {
  $scope.news = newsService.getNews();
});
