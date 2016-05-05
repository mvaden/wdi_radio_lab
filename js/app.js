"use strict"

function(){
  angular
    .module("wdiRadio",[
      "ui.router"
    ])
    .config("somename2",[
      "$stateProvider",
      RouterFunc
    ])

    function RouterFunc($stateProvider){
      $stateProvider
      .state("home", {
        url: "",
        template: "Checkout my favorite trackz!!!"
      })
      .state("songs", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongsIndexController",
        controllerAs: "SongsIndexViewModel"
      })
      .state("newSong", {
        url: "/songs/new",
        templateUrl: "js/songs/new.html",
        controller: "SongsNewController",
        controllerAs: "SongsNewViewModel"
      })
      .state("songsShow", {
        url: "/songs/:id",
        templateUrl: "js/songs/show.html",
        controller: "SongsShowController",
        controllerAs: "SongsShowViewModel"
      })
      .state("editSong", {
        url: "/songs/:id/edit",
        templateUrl: "js/songs/edit.html",
        controller: "SongsEditController",
        controllerAs: "SongsEditViewModel"
      });
    };
}
