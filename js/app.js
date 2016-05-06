"use strict";

(function(){
  angular
    .module("wdiRadio", [
      "ui.router"])
    .config([
      "$stateProvider",
      RouterFunction
    ]).controller("SongsIndexController", [
      '$state',
      SongsIndexControllerFunction
    ]);

    function SongsIndexControllerFunction($state){
      // console.log("I'm the controller for songs index!");
      this.gotoIndex = function(){
        $state.go("songIndex");
      };
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
