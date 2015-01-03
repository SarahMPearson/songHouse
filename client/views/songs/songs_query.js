(function(){
  'use strict';

  angular.module('song')
  .controller('SongsQueryCtrl', ['$scope', '$state', 'Song', function($scope, $state, Song){
    $scope.songs = [];
    $scope.filtered = [];

    Song.query().then(function(response){
      $scope.songs = response.data.songs;
    });

  }]);
})();
