"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController", [
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(){
    console.log("I'm the controller for songs index!");
  }
}());
