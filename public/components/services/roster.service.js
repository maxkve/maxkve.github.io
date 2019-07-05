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
        roles: "Guild Master, Webmaster"
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
        roles: "Assistant Guild Master, Main Tank, Assistant Raid Leader, Weaponsmith"
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
        roles: "Recruitment Manager, Tribal Leatherworker"
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
        roles: "Assistant Raid Manager, Raid Leader, Healing Coordinator, Alchemist"
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
        roles: "Loot Manager, Enchanter, Tailor"
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
        roles: "Raid Leader, Off-tank, Armorsmith"
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
        roles: "Assistant Enchanter, Assistant Tailor"
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
        roles: ""
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
        roles: ""
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
        roles: ""
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
        roles: ""
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
        roles: ""
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
        roles: ""
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
        roles: ""
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
    14: {
      real: {
        name: "Stehr",
        img: "",
        roles: ""
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
        roles: ""
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
        roles: ""
      },
      game: {
        name: "<Undecided>",
        img: "",
        class: "Druid",
        spec: "Restoration",
        classIcon: "druid.png",
        specIcon: "restoration.png",
        level: 60
      }
    },
    17: {
      real: {
        name: "Tommie",
        img: "",
        roles: ""
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
    18: {
      real: {
        name: "Mackan",
        img: "",
        roles: ""
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
    19: {
      real: {
        name: "Jens",
        img: "",
        roles: ""
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
        roles: "Off-tank"
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
        roles: ""
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
    }
  };
});
