"use strict";

angular.module("epgpApp").directive("newsItem", function() {
  return {
    restrict: "E",
    replace: false,
    transclude: false,
    scope: {
      newsItem: "="
    },
    templateUrl: "public/components/layout/newsItem.directive.html",
    controller: function($scope) {}
  };
});
