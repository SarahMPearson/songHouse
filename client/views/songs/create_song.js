(function(){
  'use strict';

  angular.module('song')
  .controller('SongsCtrl', ['$scope', '$state', 'Writer', function($scope, $state, Writer){
    $scope.song = {};
    $scope.song.writers = [];


    function listWriters(){
      Writer.all().then(function(response){
        console.log('create_song.js repsonse', response);
        $scope.writers = response.data.writers;
      });
    }

    listWriters();

    $scope.addWriter = function(writer, percentage){
      writer.percentage = percentage;
      $scope.song.writers.push(writer);
    };
  }]);
})();
