"use strict";

angular.module("epgpApp").component("heroBanner", {
  bindings: {},
  templateUrl: "public/components/layout/heroBanner/heroBanner.html",
  controller: function($location, $anchorScroll) {
    let ctrl = this;

    ctrl.$onInit = function() {};

    ctrl.$onChanges = function(changes) {};

    ctrl.scrollToNews = function() {
      document.querySelector("#news").scrollIntoView({
        behavior: "smooth"
      });
    };
  }
});
