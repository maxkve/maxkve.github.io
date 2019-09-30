"use strict";

angular.module("epgpApp").component("heroBanner", {
  bindings: {},
  templateUrl: "public/components/layout/heroBanner/heroBanner.html",
  controller: function(newsService) {
    let ctrl = this;

    let news = newsService.getNewsReadOnly();
    ctrl.newsItem = news[news.length - 1];
    ctrl.newsItem.summary = ctrl.newsItem.summary.substring(0, ctrl.newsItem.summary.length - 1);

    ctrl.$onInit = function() {};

    ctrl.$onChanges = function(changes) {};

    ctrl.scrollToNews = function() {
      document.querySelector("#news").scrollIntoView({
        behavior: "smooth"
      });
    };
  }
});
