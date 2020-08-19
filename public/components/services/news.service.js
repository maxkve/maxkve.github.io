"use strict";

angular.module("epgpApp").service("newsService", function () {
  let news = [
    {
      title: "Player Introduction: Combobreaker",
      author: "Combobreaker",
      img: "vector2.jpg",
      date: "2019-06-01",
      tags: ["Player Introduction"],
      summary: "Learn more about your Guild Master in this short introductory piece.",
      content:
        "Hello, Combobreaker here, Guild Master (and Webmaster) of Standard Procedure. I'm a 28-year old UX-designer from Sweden who's been a WoW-player since late vanilla. I'm incredibly excited for Classic, very much looking forward to going back to Azeroth again. I'm currently not playing retail, although I did play up to...Legion, I think.<br><br>Back in Vanilla I used to play a gnome Mage named my first name + my surname, because apparently I wasn't big on the whole privacy thing back then. I didn't raid much at the time, just some MC and ZG, but the raids are something I'm looking forward to a lot this time around. Don't worry, I won't be leading you guys during raids, we have a bunch of very experienced raid leaders who will be taking care of that. Beyond that, I'm looking forward to enjoying the leveling experience again, the zones, the sense of community and the feeling of a connected world.<br><br>I can't wait to see you all in-game.",
    },
    {
      title: "Player Introduction: Zorn",
      author: "Zorn",
      img: "zorn.jpg",
      date: "2019-06-04",
      tags: ["Player Introduction"],
      summary: "Learn more about Zorn, Raid Leader and Off-tank.",
      content:
        "Hello, I'm Zorn. Your Raid Leader and Off-tank by night, 31-year old Banker from Sweden by day. I've been an avid player of WoW since the original Beta back in 2004. I've played every expansion up to Legion (BFA being the first one I havent played on release).<br><br>I created my first character back in the Beta, a Human Warrior, and have had him as my main ever since. I raided quite hardcore in both Vanilla and TBC, reaching 4-Horsemen before the dreaded 2.0 patch tore our raid to pieces. I have a lot of experience as a Raid-Leader and Main Tank through all of Vanillas content, that being said I'm open to new ideas and tactics!<br><br>I'm really looking forward to experience all that Classic has to offer with all of you!",
    },
    {
      title: "Zorn appears on Countdown to Classic",
      author: "Combobreaker",
      img: "countdowntoclassic.jpg",
      date: "2019-07-03",
      tags: ["Announcement"],
      summary: "Zorn talks Thunderfury on episode #111 of Countdown to Classic.",
      content:
        "Zorn recently appeared on episode #111 of Countdown to Classic where he spoke at length about Thunderfury, its state pre- and post-nerf, its role in tanking, if any other classes were eligible to receive it (sorry Hunters), and much more.<br><br>You can listen to the podcast on Josh's website here: <a href='https://countdowntoclassic.com/2019/07/03/episode-111-thunderfury-dr-lupo-on-wow-classic-streaming-a-listener-reply-to-world-buffs-eu-server-mayhem-the-making-of-wailing-caverns/' target='_blank'>Countdown to Classic</a>",
    },
    {
      title: "Player Introduction: Ohhstar",
      author: "Ohhstar",
      img: "ohhstar.jpg",
      date: "2019-07-21",
      tags: ["Player Introduction"],
      summary: "Learn more about Ohhstar, Loot Manager and Crafter.",
      content:
        "Hey there! My name is Kajsa, I’m 29 years old and from Sweden. I work as a landlord in the weekdays and in the weekends I’m spending my time with my dog and my partner. Playing golf, board games, being in the nature and ofc being in front of the computer.<br><br>I have been playing world of Warcraft since the release of TBC. I’ve always been a big fan of raiding, and a bit of a farming geek. One of my main goals was to get all the mounts and pets that were in the game. My absolute favorite mounts were The Amani War Bear from ZA and Anzu from Sethekk Halls. When WotLK came, I fore sure were going to go for the Time Lost Protodrake!<br>I stayed in Stormpeaks, spamming the macro day and night, and after a while it came flying above me. So...of course I have “Time Lost” as well...<br><br>The last time I played on retail, I played up to legion then I felt that the game had changed too much and it wasn’t a game for me anymore. Not only for all the thousands of mounts and pets you could get that easily, but also for the community that had changed too much.<br>When I heard that classic was coming, there were no doubts that me and my friends were going to play. When I started in TBC my first character was a Druid named Ohhstar. I’ve had some alternative characters that I played on, and mage was always one of my favorite classes. So this time - I’ll be casting frostbolts!",
    },
    {
      title: "Initial recruitment drive finished",
      author: "Combobreaker",
      img: "recruit.jpg",
      date: "2019-07-21",
      tags: ["Announcement"],
      summary: "We've finished our initial general recruitment drive, but still need some specific roles.",
      content:
        "We're happy to announce that our initial general recruitment drive has finished. Thank you to those who applied, and welcome to those who were accepted. We're very excited about all the fine people we've managed to attract, and we're looking forward to getting to know you all.",
    },
    {
      title: "Player Introduction: Growgor",
      author: "Growgor",
      img: "growgor.jpg",
      date: "2019-07-31",
      tags: ["Player Introduction"],
      summary: "Learn more about Growgor, 3D-artist by day and Rogue by night.",
      content:
        "Hey everyone! My name is Nicolaj, I'm 32 years of age and I'm from central part Denmark, where I live together with my wife and our dog.<br><br>I work as a 3d artist in the architectural visualization industry, and have done so for over ten years now. When I'm not sitting in front of my computer and working or playing games, I'm usually found outside spending time on some of my countless hobbies, such as bow hunting, spear fishing, hiking, bushcrafting, or crafting stuff in my little workshop.<br><br>I've played World of Warcraft ever since the very first release day, and it has been my undisputed favorite game ever since. That said, after Burning Crusade and especially Wrath of the Lich King, it all went downhill from there, and shortly after Cataclysm I stopped playing the game. I did drop by in every expansion though, but only to be disappointed.<br><br>I'm very much looking forward to relive the glorious days of vanilla, and I'm excited to step in and clear especially Naxxramas, since I didn't get to clear that back in the days.<br><br>See you all in Azeroth!",
    },
    {
      title: "Player Introduction: Froeen",
      author: "Froeen",
      img: "froeen.jpg",
      date: "2019-07-31",
      tags: ["Player Introduction"],
      summary: "Learn more about Froeen, boardgame enthusiast and future economic powerhouse.",
      content:
        "Hey! I'm Froeen from Denmark. I am 26 years old and I work as a marketing specialist in a startup within music, which is a lot of fun. When I'm not eagerly waiting classic wow launch I play board games like Rising Sun, Time Stories, 7th Continent, Gloomhaven and Star Wars Imperial Assault as well as hanging out with my friends and wife or playing Crash Team Racing on my playstation.<br><br>I have played WoW since week 1 of TBC so unfortunately I'm not a vanilla player. My favorite expansion (so far) is TBC and I can't wait to get back to the game that I love. <br><br>I have raided in TBC, WOTLK, skipped Cata, raided again in MOP and skipped WoD and then played PvP in Legion. I was a raidleader in MOP where we were the best guild on our server's faction, and getting all the ahead of the curve achievements, which is my best memories with WoW. <br><br>I love the social aspect of WoW and I love making tons of gold as well, so if you need a loan you can come to me :-D",
    },
    {
      title: "Player Introduction: Allistair",
      author: "Allistair",
      img: "classic.jpg",
      date: "2019-08-01",
      tags: ["Player Introduction"],
      summary: "Learn more about Allistair, soon-to-be first time WoW-player.",
      content:
        "Hi everyone, I'm Andrea your friendly Italian neighbor. I'm 27 years old and I work for a small Italian company here in Stockholm. I moved to Sweden in 2016, it was a hard change to my lifestyle but that was the whole point. To challenge myself.<br><br>I play video games since I was 6, starting with ps1 and then at the age of 11 I got my first pc. I play in particular RTS from AoE to warcraft 3. I never played WoW and the reason is kind of funny: back in 2004 there was no internet in my home town, can you imagine that? So when I saw that classic would be released I jumped in immediately.<br><br>In game I'm a very competitive guy, I don't like to be second to none. But don't worry I'm still a nice and friendly person.<br><br>Can't wait to play with you all. FOR THE ALLIANCE!",
    },
    {
      title: "Player Introduction: Somedaymaybe",
      author: "Somedaymaybe",
      img: "somedaymaybe.jpg",
      date: "2019-08-01",
      tags: ["Player Introduction"],
      summary: "Learn more about Somedaymaybe, TBC-fanatic and avid PvPer.",
      content:
        "Greetings!<br><br>My name is Anton and I am 26 years old, currently living in Hälsingland, Sweden.<br><br>I started playing World of Warcraft late 2006 and played throughout The Burning Crusade expansion and loved it but quit once Wrath of the Lich King came around. After that I started playing on a vanilla private server called Absolute Virtue which was one of the first 1.12.1 servers, and since then I've played on most of the big vanilla and tbc private servers, but mostly tbc.<br><br>Huge fan of PvP and arenas but this time around I will focus on clearing the game and hopefully kill Kel'Thuzad. I can't wait for classic to progress into TBC as this is my absolute favourite expansion and I feel like this is where I truly excel at the game.<br><br>I am a big fan of buddhism, eastern philosophy, personal development and nature. Favourite book is Man's Search for Meaning by Viktor Frankl, favourite movie would be anything by Wes Anderson.",
    },
    {
      title: "Player Introduction: Peaches",
      author: "Peaches",
      img: "classic.jpg",
      date: "2019-08-09",
      tags: ["Player Introduction"],
      summary: "Learn more about Peaches, Noodle-walker and arena master.",
      content:
        "Hey my name is Timo, aka Peaches/Coco (we will see what I can grab on name day).  I am a Capetonian living between London and Bermuda.  I work at a hedge fund, I am married and we have a white Pomeranian named Noodle - who will no doubt make a raid appearance #FinalBoss.  Recently joined Sooibot is also my bro.<br><br>I raided in Vanilla as a Resto Shaman in a guild called The Tide, which was the top horde guild on The Venture Co for a while.  When BC hit I moved to Tokyo for school, but decided to try arena once I figured out how to connect to Taiwanese servers.  I made a NE druid named Stormz and was the top ranked Druid+Rogue in the world for 2 seasons during WoTLK (based on rating - rogues name was Vi).  Haven't played since then.<br><br>Happy to be back, and keen to see all of AQ and Naxx with what looks like a great group :)",
    },
    {
      title: "Player Introduction: Ema",
      author: "Ema",
      img: "classic.jpg",
      date: "2019-08-09",
      tags: ["Player Introduction"],
      summary: "Learn more about Ema, discgolfer and nature hero.",
      content:
        "Hey all!<br><br>My name is Emil (Ema) i am 22 years old and living in Stockholm Sweden with my girlfriend. On my free time i spend it on frisbee golf, movie night, dog guard and cat guard and partying.<br>I work as a garbage truck driver and loveing it. Saveing the nature everyday as a job is fantastic and i get home early everyday. (Got to much free time)<br><br>I begin playing World of Warcraft when i was 8 years old so late vanilla and only got to lvl 30 and i did not really play TBC (cuz i was a child), Wotlk is where it all went down hill in school. Raided all the content forward to BFA where i quit. Started playing private server and lead some few guilds in cata and wotlk.<br><br>Hope to stay up all night with you guys on release day and see you all in Azeroth!",
    },
    {
      title: "Player Introduction: Benmeister",
      author: "Benmeister",
      img: "benny.jpg",
      date: "2019-08-10",
      tags: ["Player Introduction"],
      summary: "Learn more about Benmeister, programmer and game dev.",
      content:
        "Hello! My name is Benny (for real!) and I'm a swede currently residing in Linköping. I work as a programmer/game designer and this will be a mostly new journey since I didn't hop on the WoW train the first time around. Well mostly except for the week I played the vanilla beta and vowed never to play these addicting MMO type games again. :)<br><br>Still I've been curious ever since. Seems people can never talk enough about their golden WoW days.<br><br>Games have been a focus ever since I booted up my SNES. I also dabble in a lot of things like composing electronic music, playing tennis and making my own games. I've released a mobile game and an indie game on Steam and I'm now working on a new one with our own master Combobreaker. It'll probably be put on hold for the near future as we venture deep into Azeroth though. :)<br><br>My plan is to play a mage and I'll level semi-casually to explore the world and improve along the way. Slowpokes unite!<br><br>Looking forward to see what all the fuss has been about all these years and join ya'll this time!",
    },
    {
      title: "Player Introduction: Baraccus",
      author: "Baraccus",
      img: "classic.jpg",
      date: "2019-08-20",
      tags: ["Player Introduction"],
      summary: "Learn more about Baraccus, tolkien fan and master chef.",
      content:
        "Hey gang!<br><br>My name is Dennis and I am 30 years old. I grew up in a small town in central Sweden and later spent a bunch of years at the university i Norrköping, studying project management, math, programming and media production.<br><br>Nowadays I work as a freelancer in the film industry in Stockholm as a production manager for feature films and tv-series.<br><br>I started my MMO-carrer in 2004 on a private Lineage 2 server before moving to vanilla in 2005. I was a casual raider back then and spent most of my time exploring and loosing against the Horde in Arathi Basin. I downed Rag, Hakkar, Ony, BWL and some of AQ20 just before TBC. I played a holy paladin all the way up to WOTLK where I swapped to Retri/Tank and did most of my hard core raiding and clearing most content. <br><br>I left WOW about half way through CATA when SWTOR launched and played that for about a year. I became one of the servers top PVPers before quitting altogether in 2013 when I moved to Stockholm and started my career.<br><br>Other then video- and boardgames I’m a massive Tolkien fan and an avid reader of classic fantasy and science fiction.<br><br>I’m also a pretty amazing cook and ofcz I plan on going all out cooking and fishing in classic! Mmm… I can already smell the Nightfin soup simmering…",
    },
    {
      title: "Player Introduction: Rascalgag",
      author: "Rascalgag",
      img: "classic.jpg",
      date: "2019-08-20",
      tags: ["Player Introduction"],
      summary: "Learn more about Rascalgag, who knows all about Naxx and tracks.",
      content:
        "Herro!<br><br>My name is Viktor, 28, living in the capital city of Sweden!<br><br>My World of Warcraft journey started in Vanilla like many others here. I've been playing all expansions so far, with various amount of fun. Best expansion for me was Cataclysm, mostly due to a awesome guild.<br>In Vanilla I raided as a Holy Paladin in the guild 'The Anvil' on the realm Bladefist. Bladefist became overpopulated, so the whole guild took the free migration to the new realm, Outland. We cleared the easy wing in Naxxramas before TBC was announced and after that the guild died. This time around I'm going as a Warlock! <br><br>When I'm not at the computer I work as a traffic controller in the subway. Clearing train failures, point failures, accidents and such.<br>Doing everything to keep the traffic going!<br><br>Aaaand while I'm not at the computer or working I am outside fishing.<br><br>All the best!",
    },
    {
      title: "We've rolled on Noggenfogger!",
      author: "Combobreaker",
      img: "classic.jpg",
      date: "2019-08-27",
      tags: ["Announcement"],
      summary: "The adventure is underway.",
      content:
        "After battling queues on Firemaw, following a heroic push by Aramus and crew to get the guild up and running, we made the tough decision to move to Noggenfogger. There's still queues, but we have a feeling they may subside in time. Other than that people are having a blast coming back to the game they've been waiting for for years. See you in Azeroth!",
    },
    {
      title: "Recruitment has stopped",
      author: "Combobreaker",
      img: "recruit.jpg",
      date: "2019-08-27",
      tags: ["Announcement"],
      summary: "No applications will be considered at this time.",
      content:
        "We've decided to stop recruitment altogether (both for Raiders and Socials) due to the extreme popularity we've enjoyed over the past week. Thank you to all those who've joined and applied! See you in Azeroth. We may open up recruitment again at a later date.",
    },
    {
      title: "Raid start looms",
      author: "Combobreaker",
      img: "blackrock.jpg",
      date: "2019-09-19",
      tags: ["Announcement"],
      summary: "Exciting times ahead as the start of raiding approaches.",
      content:
        "As many people in the guild have either hit 60 or are approaching 60, we'll be starting some warm-ups in UBRS as well as scheduled attunement runs soon. This is in preparation of the MC and Onyxia raids which we hope will start in about 2 weeks time.",
    },
    {
      title: "First raid officially in the books",
      author: "Ohhstar",
      img: "20190930.jpg",
      date: "2019-09-30",
      tags: ["Announcement"],
      summary: "First guild raid results in 9/10 bosses cleared.",
      content:
        "What an amazing run, everyone made such an effort. We were a total of 30 people in the raid and 7 of those people were lvl 55-59, we managed to kill 9/10 Bosses up to Majordomo because time was against us, but next time we will be coming for the Ragnaros kill.<br><br>We had very few wipes during the course of the raid, the bosses and the trash went down smoothly and easily even though we had some AoE taunts from DPS and a little Druid that blew up the whole raid (no names mentioned).<br><br>Extra thanks to those who ran to Azshara to collect water so we could spawn all the bosses!<br><br>On the last boss that we killed, Majordomo, we were 29 people because one person had to go and save lives IRL.<br><br>We had one initial wipe on Majordomo before he died (with just a few deaths on our side).",
    },
    {
      title: "Dragon I hardly knew ye",
      author: "Combobreaker",
      img: "20191002.jpg",
      date: "2019-10-02",
      tags: ["Announcement"],
      summary: "Onyxia falls in a blaze of glory.",
      content: "Onyxia was brought down in swift fashion after some initial struggles with the P3 transition. All in all everything went very smoothly.",
    },
    {
      title: "Yesterdays' news: Ragnaros is no more",
      author: "Combobreaker",
      img: "20191006.jpg",
      date: "2019-10-06",
      tags: ["Announcement"],
      summary: "The Elemental Lord totally died this past weekend.",
      content:
        "The puny insects of Standard Procedure smacked the elemental lord around this past Sunday in a zero-wipe session. We've now cleared all bosses of the current raid tier much faster than expected, really looking forward to continue raiding with all our Raiders (and making sure we gear everyone up for the next stage!).",
    },
    {
      title: "Success rate increased to 200%",
      author: "Combobreaker",
      img: "20191125.jpg",
      date: "2019-11-25",
      tags: ["Announcement"],
      summary: "What's better than killing Ragnaros? Killing Ragnaros twice.",
      content:
        "In the words of the great Gordon Ramsay: 'wow wow wow'. Great night yesterday as we finished split-running both Onyxia and MC, with just a single wipe across both raids. 'Smooth as Bloodbads behind', as one unnamed officer quipped after the raids (although it stands within reason to assume the involved party was someone who's had a close encounter with said behind, but I digress). Now all that's left is to do split-split runs until BWL comes out after new years.",
    },
    {
      title: "Standard Procedure Season's Greetings",
      author: "Combobreaker",
      img: "christmas.png",
      date: "2019-12-29",
      tags: ["Announcement"],
      summary: "Wishing you all a merry christmas and a happy new year!",
      content:
        "Holiday raids have been going well from what I hear, perhaps a bit more relaxed than usual, but with great results nonetheless. Thank you all for a terrific (half) year, looking forward to the next one!",
    },
    {
      title: "Confirmed: Legendary Status",
      author: "Combobreaker",
      img: "sulfuras.png",
      date: "2020-01-08",
      tags: ["Announcement"],
      summary: "Congratulations to Gasfyr, wielder of Sulfuras!",
      content:
        "Long before he could stand on his 2 tiny danish tater tot legs, young Gasfyr had but one goal in mind: wielding the legendary hammer Sulfuras. To the envy of paladins everywhere (and presumably a healthy dose of shamans and warriors too!), today that goal was fulfilled. Congratulations to Gasfyr from us all, well done!",
    },
    {
      title: "BWL is just around the corner",
      author: "Zorn",
      img: "bwl.jpg",
      date: "2020-01-20",
      tags: ["Announcement"],
      summary: "What does the lord of Blackrock Mountain have in store for us?",
      content:
        "As the release of phase 3 grows ever closer we prepare ourselves as best we can to take on the forces of Blackwing Lair. On the 13th of February we will storm through the portal and face dragons and drakes alike. Let the games...begin!",
    },
    {
      title: "The Lord of Blackrock is no more",
      author: "Ohhstar",
      img: "20200214.jpg",
      date: "2020-02-14",
      tags: ["Announcement"],
      summary: "BWL 8/8 on our first night.",
      content:
        "The 13th of February we entered his halls, well prepared and extremely hyped. A few initial bumps in the road showed us that the instance isn’t a complete pushover, but we quickly got back on track. The bosses fell over like dominos and not even Nefarian could hold us back! Thx for keeping the throne warm for us!<br><br>BWL 8/8 second alliance, fourth on the server - going strong!",
    },
    {
      title: "Local Man Slays God",
      author: "Combobreaker",
      img: "thunderfury.jpg",
      date: "2020-04-05",
      tags: ["Announcement"],
      summary: "[Thunderfury, Blessed Blade of the Windseeker]",
      content:
        "Congratulations to our main tank Wezzi who finally received Thunderfury this weekend, emerging as the coolest Thunderfury-wielding member of his immediate family. No threat meter is safe going forward.",
    },
    {
      title: "Neighborhood Misfits Commit Deicide",
      author: "Combobreaker",
      img: "20200819.jpg",
      date: "2020-08-19",
      tags: ["Announcement"],
      summary: "Just another day at the office.",
      content:
        "Another day, another God slain - it's all in the name over here at Standard Procedure. The boys and girls made short work of yet another deity this past week. 'What's next?' you ask? Why, I don't know? Maybe we'll kill YOUR God! Haha, just kidding. We wouldn't.<br><br>We also want to specially congratulate Shemmari on becoming one of the servers first Scarab Lords!",
    },
  ];

  this.getNewsReadOnly = function () {
    return angular.copy(news);
  };

  this.getNews = function () {
    return news;
  };
});
