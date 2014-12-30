(function(){
  'use strict';

  angular.module('song')
  .controller('SongsQueryCtrl', ['$scope', '$state', 'Song', function($scope, $state, Song){
    $scope.songs = [];

    Song.query().then(function(response){
      $scope.songs = response.data.songs;
    });
  }]);
})();
