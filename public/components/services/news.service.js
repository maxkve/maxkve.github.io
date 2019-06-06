"use strict";

angular.module("epgpApp").service("newsService", function() {
  let news = {
    0: {
      title: "We're recruiting for Classic!",
      img: "public/assets/classic.jpg",
      date: "2019-05-29",
      summary: "Click here to read more!",
      content:
        "Standard Procedure is a PvE-oriented european guild looking for mature and friendly people for Classic. We're aiming for a semi-casual atmosphere and a stable and structured community. Please check out Organization above for information on how the guild is organized, Raids and Loot Rules for details on raiding, and Roster to see who's already on the team. Sounds good? Apply using our Google form and we'll be in touch!<br><br><a href='https://docs.google.com/forms/d/e/1FAIpQLSfqn8qNK1cxgCPWJ7cuB092Kj_JDqVgDYpMMHR8Bjy825pW0w/viewform' target='_blank'>Click here to apply!</a>"
    },
    1: {
      title: "Player Introduction: Vector",
      img: "public/assets/news/vector2.jpg",
      date: "2019-06-01",
      summary: "Learn more about your Guild Master in this short introductory piece.",
      content:
        "Hello, Vector here, Guild Master (and Webmaster) of Standard Procedure. I'm a 28-year old UX-designer from Sweden who's been a WoW-player since late vanilla. I'm incredibly excited for Classic, very much looking forward to going back to Azeroth again. I'm currently not playing retail, although I did play up to...Legion, I think.<br><br>Back in Vanilla I used to play a gnome Mage named my first name + my surname, because apparently I wasn't big on the whole privacy thing back then. I didn't raid much at the time, just some MC and ZG, but the raids are something I'm looking forward to a lot this time around. Don't worry, I won't be leading you guys during raids, we have a bunch of very experienced raid leaders who will be taking care of that. Beyond that, I'm looking forward to enjoying the leveling experience again, the zones, the sense of community and the feeling of a connected world.<br><br>I can't wait to see you all in-game."
    },
    2: {
      title: "Player Introduction: Zorn",
      img: "public/assets/wow.jpg",
      date: "2019-06-04",
      summary: "Learn more about Zorn, Raid Leader and Off-tank, in this short introductory piece.",
      content:
        "Hello, I'm Zorn. Your Raid Leader and Off-tank by night, 31-year old Banker from Sweden by day. I've been an avid player of WoW since the original Beta back in 2004. I've played every expansion up to Legion (BFA being the first one I havent played on release).<br><br>I created my first character back in the Beta, a Human Warrior, and have had him as my main ever since. I raided quite hardcore in both Vanilla and TBC, reaching 4-Horsemen before the dreaded 2.0 patch tore our raid to pieces. I have a lot of experience as a Raid-Leader and Main Tank through all of Vanillas content, that being said I'm open to new ideas and tactics!<br><br>I'm really looking forward to experience all that Classic has to offer with all of you!"
    }
  };

  this.getNewsReadOnly = function() {
    return angular.copy(news);
  };

  this.getNews = function() {
    return news;
  };
});
