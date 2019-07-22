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

  this.getClassCount = function(className) {
    let classCount = 0;
    Object.keys(roster).forEach(memberId => {
      if (roster[memberId].game.class == className) {
        classCount += 1;
      }
    });
    return classCount;
  };

  this.getTotalCount = function() {
    return Object.keys(roster).length;
  };

  let roster = {
    0: {
      real: {
        name: "Max",
        img: "",
        roles: "Guild Master, Webmaster",
        rank: "Raider",
        rankIcon: "raider.png",
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
    1: {
      real: {
        name: "Albin",
        img: "",
        roles: "Assistant Guild Master, Main Tank, Assistant Raid Leader, Weaponsmith",
        rank: "Raider",
        rankIcon: "raider.png",
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
    2: {
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
    3: {
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
    4: {
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
    5: {
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
    6: {
      real: {
        name: "Viktor",
        img: "",
        roles: "Assistant Tailor",
        rank: "Raider",
        rankIcon: "raider.png"
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
    7: {
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
    8: {
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
    9: {
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
    10: {
      real: {
        name: "Wolle",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
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
    11: {
      real: {
        name: "Jarre",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
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
    12: {
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
    13: {
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
    14: {
      real: {
        name: "Stehr",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
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
    15: {
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
    16: {
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
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    17: {
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
    18: {
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
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    },
    19: {
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
    20: {
      real: {
        name: "Ema",
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
    21: {
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
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    },
    22: {
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
    23: {
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
    24: {
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
    25: {
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
    27: {
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
    28: {
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
    29: {
      real: {
        name: "Ben",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Fugitive",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    30: {
      real: {
        name: "Andrion",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Legolas",
        img: "",
        class: "Hunter",
        spec: "Marksmanship",
        classIcon: "hunter.png",
        specIcon: "marksmanship.png",
        level: 60
      }
    },
    31: {
      real: {
        name: "Simon",
        img: "",
        roles: "Rogue Class Leader",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Ironcrusader",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    32: {
      real: {
        name: "Esoteric",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Esoteric",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    33: {
      real: {
        name: "Fred",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Freddo",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    34: {
      real: {
        name: "Ollie",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Ohceejay",
        img: "",
        class: "Druid",
        spec: "Restoration",
        classIcon: "druid.png",
        specIcon: "restoration.png",
        level: 60
      }
    },
    35: {
      real: {
        name: "Emil",
        img: "",
        roles: "Dragonscale Leatherworker, Assistant Enchanter",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Froeen",
        img: "",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    36: {
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
    37: {
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
    38: {
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
    39: {
      real: {
        name: "Jonathan",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Alendariel",
        img: "",
        class: "Paladin",
        spec: "Holy",
        classIcon: "paladin.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    40: {
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
    41: {
      real: {
        name: "John",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Aiki",
        img: "",
        class: "Warlock",
        spec: "Destruction",
        classIcon: "warlock.png",
        specIcon: "destruction.png",
        level: 60
      }
    },
    42: {
      real: {
        name: "Sebastian",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Arkadian",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    43: {
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
    44: {
      real: {
        name: "Jonas",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Vaikingu",
        img: "",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    45: {
      real: {
        name: "Gareth",
        img: "",
        roles: "",
        rank: "Raider",
        rankIcon: "raider.png"
      },
      game: {
        name: "Nandaiyo",
        img: "",
        class: "Druid",
        spec: "Restoration",
        classIcon: "druid.png",
        specIcon: "restoration.png",
        level: 60
      }
    },
    46: {
      real: {
        name: "Benny",
        img: "",
        roles: "",
        rank: "Social",
        rankIcon: "social.png"
      },
      game: {
        name: "Benmeister",
        img: "",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    }
  };
});
