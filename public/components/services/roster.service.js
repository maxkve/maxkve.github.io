"use strict";

angular.module("epgpApp").service("rosterService", function() {
  this.getMemberReadOnly = function(id) {
    return angular.copy(roster[id]);
  };

  this.getMember = function(id) {
    return roster[id];
  };

  this.getRosterReadOnly = function() {
    return angular.copy(roster);
  };

  this.getRoster = function() {
    return roster;
  };

  this.getTotalClassCount = function(className) {
    let classCount = 0;

    /*
    Object.keys(roster).forEach(memberId => {
      if (roster[memberId].game.class == className) {
        classCount += 1;
      }
		});
		*/

    for (i = 0; i < roster.length; i++) {
      if (roster[i].game.class == className) {
        classCount += 1;
      }
    }

    return classCount;
  };

  this.getTotalCount = function() {
    return Object.keys(roster).length;
  };

  this.getRaiderClassCount = function(className) {
    let classCount = 0;

    /*
    Object.keys(roster).forEach(memberId => {
      if (roster[memberId].game.class == className && roster[memberId].real.rank == "raider") {
        classCount += 1;
      }
		});
		*/

    for (i = 0; i < roster.length; i++) {
      if (roster[i].game.class == className && roster[i].real.rank == "raider") {
        classCount += 1;
      }
    }

    return classCount;
  };

  this.getRaiderCount = function() {
    let raiderCount = 0;

    /*
		    Object.keys(roster).forEach(memberId => {
      if (roster[memberId].real.rank == "raider") {
        raiderCount += 1;
      }
		});
		*/

    for (i = 0; i < roster.length; i++) {
      if (roster[i].real.rank == "raider") {
        raiderCount += 1;
      }
    }

    return raiderCount;
  };

  this.getSocialCount = function() {
    let socialCount = 0;
    /*
    Object.keys(roster).forEach(memberId => {
      if (roster[memberId].real.rank == "social") {
        socialCount += 1;
      }
		});
		*/

    for (i = 0; i < roster.length; i++) {
      if (roster[i].real.rank == "social") {
        raiderCount += 1;
      }
    }

    return socialCount;
  };

  let roster = [
    {
      real: {
        name: "Max",
        img: "",
        roles: "Guild Master, Webmaster",
        rank: "raider"
      },
      game: {
        name: "Combobreaker",
        img: "",
        class: "paladin",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Albin",
        img: "",
        roles: "Assistant Guild Master, Main Tank, Assistant Raid Leader, Weaponsmith",
        rank: "raider"
      },
      game: {
        name: "Wezzi",
        img: "",
        class: "warrior",
        spec: "protection",
        level: 60
      }
    },
    {
      real: {
        name: "Hampus",
        img: "",
        roles: "Recruitment Manager, Guild Officer, Tribal Leatherworker",
        rank: "raider"
      },
      game: {
        name: "Controlfreak",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Oskar",
        img: "",
        roles: "Alchemist",
        rank: "raider"
      },
      game: {
        name: "Snuggle",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Kajsa",
        img: "",
        roles: "Loot Manager, Enchanter, Tailor",
        rank: "raider"
      },
      game: {
        name: "Ohhstar",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Anton",
        img: "",
        roles: "Raid Leader, Guild Officer, Off-tank, Armorsmith",
        rank: "raider"
      },
      game: {
        name: "Zorn",
        img: "",
        class: "warrior",
        spec: "protection",
        level: 60
      }
    },
    {
      real: {
        name: "Viktor",
        img: "",
        roles: "Assistant Tailor",
        rank: "raider"
      },
      game: {
        name: "Rotter",
        img: "",
        class: "warlock",
        spec: "destruction",
        level: 60
      }
    },
    {
      real: {
        name: "Jesper",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Zernox",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Linus",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Bosse",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "paladin",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Wolle",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "warlock",
        spec: "destruction",
        level: 60
      }
    },
    {
      real: {
        name: "Jarre",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Macke",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Axel",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Pontz",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Stehr",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Oliver",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Felix",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Drwatson",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Tommie",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Xeddan",
        img: "",
        class: "paladin",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Mackan",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Mackemjo",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Jens",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Sleypner",
        img: "",
        class: "warlock",
        spec: "destruction",
        level: 60
      }
    },
    {
      real: {
        name: "Emil",
        img: "",
        roles: "Off-tank",
        rank: "raider"
      },
      game: {
        name: "Ema",
        img: "",
        class: "warrior",
        spec: "protection",
        level: 60
      }
    },
    {
      real: {
        name: "Afze",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Afze",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Petr",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Bhallock",
        img: "",
        class: "warlock",
        spec: "destruction",
        level: 60
      }
    },
    {
      real: {
        name: "Kevin",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Yakshi",
        img: "",
        class: "druid",
        spec: "feral",
        level: 60
      }
    },
    {
      real: {
        name: "Andreas",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Stormday",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Christian",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Chresjan",
        img: "",
        class: "paladin",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Phogster",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Phogster",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Kiggi",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Kiggi",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Ben",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Aramus",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Andrion",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Andrion",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Simon",
        img: "",
        roles: "rogue Class Leader",
        rank: "raider"
      },
      game: {
        name: "Baneblade",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Esoteric",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Shakewell",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Fred",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Freddy",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Ollie",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Ceejay",
        img: "",
        class: "druid",
        spec: "restoration",
        level: 60
      }
    },
    {
      real: {
        name: "Emil",
        img: "",
        roles: "Assistant Enchanter",
        rank: "raider"
      },
      game: {
        name: "Fro",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Dennis",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Zeltres",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Andrea",
        img: "",
        roles: "Assistant Alchemist",
        rank: "raider"
      },
      game: {
        name: "Allistair",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Dennis",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Baraccus",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Jonathan",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Sick",
        img: "",
        class: "paladin",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Johnny",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Jaycea",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "John",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Allyria",
        img: "",
        class: "warlock",
        spec: "destruction",
        level: 60
      }
    },
    {
      real: {
        name: "Sebastian",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Pronin",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Anton Bergström",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Somedaymaybe",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Jonas",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Korra",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Gareth",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Swift",
        img: "",
        class: "druid",
        spec: "restoration",
        level: 60
      }
    },
    {
      real: {
        name: "Benny",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Niermis",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Adrian",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Dixey",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Kingironbeard",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Kingironbeard",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Remo",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Remo",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Nicolaj",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Growgor",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Replacement",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Replacement",
        img: "",
        class: "paladin",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Paul",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Éverchosen",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Mers",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Mers",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Coco",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Crazyqq",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Sooibot",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Sooibot",
        img: "",
        class: "paladin",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Wilhelm",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Surtsalt",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Bakker",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Bakker",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Stoffe",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Madikken",
        img: "",
        class: "druid",
        spec: "feral",
        level: 60
      }
    },
    {
      real: {
        name: "Oliver",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Ganer",
        img: "",
        class: "rogue",
        spec: "combat",
        level: 60
      }
    },
    {
      real: {
        name: "Johannes",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Gargkill",
        img: "",
        class: "priest",
        spec: "shadow",
        level: 60
      }
    },
    {
      real: {
        name: "Leptest",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Leptest",
        img: "",
        class: "warlock",
        spec: "destruction",
        level: 60
      }
    },
    {
      real: {
        name: "Konphewzd",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Misanthrope",
        img: "",
        class: "rogue",
        spec: "assassination",
        level: 60
      }
    },
    {
      real: {
        name: "Shadybloke",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Shadybloke",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Mårten",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Hicky",
        img: "",
        class: "druid",
        spec: "feral",
        level: 60
      }
    },
    {
      real: {
        name: "Joacim",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Woodedwire",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Gunnar",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Beiken",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Pookie",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Pookie",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Shinganova",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Shinganova",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Ardy",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Ardy",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Kuddish",
        img: "",
        roles: "",
        rank: "social"
      },
      game: {
        name: "Kuddish",
        img: "",
        class: "druid",
        spec: "feral",
        level: 60
      }
    }
  ];
});
