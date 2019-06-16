"use strict";

angular.module("epgpApp").service("rosterService", function() {
  let roster = {
    vector: {
      real: {
        name: "Max",
        img: "",
        roles: "Guild Master, Webmaster"
      },
      game: {
        name: "Vector",
        img: "uther.png",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    wezzi: {
      real: {
        name: "Albin",
        img: "",
        roles: "Assistant Guild Master, Main Tank, Assistant Raid Leader, Weaponsmith"
      },
      game: {
        name: "Wezzi",
        img: "uther.png",
        class: "Warrior",
        spec: "Protection",
        classIcon: "warrior.png",
        specIcon: "protection_warrior.png",
        level: 60
      }
    },
    controlfreak: {
      real: {
        name: "Hampus",
        img: "",
        roles: "Recruitment Manager, Tribal Leatherworker"
      },
      game: {
        name: "Controlfreak",
        img: "uther.png",
        class: "Rogue",
        spec: "Combat",
        classIcon: "rogue.png",
        specIcon: "combat.png",
        level: 60
      }
    },
    hanke: {
      real: {
        name: "Oskar",
        img: "",
        roles: "Assistant Raid Manager, Raid Leader, Healing Coordinator, Alchemist"
      },
      game: {
        name: "Hanke",
        img: "uther.png",
        class: "Priest",
        spec: "Holy",
        classIcon: "priest.png",
        specIcon: "holy.png",
        level: 60
      }
    },
    ohhstar: {
      real: {
        name: "Kajsa",
        img: "",
        roles: "Loot Manager, Enchanter, Tailor"
      },
      game: {
        name: "Ohhstar",
        img: "uther.png",
        class: "Mage",
        spec: "Frost",
        classIcon: "mage.png",
        specIcon: "frost.png",
        level: 60
      }
    },
    zorn: {
      real: {
        name: "Anton",
        img: "",
        roles: "Raid Leader, Off-tank, Armorsmith"
      },
      game: {
        name: "Zorn",
        img: "uther.png",
        class: "Warrior",
        spec: "Protection",
        classIcon: "warrior.png",
        specIcon: "protection_warrior.png",
        level: 60
      }
    },
    viktor: {
      real: {
        name: "Viktor",
        img: "",
        roles: "Assistant Enchanter, Assistant Tailor"
      },
      game: {
        name: "<Undecided>",
        img: "uther.png",
        class: "Warlock",
        spec: "Destruction",
        classIcon: "warlock.png",
        specIcon: "destruction.png",
        level: 60
      }
    },
    jesper: {
      real: {
        name: "Jesper",
        img: "",
        roles: ""
      },
      game: {
        name: "Chucky",
        img: "uther.png",
        class: "Warrior",
        spec: "Fury",
        classIcon: "warrior.png",
        specIcon: "fury.png",
        level: 60
      }
    }
  };

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
});
