"use strict";

angular.module("epgpApp").service("roleService", function() {
  let roles = {
    guildmaster: {
      title: "Guild Master",
      img: "public/assets/icons/cowboy.png",
      description:
        "Responsible for responding to member questions, concerns and feedback, facilitating the effectiveness of operational roles, managing the guild bank, and otherwise ensuring a smoothly operating guild. Handles any miscellaneous issues that fall outside the responsibilities of the other roles."
    },
    recruitmentmanager: {
      title: "Recruitment Manager",
      img: "public/assets/icons/account-search.png",
      description:
        "Responsible for making sure the overall guild roster is balanced and complete, handling continuous recruitment, conducting interviews, and reviewing applications."
    },
    webmaster: {
      title: "Webmaster",
      img: "public/assets/icons/desktop-tower-monitor.png",
      description: "Responsible for managing the website and addon pack."
    },
    raidmanager: {
      title: "Raid Manager",
      img: "public/assets/icons/puzzle.png",
      description:
        "Responsible for creating raid events, managing waiting lists, inviting people to the raid group(s), ensuring the raid group(s) is properly balanced for the intended raid, and adding (or removing) EP during raid. Communicates with the Raid Leader to ensure that the raid group is built appropriately for the given raid."
    },
    lootmanager: {
      title: "Loot Manager",
      img: "public/assets/icons/gift-outline.png",
      description:
        "Responsible for loot distribution, checking potential loot recipients against the EPGP-database and making sure the right person (relevant class + highest PR) gets the right item. Tallies GP during raid."
    },
    raidleader: {
      title: "Raid Leader",
      img: "public/assets/icons/bullhorn-outline.png",
      description:
        "Responsible for organizing the raid groups, communicating strategy, and co-ordinating the raid group during the raid. Also, as a group responsible for making guild-wide default strategy decisions affecting all raid groups running a given raid (ensuring that raid groups operate somewhat similarly). The Raid Leaders decide amongst themselves who will be leading the raid for the night. Communicates with the Raid Manager to ensure that the raid group is built appropriately for the given raid."
    },
    tank: {
      title: "Tank",
      img: "public/assets/icons/shield.png",
      description: "Responsible for showing up a lot and taking big hits to the face. We have 1 designated Main Tank, and several Off-tanks."
    },
    guildofficer: {
      title: "Guild Officer",
      img: "public/assets/icons/crown.png",
      description:
        "Responsible for upholding the standards expected of all guild members, responding to member questions, concerns and feedback and making sure all members feel welcome."
    },
    classleader: {
      title: "Class Leader",
      img: "public/assets/icons/chart-areaspline.png",
      description: "Responsible for adressing any class questions regarding his/her class, advising in gear and/or talent choices, skill rotations, etc."
    },
    guildcrafter: {
      title: "Guild Crafter",
      img: "public/assets/icons/hand-saw.png",
      description: "Responsible for high-end crafts within their various discipline, free of charge, to any guild member able to provide materials."
    }
  };

  this.getRolesReadOnly = function() {
    return angular.copy(roles);
  };

  this.getRoles = function() {
    return roles;
  };
});