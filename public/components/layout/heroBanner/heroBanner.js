"use strict";

angular.module("epgpApp").component("heroBanner", {
  bindings: {},
  templateUrl: "public/components/layout/heroBanner/heroBanner.html",
  controller: function ($mdDialog, newsService) {
    let ctrl = this;

    let news = newsService.getNewsReadOnly();
    ctrl.newsItem = news[news.length - 1];
    if (ctrl.newsItem.summary.slice(-1) === ".") {
      // Remove trailing dot
      ctrl.newsItem.summary = ctrl.newsItem.summary.substring(0, ctrl.newsItem.summary.length - 1);
    }

    ctrl.$onInit = function () {};

    ctrl.$onChanges = function (changes) {};

    ctrl.scrollToNews = function () {
      document.querySelector("#news").scrollIntoView({
        behavior: "smooth",
      });
    };

    ctrl.openNewsModal = function (newsItem) {
      return $mdDialog
        .show({
          locals: { newsItem: newsItem },
          controller: "newsModalController",
          templateUrl: "public/components/layout/modals/newsModal.html",
          parent: angular.element(document.body),
          clickOutsideToClose: true,
          fullscreen: false,
        })
        .then(
          function (result) {
            // Hide
          },
          function () {
            // Cancel
          }
        );
    };
  },
});
