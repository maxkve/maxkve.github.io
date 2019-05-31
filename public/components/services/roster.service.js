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
        img: "/public/assets/uther.png",
        class: "Mage",
        classIcon: "/public/assets/mage.png",
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
        img: "/public/assets/uther.png",
        class: "Warrior",
        classIcon: "/public/assets/warrior.png",
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
        img: "/public/assets/uther.png",
        class: "Rogue",
        classIcon: "/public/assets/rogue.png",
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
        img: "/public/assets/uther.png",
        class: "Priest",
        classIcon: "/public/assets/priest.png",
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
        img: "/public/assets/uther.png",
        class: "Mage",
        classIcon: "/public/assets/mage.png",
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
        img: "/public/assets/uther.png",
        class: "Warrior",
        classIcon: "/public/assets/warrior.png",
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
        name: "Probably Something Lewd",
        img: "/public/assets/uther.png",
        class: "Warlock",
        classIcon: "/public/assets/warlock.png",
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
