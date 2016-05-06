"use strict";

(function(){
  angular
    .module("wdiRadio", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])
    .controller("SongsIndexController", [
      '$state',
      "SongFactory",
      SongsIndexControllerFunction
    ])
    .factory("SongFactory", SongFactoryFunction);
    SongFactoryFunction.$inject = [ "$resource" ];
    function SongFactoryFunction($resource) {
      return $resource("http://localhost:3000/songs");
        // update
    }

    // SongsIndexControllerFunction.$inject = [ "SongFactory" ]
    function SongsIndexControllerFunction($state, SongFactory){
      // console.log("I'm the controller for songs index!");
      var SongIndexViewModel = this;
      SongIndexViewModel.songs = SongFactory.query();
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


    var sampleData = [
      {
        photo_url: "http://mixing.dj/wp-content/uploads/2015/07/Black-Coffee.jpg",
        artist: "DJ Black Coffee",
        title: "Superman"
      },
      {
        photo_url: "http://pinboardblog.com/wp-content/uploads/2011/07/COVER.jpg",
        artist: "Submotion Orchestra",
        title: "Suffer Not - Goth Trad Remix"
      },
    ];
})();
