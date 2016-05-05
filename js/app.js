"use strict";

(function(){
  angular
    .module("wdiRadio", [
      "ui.router"])
    .config([
      "$stateProvider",
      RouterFunction
    ]).controller("SongsIndexController", [
      SongsIndexControllerFunction
    ])


    function SongsIndexControllerFunction(){
      // console.log("I'm the controller for songs index!");
      this.songs = "These are some songs.";
    }

    function RouterFunction($stateProvider){
      $stateProvider
      .state("homepage", {
        url:"/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongsIndexController",
        controllerAs: "SongIndexViewModel"
      })
      .state("songsShow", {
        url:"/songs/:id",
        templateUrl: "js/songs/show.html"
      });
    }
})();
