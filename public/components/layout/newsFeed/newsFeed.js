"use strict";

angular.module("epgpApp").component("newsFeed", {
  bindings: {},
  templateUrl: "public/components/layout/newsFeed/newsFeed.html",
  controller: function(newsService) {
    let ctrl = this;

    ctrl.$onInit = function() {
      ctrl.news = newsService.getNews();
    };

    ctrl.$onChanges = function(changes) {};
  }
});
