"use strict";

angular.module("epgpApp").service("newsService", function() {
  let news = {
    0: {
      title: "We're recruiting for classic!",
      img: "public/assets/classic.jpg",
      date: "2019-05-29",
      summary: "Click here to read more or hit the apply-button above!",
      content:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
    },
    1: {
      title: "Player Introduction: Vector",
      img: "public/assets/news/vector2.jpg",
      date: "2019-06-01",
      summary: "Learn more about your Guild Master in this short introductory piece.",
      content:
        "Hello, Vector here, Guild Master (and Webmaster) of Standard Procedure. I'm a 28-year old UX-designer from Sweden who's been a WoW-player since late vanilla. I'm incredibly excited for Classic, very much looking forward to going back to Azeroth again. I'm currently not playing retail, although I did play up to...Legion, I think.<br><br>Back in Vanilla I used to play a gnome Mage named my first name + my surname, because apparently I wasn't big on the whole privacy thing back then. I didn't raid much at the time, just some MC and ZG, but the raids are something I'm looking forward to a lot this time around. Don't worry, I won't be leading you guys during raids, we have a bunch of very experienced raid leaders who will be taking care of that. Beyond that, I'm looking forward to enjoying the leveling experience again, the zones, the sense of community and the feeling of a connected world.<br><br>I can't wait to see you all in-game."
    }
  };

  this.getNewsReadOnly = function() {
    return angular.copy(news);
  };

  this.getNews = function() {
    return news;
  };
});
