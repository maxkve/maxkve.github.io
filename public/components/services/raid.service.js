"use strict";

angular.module("epgpApp").service("raidService", function () {
  const raids = {
    moltencore: {
      title: "Molten Core",
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
        ragnaros: { name: "Ragnaros", killed: true, killDate: "2019-10-06", img: "ragnaros.jpg" },
      },
    },
    onyxia: {
      title: "Onyxia",
      killCount: "1 / 1",
      phase: "Phase 1",
      bosses: {
        onyxia: {
          name: "Onyxia",
          killed: true,
          killDate: "2019-10-02",
          img: "onyxia.jpg",
        },
      },
    },
    blackwinglair: {
      title: "Blackwing Lair",
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
        nefarian: { name: "Nefarian", killed: true, killDate: "2020-02-13", img: "nefarian.jpg" },
      },
    },
    ahnqiraj: {
      title: "Ahn'Qiraj",
      killCount: "6 / 6",
      phase: "Phase 5",
      bosses: {
        skeram: { name: "The Prophet Skeram", killed: true, killDate: "2020-08-17", img: "skeram.jpg" },
        sartura: { name: "Battleguard Sartura", killed: true, killDate: "2020-08-17", img: "sartura.jpg" },
        fankriss: { name: "Fankriss the Unyielding", killed: true, killDate: "2020-08-17", img: "fankriss.jpg" },
        huhuran: { name: "Princess Huhuran", killed: true, killDate: "2020-08-17", img: "huhuran.jpg" },
        emperors: { name: "Twin Emperors", killed: true, killDate: "2020-08-17", img: "emperors.jpg" },
        cthun: { name: "C'Thun", killed: true, killDate: "2020-08-17", img: "cthun.jpg" },
      },
    },
  };

  this.getRaidsReadOnly = function () {
    return angular.copy(raids);
  };

  this.getRaids = function () {
    return raids;
  };
});
