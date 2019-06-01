"use strict";

angular.module("epgpApp").service("newsService", function() {
  let news = {
    1: {
      title: "We're recruiting for classic!",
      img: "public/assets/classic.jpg",
      date: "2019-05-29",
      summary: "Click here to read more or hit the apply-button above!",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    }
  };

  this.getNewsReadOnly = function() {
    return angular.copy(news);
  };

  this.getNews = function() {
    return news;
  };
});
