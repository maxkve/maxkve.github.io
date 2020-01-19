"use strict";

angular.module("epgpApp").service("raidService", function() {
  const raids = {
    moltencore: {
      title: "Molten Core",
      img: "moltencore3.jpg",
      killCount: "10 / 10",
      phase: "Phase 1",
      bosses: {
        lucifron: { name: "Lucifron", killed: true, img: "lucifron.jpg" },
        magmadar: { name: "Magmadar", killed: true, img: "magmadar.jpg" },
        gehennas: { name: "Gehennas", killed: true, img: "gehennas.jpg" },
        garr: { name: "Garr", killed: true, img: "garr.jpg" },
        shazzrah: { name: "Shazzrah", killed: true, img: "shazzrah.jpg" },
        barongeddon: { name: "Baron Geddon", killed: true, img: "geddon.jpg" },
        sulfuronharbinger: { name: "Sulfuron Harbinger", killed: true, img: "sulfuron.jpg" },
        golemaggtheincinerator: { name: "Golemagg", killed: true, img: "golemagg.jpg" },
        majordomoexecutus: { name: "Majordomo", killed: true, img: "majordomo.jpg" },
        ragnaros: { name: "Ragnaros", killed: true, img: "ragnaros.jpg" }
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
          img: "azuregos.jpg"
        },
        kazzak: {
          name: "Kazzak",
          killed: false,
          img: "kazzak.jpg"
        }
      }
    },
    blackwinglair: {
      title: "Blackwing Lair",
      img: "moltencore3.jpg",
      killCount: "0 / 7",
      phase: "Phase 3",
      bosses: {
        vaelastrasz: { name: "Vaelastrasz", killed: false, img: "vaelastrasz.jpg" },
        broodlord: { name: "Broodlord Lashlayer", killed: false, img: "broodlord.jpg" },
        firemaw: { name: "Firemaw", killed: false, img: "firemaw.jpg" },
        ebonroc: { name: "Ebonroc", killed: false, img: "ebonroc.jpg" },
        flamegor: { name: "Flamegor", killed: false, img: "flamegor.jpg" },
        chromaggus: { name: "Chromaggus", killed: false, img: "chromaggus.jpg" },
        nefarian: { name: "Nefarian", killed: false, img: "nefarian.jpg" }
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
