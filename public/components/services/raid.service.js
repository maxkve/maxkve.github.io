"use strict";

angular.module("epgpApp").service("raidService", function() {
  const raids = {
    moltencore: {
      /* Phase 1 */
      title: "Molten Core",
      img: "moltencore3.jpg",
      bosses: {
        lucifron: { name: "Lucifron", killed: false, img: "lucifron.jpg" },
        magmadar: { name: "Magmadar", killed: false, img: "magmadar.jpg" },
        gehennas: { name: "Gehennas", killed: false, img: "gehennas.jpg" },
        garr: { name: "Garr", killed: false, img: "garr.jpg" },
        shazzrah: { name: "Shazzrah", killed: false, img: "shazzrah.jpg" },
        barongeddon: { name: "Baron Geddon", killed: false, img: "barongeddon.jpg" },
        sulfuronharbinger: { name: "Sulfuron Harbinger", killed: false, img: "sulfuronharbinger.jpg" },
        golemaggtheincinerator: { name: "Golemagg", killed: false, img: "golemaggtheincinerator.jpg" },
        majordomoexecutus: { name: "Majordomo", killed: false, img: "majordomoexecutus.jpg" },
        ragnaros: { name: "Ragnaros", killed: false, img: "ragnaros.jpg" }
      }
    },
    onyxia: {
      /* Phase 1 */
      title: "Onyxia",
      img: "onyxia2.jpg",
      bosses: {
        onyxia: {
          name: "Onyxia",
          killed: false,
          img: "onyxia.jpg"
        }
      }
    }
    /*world: {
      
      title: "World Bosses",
      img: "onyxia2.jpg",
      bosses: {
        azuregos: {
          name: "Azuregos",
          killed: false,
          img: "onyxia.jpg"
        },
        kazzak: {
          name: "Kazzak",
          killed: false,
          img: "onyxia.jpg"
        }
      }
    },
    blackwinglair: {
      
      title: "Blackwing Lair",
      img: "moltencore3.jpg",
      bosses: {
        lucifron: { name: "Lucifron", killed: false, img: "lucifron.jpg" },
        magmadar: { name: "Magmadar", killed: false, img: "magmadar.jpg" },
        gehennas: { name: "Gehennas", killed: false, img: "gehennas.jpg" },
        garr: { name: "Garr", killed: false, img: "garr.jpg" },
        shazzrah: { name: "Shazzrah", killed: false, img: "shazzrah.jpg" },
        barongeddon: { name: "Baron Geddon", killed: false, img: "barongeddon.jpg" },
        sulfuronharbinger: { name: "Sulfuron Harbinger", killed: false, img: "sulfuronharbinger.jpg" },
        golemaggtheincinerator: { name: "Golemagg", killed: false, img: "golemaggtheincinerator.jpg" },
        majordomoexecutus: { name: "Majordomo", killed: false, img: "majordomoexecutus.jpg" },
        ragnaros: { name: "Ragnaros", killed: false, img: "ragnaros.jpg" }
      }
		}*/
  };

  this.getRaidsReadOnly = function() {
    return angular.copy(raids);
  };

  this.getRaids = function() {
    return raids;
  };
});
