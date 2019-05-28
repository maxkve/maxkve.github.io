"use strict";

angular.module("epgpApp").directive("heroBanner", function() {
  return {
    restrict: "E",
    replace: false,
    transclude: false,
    scope: {},
    templateUrl: "public/components/layout/heroBanner.directive.html",
    controller: function($scope) {}
  };
});
