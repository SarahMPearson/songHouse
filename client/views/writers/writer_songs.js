(function(){
  'use strict';

  angular.module('song')
  .controller('WriterSongsCtrl', ['$scope', '$state', 'Writer', function($scope, $state, Writer){
    $scope.songs = [];

    Writer.findOne().then(function(response){
      debugger;
      $scope.songs = response.data.songs;
    });
  }]);
})();
