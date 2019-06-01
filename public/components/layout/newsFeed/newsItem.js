"use strict";

angular.module("epgpApp").component("newsItem", {
  bindings: {
    newsItem: "<"
  },
  templateUrl: "public/components/layout/newsFeed/newsItem.html",
  controller: function($mdDialog) {
    let ctrl = this;

    ctrl.$onInit = function() {};

    ctrl.$onChanges = function(changes) {};

    ctrl.openNewsModal = function(newsItem) {
      return $mdDialog
        .show({
          locals: { newsItem: newsItem },
          controller: "newsModalController",
          templateUrl: "public/components/layout/modals/newsModal.html",
          parent: angular.element(document.body),
          clickOutsideToClose: true,
          fullscreen: false
        })
        .then(
          function(result) {
            // Hide
          },
          function() {
            // Cancel
          }
        );
    };
  }
});
