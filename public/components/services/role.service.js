"use strict";

angular.module("epgpApp").service("roleService", function() {
  let roles = {
    guildmaster: {
      title: "Guild Master (GM)",
      img: "cowboy.png",
      description:
        "Responsible for responding to member questions, concerns and feedback, facilitating the effectiveness of operational roles, managing the guild bank, and otherwise ensuring a smoothly operating guild. Handles any miscellaneous issues that fall outside the responsibilities of the other roles."
    },
    recruitmentmanager: {
      title: "Roster Manager (RoMa)",
      img: "account-search.png",
      description:
        "Responsible for making sure the overall guild roster is balanced and complete, handling continuous recruitment, conducting interviews, and reviewing applications."
    },
    webmaster: {
      title: "Webmaster (WM)",
      img: "desktop-tower-monitor.png",
      description: "Responsible for managing the website."
    },
    discordmanager: {
      title: "Discord Manager (DM)",
      img: "discord.png",
      description: "Responsible for managing the Discord, setting up rooms, handling roles and permissions, etc."
    },
    raidmanager: {
      title: "Raid Manager (RaMa)",
      img: "puzzle.png",
      description:
        "Responsible for creating raid events, managing waiting lists, inviting people to the raid group(s), ensuring the raid group(s) is properly balanced for the intended raid, and adding (or removing) EP during raid. Communicates with the Raid Leader to ensure that the raid group is built appropriately for the given raid."
    },
    lootmanager: {
      title: "Loot Manager (LM)",
      img: "gift-outline.png",
      description:
        "Responsible for loot distribution, checking potential loot recipients against the EPGP-database and making sure the right person (relevant class + highest PR) gets the right item. Tallies GP during raid."
    },
    raidleader: {
      title: "Raid Leader (RL)",
      img: "bullhorn-outline.png",
      description:
        "Responsible for organizing the raid groups, communicating strategy, and co-ordinating the raid group during the raid. Also, as a group responsible for making guild-wide default strategy decisions affecting all raid groups running a given raid (ensuring that raid groups operate somewhat similarly). The Raid Leaders decide amongst themselves who will be leading the raid for the night. Communicates with the Raid Manager to ensure that the raid group is built appropriately for the given raid."
    },
    healingcoordinator: {
      title: "Healing Coordinator (HC)",
      img: "ambulance.png",
      description: "Organizes raid healing and designates healing targets."
    },
    tank: {
      title: "Tank",
      img: "shield.png",
      description: "Responsible for showing up a lot and taking big hits to the face. We have 1 designated Main Tank (MT), and several Off-tanks (OT)."
    },
    guildofficer: {
      title: "Guild Officer (GO)",
      img: "crown.png",
      description:
        "Responsible for upholding the standards expected of all guild members, responding to member questions, concerns and feedback and making sure all members feel welcome."
    },
    classleader: {
      title: "Class Leader (CL)",
      img: "chart-areaspline.png",
      description: "Responsible for adressing any questions regarding his/her class, advising in gear and/or talent choices, skill rotations, etc."
    },
    guildcrafter: {
      title: "Guild Crafter (GC)",
      img: "hand-saw.png",
      description:
        "Guild Crafters are prioritized when it comes to recipes from drops. In exchange they are responsible for high-end crafts within their various disciplines, free of charge, to any guild member able to provide materials."
    },
    raider: {
      title: "Raider",
      img: "raider.png",
      description:
        "Raiders are expected to show up on our 2 main raid days, they are prioritized over Socials when it comes to spots for raids and loot from raids."
    },
    trial: {
      title: "Trial",
      img: "raider.png",
      description: "Trials are aspiring raiders undergoing a trial period before being promoted to Raider."
    },
    social: {
      title: "Social",
      img: "social.png",
      description: "Socials can play the game however they like, and can join for raids when there are spots open (if they want to)."
    }
  };

  this.getRolesReadOnly = function() {
    return angular.copy(roles);
  };

  this.getRoles = function() {
    return roles;
  };
});
