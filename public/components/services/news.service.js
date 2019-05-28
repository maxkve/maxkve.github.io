"use strict";

angular.module("epgpApp").service("newsService", function() {
  let news = {
    1: {
      title: "Sanctuary progressing in MC!",
      img: "public/assets/moltencore.jpg",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    },
    2: {
      title: "Sanctuary progressing in MC!",
      img: "public/assets/moltencore.jpg",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    },
    3: {
      title: "Sanctuary progressing in MC!",
      img: "public/assets/moltencore.jpg",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    },
    4: {
      title: "Sanctuary progressing in MC!",
      img: "public/assets/moltencore.jpg",
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
