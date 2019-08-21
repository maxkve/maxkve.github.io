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
      if (roster[memberId].game.class == className && roster[memberId].real.rank == "Raider") {
        classCount += 1;
      }
		});
		*/

    for (i = 0; i < roster.length; i++) {
      if (roster[i].game.class == className && roster[i].real.rank == "Raider") {
        classCount += 1;
      }
    }

    return classCount;
  };

  this.getRaiderCount = function() {
    let raiderCount = 0;

    /*
		    Object.keys(roster).forEach(memberId => {
      if (roster[memberId].real.rank == "Raider") {
        raiderCount += 1;
      }
		});
		*/

    for (i = 0; i < roster.length; i++) {
      if (roster[i].real.rank == "Raider") {
        raiderCount += 1;
      }
    }

    return raiderCount;
  };

  this.getSocialCount = function() {
    let socialCount = 0;
    /*
    Object.keys(roster).forEach(memberId => {
      if (roster[memberId].real.rank == "Social") {
        socialCount += 1;
      }
		});
		*/

    for (i = 0; i < roster.length; i++) {
      if (roster[i].real.rank == "Social") {
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
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Combobreaker",
        img: "",
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Albin",
        img: "",
        roles: "Assistant Guild Master, Main Tank, Assistant Raid Leader, Weaponsmith",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Wezzi",
        img: "",
        class: "Warrior",
        spec: "Protection",
        classIcon: "warrior.png",
        specIcon: "protection_warrior.png",
        level: 60
      }
    },
    {
      real: {
        name: "Hampus",
        img: "",
        roles: "Recruitment Manager, Guild Officer, Tribal Leatherworker",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Controlfreak",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Oskar",
        img: "",
        roles: "Alchemist",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Snuggle",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Kajsa",
        img: "",
        roles: "Loot Manager, Enchanter, Tailor",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Ohhstar",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Anton",
        img: "",
        roles: "Raid Leader, Guild Officer, Off-tank, Armorsmith",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Zorn",
        img: "",
        class: "Warrior",
        spec: "Protection",
        classIcon: "warrior.png",
        specIcon: "protection_warrior.png",
        level: 60
      }
    },
    {
      real: {
        name: "Viktor",
        img: "",
        roles: "Assistant Tailor",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Rotter",
        img: "",
        class: "Warlock",
        spec: "Destruction",
        classIcon: "warlock.png",
        specIcon: "destruction.png",
        level: 60
      }
    },
    {
      real: {
        name: "Jesper",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Zernox",
        img: "",
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    },
    {
      real: {
        name: "Linus",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    },
    {
      real: {
        name: "Bosse",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Wolle",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "Warlock",
        spec: "Destruction",
        classIcon: "warlock.png",
        specIcon: "destruction.png",
        level: 60
      }
    },
    {
      real: {
        name: "Jarre",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Macke",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "Hunter",
        spec: "Marksmanship",
        classIcon: "hunter.png",
        specIcon: "marksmanship.png",
        level: 60
      }
    },
    {
      real: {
        name: "Axel",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Pontz",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Stehr",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Oliver",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "Hunter",
        spec: "Marksmanship",
        classIcon: "hunter.png",
        specIcon: "marksmanship.png",
        level: 60
      }
    },
    {
      real: {
        name: "Felix",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Drwatson",
        img: "",
        class: "Hunter",
        spec: "Marksmanship",
        classIcon: "hunter.png",
        specIcon: "marksmanship.png",
        level: 60
      }
    },
    {
      real: {
        name: "Tommie",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Xeddan",
        img: "",
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Mackan",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Mackemjo",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Jens",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Sleypner",
        img: "",
        class: "Warlock",
        spec: "Destruction",
        classIcon: "warlock.png",
        specIcon: "destruction.png",
        level: 60
      }
    },
    {
      real: {
        name: "Emil",
        img: "",
        roles: "Off-tank",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Ema",
        img: "",
        class: "Warrior",
        spec: "Protection",
        classIcon: "warrior.png",
        specIcon: "protection_warrior.png",
        level: 60
      }
    },
    {
      real: {
        name: "Afze",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Afze",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Petr",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Bhallock",
        img: "",
        class: "Warlock",
        spec: "Destruction",
        classIcon: "warlock.png",
        specIcon: "destruction.png",
        level: 60
      }
    },
    {
      real: {
        name: "Kevin",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Yakshi",
        img: "",
        class: "Druid",
        spec: "Feral",
        classIcon: "druid.png",
        specIcon: "feral.png",
        level: 60
      }
    },
    {
      real: {
        name: "Andreas",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Stormday",
        img: "",
        class: "Hunter",
        spec: "Marksmanship",
        classIcon: "hunter.png",
        specIcon: "marksmanship.png",
        level: 60
      }
    },
    {
      real: {
        name: "Christian",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Chresjan",
        img: "",
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Phogster",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Phogster",
        img: "",
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    },
    {
      real: {
        name: "Kiggi",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Kiggi",
        img: "",
        class: "Hunter",
        spec: "Marksmanship",
        classIcon: "hunter.png",
        specIcon: "marksmanship.png",
        level: 60
      }
    },
    {
      real: {
        name: "Ben",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Aramus",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Andrion",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Andrion",
        img: "",
        class: "Hunter",
        spec: "Marksmanship",
        classIcon: "hunter.png",
        specIcon: "marksmanship.png",
        level: 60
      }
    },
    {
      real: {
        name: "Simon",
        img: "",
        roles: "Rogue Class Leader",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Ghostblade",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Esoteric",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Shakewell",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Fred",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Freddy",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Ollie",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Ceejay",
        img: "",
        class: "Druid",
        spec: "Restoration",
        classIcon: "druid.png",
        specIcon: "restoration.png",
        level: 60
      }
    },
    {
      real: {
        name: "Emil",
        img: "",
        roles: "Assistant Enchanter",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Fro",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Dennis",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Zeltres",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Andrea",
        img: "",
        roles: "Assistant Alchemist",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Allistair",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Dennis",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Baraccus",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Jonathan",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Sick",
        img: "",
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Johnny",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Jaycea",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "John",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Allyria",
        img: "",
        class: "Warlock",
        spec: "Destruction",
        classIcon: "warlock.png",
        specIcon: "destruction.png",
        level: 60
      }
    },
    {
      real: {
        name: "Sebastian",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Pronin",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Anton Bergström",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Somedaymaybe",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Jonas",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Korra",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Gareth",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Swift",
        img: "",
        class: "Druid",
        spec: "Restoration",
        classIcon: "druid.png",
        specIcon: "restoration.png",
        level: 60
      }
    },
    {
      real: {
        name: "Benny",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Niermis",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Adrian",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Dixey",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Kingironbeard",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Kingironbeard",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat	.png",
        level: 60
      }
    },
    {
      real: {
        name: "Remo",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Remo",
        img: "",
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    },
    {
      real: {
        name: "Nicolaj",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Growgor",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Replacement",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Replacement",
        img: "",
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Paul",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Éverchosen",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Mers",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Mers",
        img: "",
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    },
    {
      real: {
        name: "Coco",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Crazyqq",
        img: "",
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    },
    {
      real: {
        name: "Sooibot",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Sooibot",
        img: "",
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Wilhelm",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Surtsalt",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    {
      real: {
        name: "Bakker",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Bakker",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    {
      real: {
        name: "Stoffe",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Madikken",
        img: "",
        class: "Druid",
        spec: "Feral",
        classIcon: "druid.png",
        specIcon: "feral.png",
        level: 60
      }
    },
    {
      real: {
        name: "Oliver",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Ganer",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    {
      real: {
        name: "Johannes",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Gargkill",
        img: "",
        class: "Priest",
        spec: "Shadow",
        classIcon: "priest.png",
        specIcon: "shadow.png",
        level: 60
      }
    },
    {
      real: {
        name: "Leptest",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Leptest",
        img: "",
        class: "Warlock",
        spec: "Destruction",
        classIcon: "warlock.png",
        specIcon: "destruction.png",
        level: 60
      }
    },
    {
      real: {
        name: "Konphewzd",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Misanthrope",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    }
  ];
});
