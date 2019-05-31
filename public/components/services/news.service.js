"use strict";

angular.module("epgpApp").service("newsService", function() {
  let news = {
    1: {
      title: "We're recruiting for classic!",
      img: "public/assets/classic.jpg",
      date: "2019-05-29",
      summary: "Interested in joining? Apply and we'll be in touch!",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    },
    2: {
      title: "WoW Classic has been announced!",
      img: "public/assets/wow.jpg",
      date: "2019-05-29",
      summary: "Good times ahead, thanks Omar.",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    },
    3: {
      title: "Discord server online",
      img: "public/assets/discord.jpg",
      date: "2019-05-29",
      summary: "We've launched our Discord server, Controlfreak will be managing it.",
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
