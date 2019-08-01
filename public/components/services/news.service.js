"use strict";

angular.module("epgpApp").service("newsService", function() {
  let news = [
    {
      title: "We're recruiting for Classic!",
      img: "classic.jpg",
      date: "2019-05-29",
      tags: ["Announcement"],
      summary: "Click here to read more!",
      content:
        "Standard Procedure is a PvE-oriented european guild looking for mature and friendly people for Classic. We're aiming for a semi-casual atmosphere and a stable and structured community. Please check out Organization above for information on how the guild is organized, Raids and Loot Rules for details on raiding, and Roster to see who's already on the team. Sounds good? Apply using our Google form and we'll be in touch!<br><br><a href='https://docs.google.com/forms/d/e/1FAIpQLSfqn8qNK1cxgCPWJ7cuB092Kj_JDqVgDYpMMHR8Bjy825pW0w/viewform' target='_blank'>Click here to apply!</a>"
    },
    {
      title: "Player Introduction: Combobreaker",
      img: "vector2.jpg",
      date: "2019-06-01",
      tags: ["Player Introduction"],
      summary: "Learn more about your Guild Master in this short introductory piece.",
      content:
        "Hello, Combobreaker here, Guild Master (and Webmaster) of Standard Procedure. I'm a 28-year old UX-designer from Sweden who's been a WoW-player since late vanilla. I'm incredibly excited for Classic, very much looking forward to going back to Azeroth again. I'm currently not playing retail, although I did play up to...Legion, I think.<br><br>Back in Vanilla I used to play a gnome Mage named my first name + my surname, because apparently I wasn't big on the whole privacy thing back then. I didn't raid much at the time, just some MC and ZG, but the raids are something I'm looking forward to a lot this time around. Don't worry, I won't be leading you guys during raids, we have a bunch of very experienced raid leaders who will be taking care of that. Beyond that, I'm looking forward to enjoying the leveling experience again, the zones, the sense of community and the feeling of a connected world.<br><br>I can't wait to see you all in-game."
    },
    {
      title: "Player Introduction: Zorn",
      img: "zorn.jpg",
      date: "2019-06-04",
      tags: ["Player Introduction"],
      summary: "Learn more about Zorn, Raid Leader and Off-tank, in this short introductory piece.",
      content:
        "Hello, I'm Zorn. Your Raid Leader and Off-tank by night, 31-year old Banker from Sweden by day. I've been an avid player of WoW since the original Beta back in 2004. I've played every expansion up to Legion (BFA being the first one I havent played on release).<br><br>I created my first character back in the Beta, a Human Warrior, and have had him as my main ever since. I raided quite hardcore in both Vanilla and TBC, reaching 4-Horsemen before the dreaded 2.0 patch tore our raid to pieces. I have a lot of experience as a Raid-Leader and Main Tank through all of Vanillas content, that being said I'm open to new ideas and tactics!<br><br>I'm really looking forward to experience all that Classic has to offer with all of you!"
    },
    {
      title: "Zorn appears on Countdown to Classic",
      img: "countdowntoclassic.jpg",
      date: "2019-07-03",
      tags: ["Announcement"],
      summary: "Zorn talks Thunderfury on episode #111 of Countdown to Classic.",
      content:
        "Zorn recently appeared on episode #111 of Countdown to Classic where he spoke at length about Thunderfury, its state pre- and post-nerf, its role in tanking, if any other classes were eligible to receive it (sorry Hunters), and much more.<br><br>You can listen to the podcast on Josh's website here: <a href='https://countdowntoclassic.com/2019/07/03/episode-111-thunderfury-dr-lupo-on-wow-classic-streaming-a-listener-reply-to-world-buffs-eu-server-mayhem-the-making-of-wailing-caverns/' target='_blank'>Countdown to Classic</a>"
    },
    {
      title: "Player Introduction: Ohhstar",
      img: "ohhstar.jpg",
      date: "2019-07-21",
      tags: ["Player Introduction"],
      summary: "Learn more about Ohhstar, Loot Manager and Crafter, in this short introductory piece.",
      content:
        "Hey there! My name is Kajsa, I’m 29 years old and from Sweden. I work as a landlord in the weekdays and in the weekends I’m spending my time with my dog and my partner. Playing golf, board games, being in the nature and ofc being in front of the computer.<br><br>I have been playing world of Warcraft since the release of TBC. I’ve always been a big fan of raiding, and a bit of a farming geek. One of my main goals was to get all the mounts and pets that were in the game. My absolute favorite mounts were The Amani War Bear from ZA and Anzu from Sethekk Halls. When WotLK came, I fore sure were going to go for the Time Lost Protodrake!<br>I stayed in Stormpeaks, spamming the macro day and night, and after a while it came flying above me. So...of course I have “Time Lost” as well...<br><br>The last time I played on retail, I played up to legion then I felt that the game had changed too much and it wasn’t a game for me anymore. Not only for all the thousands of mounts and pets you could get that easily, but also for the community that had changed too much.<br>When I heard that classic was coming, there were no doubts that me and my friends were going to play. When I started in TBC my first character was a Druid named Ohhstar. I’ve had some alternative characters that I played on, and mage was always one of my favorite classes. So this time - I’ll be casting frostbolts!"
    },
    {
      title: "Initial recruitment drive finished",
      img: "recruit.jpg",
      date: "2019-07-21",
      tags: ["Announcement"],
      summary: "We've finished our initial general recruitment drive, but still need some specific roles.",
      content:
        "We're happy to announce that our initial general recruitment drive has finished. Thank you to those who applied, and welcome to those who were accepted. We're very excited about all the fine people we've managed to attract, and we're looking forward to getting to know you all. With that said, we're still looking for a couple of specific roles to top out the roster:<ul><li>1 Fury Warrior</li><li>2 Rogues</li><li>2 Mages</li></ul><a href='https://docs.google.com/forms/d/e/1FAIpQLSfqn8qNK1cxgCPWJ7cuB092Kj_JDqVgDYpMMHR8Bjy825pW0w/viewform' target='_blank'>Click here to apply!</a>"
    },
    {
      title: "Player Introduction: Growgor",
      img: "growgor.jpg",
      date: "2019-07-31",
      tags: ["Player Introduction"],
      summary: "Learn more about Growgor, 3D-artist by day and Rogue by night, in this short introductory piece.",
      content:
        "Hey everyone! My name is Nicolaj, I'm 32 years of age and I'm from central part Denmark, where I live together with my wife and our dog.<br><br>I work as a 3d artist in the architectural visualization industry, and have done so for over ten years now. When I'm not sitting in front of my computer and working or playing games, I'm usually found outside spending time on some of my countless hobbies, such as bow hunting, spear fishing, hiking, bushcrafting, or crafting stuff in my little workshop.<br><br>I've played World of Warcraft ever since the very first release day, and it has been my undisputed favorite game ever since. That said, after Burning Crusade and especially Wrath of the Lich King, it all went downhill from there, and shortly after Cataclysm I stopped playing the game. I did drop by in every expansion though, but only to be disappointed.<br><br>I'm very much looking forward to relive the glorious days of vanilla, and I'm excited to step in and clear especially Naxxramas, since I didn't get to clear that back in the days.<br><br>See you all in Azeroth!"
    },
    {
      title: "Player Introduction: Froeen",
      img: "froeen.jpg",
      date: "2019-07-31",
      tags: ["Player Introduction"],
      summary: "Learn more about Froeen, boardgame enthusiast and future economic powerhouse, in this short introductory piece.",
      content:
        "Hey! I'm Froeen from Denmark. I am 26 years old and I work as a marketing specialist in a startup within music, which is a lot of fun. When I'm not eagerly waiting classic wow launch I play board games like Rising Sun, Time Stories, 7th Continent, Gloomhaven and Star Wars Imperial Assault as well as hanging out with my friends and wife or playing Crash Team Racing on my playstation.<br><br>I have played WoW since week 1 of TBC so unfortunately I'm not a vanilla player. My favorite expansion (so far) is TBC and I can't wait to get back to the game that I love. <br><br>I have raided in TBC, WOTLK, skipped Cata, raided again in MOP and skipped WoD and then played PvP in Legion. I was a raidleader in MOP where we were the best guild on our server's faction, and getting all the ahead of the curve achievements, which is my best memories with WoW. <br><br>I love the social aspect of WoW and I love making tons of gold as well, so if you need a loan you can come to me :-D"
    },
    {
      title: "Player Introduction: Allistair",
      img: "classic.jpg",
      date: "2019-08-01",
      tags: ["Player Introduction"],
      summary: "Learn more about Allistair, soon-to-be first time WoW-player, in this short introductory piece.",
      content:
        "Hi everyone, I'm Andrea your friendly Italian neighbor. I'm 27 years old and I work for a small Italian company here in Stockholm. I moved to Sweden in 2016, it was a hard change to my lifestyle but that was the whole point. To challenge myself.<br><br>I play video games since I was 6, starting with ps1 and then at the age of 11 I got my first pc. I play in particular RTS from AoE to warcraft 3. I never played WoW and the reason is kind of funny: back in 2004 there was no internet in my home town, can you imagine that? So when I saw that classic would be released I jumped in immediately.<br><br>In game I'm a very competitive guy, I don't like to be second to none. But don't worry I'm still a nice and friendly person.<br><br>Can't wait to play with you all. FOR THE ALLIANCE!"
    },
    {
      title: "Player Introduction: Somedaymaybe",
      img: "somedaymaybe.jpg",
      date: "2019-08-01",
      tags: ["Player Introduction"],
      summary: "Learn more about Somedaymaybe, TBC-fanatic and avid PvPer, in this short introductory piece.",
      content:
        "Greetings!<br><br>My name is Anton and I am 26 years old, currently living in Hälsingland, Sweden.<br><br>I started playing World of Warcraft late 2006 and played throughout The Burning Crusade expansion and loved it but quit once Wrath of the Lich King came around. After that I started playing on a vanilla private server called Absolute Virtue which was one of the first 1.12.1 servers, and since then I've played on most of the big vanilla and tbc private servers, but mostly tbc.<br><br>Huge fan of PvP and arenas but this time around I will focus on clearing the game and hopefully kill Kel'Thuzad. I can't wait for classic to progress into TBC as this is my absolute favourite expansion and I feel like this is where I truly excel at the game.<br><br>I am a big fan of buddhism, eastern philosophy, personal development and nature. Favourite book is Man's Search for Meaning by Viktor Frankl, favourite movie would be anything by Wes Anderson."
    }
  ];

  this.getNewsReadOnly = function() {
    return angular.copy(news);
  };

  this.getNews = function() {
    return news;
  };
});
