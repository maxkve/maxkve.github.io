"use strict";

angular.module("epgpApp").service("rosterService", function() {
  let roster = {
    vector: {
      name: "Vector",
      class: "Mage",
      level: 60
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
