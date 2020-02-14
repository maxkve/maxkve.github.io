"use strict";

angular.module("epgpApp").service("raidService", function() {
  const raids = {
    moltencore: {
      title: "Molten Core",
      img: "moltencore3.jpg",
      killCount: "10 / 10",
      phase: "Phase 1",
      bosses: {
        lucifron: { name: "Lucifron", killed: true, killDate: "2019-09-30", img: "lucifron.jpg" },
        magmadar: { name: "Magmadar", killed: true, killDate: "2019-09-30", img: "magmadar.jpg" },
        gehennas: { name: "Gehennas", killed: true, killDate: "2019-09-30", img: "gehennas.jpg" },
        garr: { name: "Garr", killed: true, killDate: "2019-09-30", img: "garr.jpg" },
        shazzrah: { name: "Shazzrah", killed: true, killDate: "2019-09-30", img: "shazzrah.jpg" },
        barongeddon: { name: "Baron Geddon", killed: true, killDate: "2019-09-30", img: "geddon.jpg" },
        sulfuronharbinger: { name: "Sulfuron Harbinger", killed: true, killDate: "2019-09-30", img: "sulfuron.jpg" },
        golemaggtheincinerator: { name: "Golemagg", killed: true, killDate: "2019-09-30", img: "golemagg.jpg" },
        majordomoexecutus: { name: "Majordomo", killed: true, killDate: "2019-09-30", img: "majordomo.jpg" },
        ragnaros: { name: "Ragnaros", killed: true, killDate: "2019-10-06", img: "ragnaros.jpg" }
      }
    },
    onyxia: {
      title: "Onyxia",
      img: "onyxia2.jpg",
      killCount: "1 / 1",
      phase: "Phase 1",
      bosses: {
        onyxia: {
          name: "Onyxia",
          killed: true,
          killDate: "2019-10-02",
          img: "onyxia.jpg"
        }
      }
    },
    world: {
      title: "World Bosses",
      img: "onyxia2.jpg",
      killCount: "0 / 2",
      phase: "Phase 2",
      bosses: {
        azuregos: {
          name: "Azuregos",
          killed: false,
          killDate: "",
          img: "azuregos.jpg"
        },
        kazzak: {
          name: "Kazzak",
          killed: false,
          killDate: "",
          img: "kazzak.jpg"
        }
      }
    },
    blackwinglair: {
      title: "Blackwing Lair",
      img: "moltencore3.jpg",
      killCount: "8 / 8",
      phase: "Phase 3",
      bosses: {
        razorgore: { name: "Razorgore", killed: true, killDate: "2020-02-13", img: "razorgore.jpg" },
        vaelastrasz: { name: "Vaelastrasz", killed: true, killDate: "2020-02-13", img: "vaelastrasz.jpg" },
        broodlord: { name: "Broodlord Lashlayer", killed: true, killDate: "2020-02-13", img: "broodlord.jpg" },
        firemaw: { name: "Firemaw", killed: true, killDate: "2020-02-13", img: "firemaw.jpg" },
        ebonroc: { name: "Ebonroc", killed: true, killDate: "2020-02-13", img: "ebonroc.jpg" },
        flamegor: { name: "Flamegor", killed: true, killDate: "2020-02-13", img: "flamegor.jpg" },
        chromaggus: { name: "Chromaggus", killed: true, killDate: "2020-02-13", img: "chromaggus.jpg" },
        nefarian: { name: "Nefarian", killed: true, killDate: "2020-02-13", img: "nefarian.jpg" }
      }
    }
  };

  this.getRaidsReadOnly = function() {
    return angular.copy(raids);
  };

  this.getRaids = function() {
    return raids;
  };
});
