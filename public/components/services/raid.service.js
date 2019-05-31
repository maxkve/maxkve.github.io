"use strict";

angular.module("epgpApp").service("raidService", function() {
  const raids = {};

  this.getRaidsReadOnly = function() {
    return angular.copy(raids);
  };

  this.getRaids = function() {
    return raids;
  };
});
