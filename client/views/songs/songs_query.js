(function(){
  'use strict';

  angular.module('song')
  .controller('SongsQueryCtrl', ['$scope', '$state', 'Song', function($scope, $state, Song){

    // function query(){
    //   Song.query().then(function(response){
    //     console.log('Client songs_query.js response', response);
    //     //$scope.songs = response.data.songs;
    //   });
    // }

    // query();

    Song.query().then(function(response){
      console.log('Client/ songs_query.js response', response);
    });

    // $scope.song = {};
    // $scope.song.writers = [];
    // $scope.writers = [];
    //
    // $scope.create = function(song){
    //   //console.log('client/songs/create_song song', song);
    //   Song.create(song).then(function(response){
    //     //console.log('client/songs/create_song response', response);
    //     $scope.song = {};
    //     $state.reload();
    //   });
    // };
    //
    // function listWriters(){
    //   Writer.all().then(function(response){
    //     //console.log('create_song.js repsonse', response);
    //     $scope.writers = response.data.writers;
    //   });
    // }
    //
    // listWriters();
    //
    // $scope.addWriter = function(){
    //   var writer = $scope.writer;
    //   writer.percentage = $scope.percentage;
    //
    //   $scope.song.writers.push(writer);
    //   $scope.writer = {};
    //   $scope.percentage = 0;
    // };
  }]);
})();
