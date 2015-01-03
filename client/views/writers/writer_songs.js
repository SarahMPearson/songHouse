(function(){
  'use strict';

  angular.module('song')
  .controller('WriterSongsCtrl', ['$scope', '$state', 'Writer', function($scope, $state, Writer){
    $scope.songs = [];

    Writer.findOne($state.params.writerId).then(function(response){
      //debugger;
      $scope.songs = response.data;
    });
  }]);
})();
