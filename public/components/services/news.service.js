"use strict";

angular.module("epgpApp").service("newsService", function() {
  let news = {
    1: {
      title: "We're recruiting for classic!",
      img: "public/assets/moltencore.jpg",
      date: "2019-05-29",
      summary: "Interested in joining? Hit the apply-button above!",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    },
    2: {
      title: "WoW Classic has been announced!",
      img: "public/assets/wow.jpg",
      date: "2019-05-29",
      summary: "Yeah yeah, we want it.",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    },
    3: {
      title: "Discord server online",
      img: "public/assets/discord.jpg",
      date: "2019-05-29",
      summary: "Controlfreak just launched our Discord server.",
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
