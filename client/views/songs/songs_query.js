(function(){
  'use strict';

  angular.module('song')
  .controller('SongsQueryCtrl', ['$scope', '$state', 'Song', function($scope, $state, Song){
    $scope.songs = [];
    $scope.moment = moment;

    // function query(){
    //   Song.query().then(function(response){
    //     console.log('Client songs_query.js response', response.data);
    //     //$scope.songs = response.data.songs;
    //   });
    // }
    //
    // query();

    Song.query().then(function(response){
      $scope.songs = response.data.songs;
    });
  }]);
})();
