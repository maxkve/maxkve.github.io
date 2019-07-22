"use strict";

angular.module("epgpApp").component("newsFeed", {
  bindings: {},
  templateUrl: "public/components/layout/newsFeed/newsFeed.html",
  controller: function(newsService) {
    let ctrl = this;

    ctrl.selectTag = function(selectedTag) {
      ctrl.selectedTag = selectedTag;
    };

    ctrl.$onInit = function() {
      ctrl.news = newsService.getNews();
    };

    ctrl.$onChanges = function(changes) {};
  }
});
