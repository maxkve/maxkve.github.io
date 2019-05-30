"use strict";

angular.module("epgpApp").service("roleService", function() {
  let roles = {
    guildmaster: {
      title: "Guild Master",
      whois: "Vector, assistant GM is Wezzi",
      img: "public/assets/dps.png",
      description:
        "Responsible for responding to member questions, concerns and feedback, facilitating the effectiveness of operational roles, managing the guild bank, and otherwise ensuring a smoothly operating guild. Handles any miscellaneous issues that fall outside the responsibilities of the other roles."
    },
    recruitmentmanager: {
      title: "Recruitment Manager",
      whois: "Controlfreak",
      img: "public/assets/dps.png",
      description:
        "Responsible for making sure the overall guild roster is balanced and complete, handling continuous recruitment, conducting interviews, and reviewing applications."
    },
    webmaster: {
      title: "Webmaster",
      whois: "Vector",
      img: "public/assets/dps.png",
      description: "Responsible for managing the technical eco-system, including website and addon suite."
    },
    raidmanager: {
      title: "Raid Manager",
      whois: "(vacant)",
      img: "public/assets/dps.png",
      description:
        "Responsible for creating raid events, managing waiting lists, inviting people to the raid group(s), ensuring the raid group(s) is properly balanced for the intended raid, and adding (or removing) EP during raid. Communicates with the Raid Leader to ensure that the raid group is built appropriately for the given raid."
    },
    lootmanager: {
      title: "Loot Manager",
      whois: "Ohhstar, assistant LM is Vector",
      img: "public/assets/dps.png",
      description:
        "Responsible for loot distribution, checking potential loot recipients against the EPGP-database and making sure the right person (relevant class + highest PR) gets the right item. Tallies GP during raid."
    },
    raidleader: {
      title: "Raid Leader",
      whois: "Zorn, assistant RLs are Wezzi and Hanke",
      img: "public/assets/dps.png",
      description:
        "Responsible for organizing the raid groups, communicating strategy, and co-ordinating the raid group during the raid. Also, as a group responsible for making guild-wide default strategy decisions affecting all raid groups running a given raid (ensuring that raid groups operate somewhat similarly). As a group, responsible for selecting a single raid leader to lead a given raid (ensuring clarity in communication and direction). Communicates with the Raid Manager to ensure that the raid group is built appropriately for the given raid."
    },
    tank: {
      title: "Tank",
      whois: "MT is Wezzi, OTs are Zorn, (vacant), (vacant) and (vacant)",
      img: "public/assets/dps.png",
      description: "Responsible for taking big hits to the face. We have 1 designated Main Tank, and several Off-tanks."
    },
    guildofficer: {
      title: "Guild Officer",
      whois: "(vacant)",
      img: "public/assets/dps.png",
      description:
        "Responsible for upholding the standards expected of all guild members, responding to member questions, concerns and feedback and making sure all members feel welcome."
    },
    classleader: {
      title: "Class Leader",
      whois: "(vacant)",
      img: "public/assets/dps.png",
      description: "Responsible for adressing any class questions regarding his/her class, advising in gear and/or talent choices, skill rotations, etc."
    },
    guildcrafter: {
      title: "Guild Crafter",
      whois: "Please check in-game guild notes",
      img: "public/assets/dps.png",
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
