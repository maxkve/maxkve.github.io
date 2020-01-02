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
        roles: "Roster Manager, Discord Manager, Guild Officer",
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
        roles: "Alchemist, Healing Coordinator",
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
        name: "Rascalgag",
        img: "",
        class: "warlock",
        spec: "destruction",
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
        name: "Mageic",
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
        name: "Axel",
        img: "",
        roles: "",
        rank: "raider"
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
        roles: "Guild Officer",
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
        name: "Kevin",
        img: "",
        roles: "Elemental Leatherworker",
        rank: "raider"
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
        roles: "Guild Officer, Hunter Class Leader",
        rank: "raider"
      },
      game: {
        name: "Silaray",
        img: "",
        class: "hunter",
        spec: "marksmanship",
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
        name: "Frederick",
        img: "",
        class: "warrior",
        spec: "fury",
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
        name: "Frø",
        img: "",
        class: "rogue",
        spec: "combat",
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
        name: "Shemmari",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Shemmari",
        img: "",
        class: "rogue",
        spec: "combat",
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
        name: "Nandaiya",
        img: "",
        class: "druid",
        spec: "restoration",
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
        name: "Sooibot",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Soiboi",
        img: "",
        class: "paladin",
        spec: "holy",
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
        name: "Gunnar",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Biaxident",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Engineer",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Engineer",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Ardy",
        img: "",
        roles: "Raid Manager, Guild Officer, Melee Coordinator",
        rank: "raider"
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
        name: "Narvii",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Narvii",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Luffaz",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Luffaz",
        img: "",
        class: "warlock",
        spec: "destruction",
        level: 60
      }
    },
    {
      real: {
        name: "Estacion",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Estacion",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Hjälplös",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Hjälplös",
        img: "",
        class: "priest",
        spec: "shadow",
        level: 60
      }
    },
    {
      real: {
        name: "Arlinn",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Arlinn",
        img: "",
        class: "druid",
        spec: "restoration",
        level: 60
      }
    },
    {
      real: {
        name: "Isythien",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Isythien",
        img: "",
        class: "hunter",
        spec: "marksmanship",
        level: 60
      }
    },
    {
      real: {
        name: "Sarca",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Sarca",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Moan",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Moan",
        img: "",
        class: "warrior",
        spec: "arms",
        level: 60
      }
    },
    {
      real: {
        name: "Orawing",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Orawing",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Gasfyr",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Gasfyr",
        img: "",
        class: "warrior",
        spec: "fury",
        level: 60
      }
    },
    {
      real: {
        name: "Shadybloke",
        img: "",
        roles: "",
        rank: "raider"
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
        name: "Bloodbad",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Bloodbad",
        img: "",
        class: "paladin",
        spec: "holy",
        level: 60
      }
    },
    {
      real: {
        name: "Fyeah",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Fyeah",
        img: "",
        class: "mage",
        spec: "frost",
        level: 60
      }
    },
    {
      real: {
        name: "Coldlight",
        img: "",
        roles: "",
        rank: "raider"
      },
      game: {
        name: "Coldlight",
        img: "",
        class: "priest",
        spec: "holy",
        level: 60
      }
    }
  ];
});
