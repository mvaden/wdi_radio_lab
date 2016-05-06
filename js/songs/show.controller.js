"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsShowController", {
    "$stateParams":
    SongsShowControllerFunction
  });

  function SongsShowControllerFunction($stateParams){
    // console.log($stateParams)
    this.song = {};
  }
}());
