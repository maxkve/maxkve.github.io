"use strict";

angular.module("epgpApp").directive("newsFeed", function() {
  return {
    restrict: "E",
    replace: false,
    transclude: false,
    scope: {
      news: "="
    },
    templateUrl: "public/components/layout/newsFeed.directive.html",
    controller: function($scope) {}
  };
});
