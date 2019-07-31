"use strict";

angular.module("epgpApp").component("newsFeed", {
  bindings: {},
  templateUrl: "public/components/layout/newsFeed/newsFeed.html",
  controller: function(newsService, $filter) {
    let ctrl = this;
    let news = [];
    ctrl.activePageIndex = 0;
    ctrl.numberOfPages = 0;
    ctrl.newsViewModel = {};
    ctrl.pagesViewModel = [];

    function buildNewsViewModel(tag) {
      let filteredNews = $filter("filter")(news, { tags: tag }).reverse();
      ctrl.pagesViewModel = [];
      ctrl.numberOfPages = Math.ceil(filteredNews.length / 6);
      for (let i = 0; i < ctrl.numberOfPages; i++) {
        let startIndex = i * 6;
        let stopIndex = (i + 1) * 6;
        ctrl.pagesViewModel.push(i + 1);
        ctrl.newsViewModel[i] = filteredNews.slice(startIndex, stopIndex);
      }
      ctrl.pagesViewModel.reverse();
    }

    ctrl.olderNews = function() {
      if (ctrl.activePageIndex != ctrl.numberOfPages - 1) {
        ctrl.activePageIndex += 1;
      }
    };

    ctrl.newerNews = function() {
      if (ctrl.activePageIndex > 0) {
        ctrl.activePageIndex -= 1;
      }
    };

    ctrl.selectTag = function(selectedTag) {
      ctrl.activePageIndex = 0;
      buildNewsViewModel(selectedTag);
    };

    ctrl.$onInit = function() {
      news = newsService.getNewsReadOnly();
      buildNewsViewModel("");
    };

    ctrl.$onChanges = function(changes) {};
  }
});
