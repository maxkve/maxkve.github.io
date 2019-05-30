"use strict";

angular.module("epgpApp").component("newsItem", {
  bindings: {
    newsItem: "<"
  },
  templateUrl: "public/components/layout/newsFeed/newsItem.html",
  controller: function($scope) {
    let ctrl = this;

    ctrl.$onInit = function() {};

    ctrl.$onChanges = function(changes) {};
  }
});
