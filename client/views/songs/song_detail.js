(function(){
  'use strict';

  angular.module('song')
  .controller('SongDetailCtrl', ['$scope', '$state', 'Song', function($scope, $state, Song){

    Song.show($state.params.songId).then(function(response){
      $scope.song = response.data;
    });

  }]);
})();
