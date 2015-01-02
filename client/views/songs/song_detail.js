(function(){
  'use strict';

  angular.module('song')
  .controller('SongDetailCtrl', ['$scope', '$state', 'Song', function($scope, $state, Song){

    Song.show($state.params.songId).then(function(response){
      $scope.song = response.data;
    });

    $scope.nuke = function(song){
      //console.log('client/song_detail song', song);
      Song.nuke(song).then(function(response){
        $state.go('songs.query');
      });
    };

    $scope.showModal = function(modalId){
      $(modalId).foundation('reveal', 'open');
    };

  }]);
})();
