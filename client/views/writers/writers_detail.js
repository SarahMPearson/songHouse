(function(){
  'use strict';

  angular.module('song')
  .controller('WritersDetailCtrl', ['$scope', '$state', 'Writer', function($scope, $state, Writer){

    Writer.show($state.params.writerId).then(function(response){
      $scope.writer = response.data;
    });

    $scope.nuke = function(writer){
      console.log('client/writers_detail writer', writer);
      Writer.nuke(writer).then(function(response){
        $state.go('writers.list');
      });
    };

    $scope.showModal = function(modalId){
      $(modalId).foundation('reveal', 'open');
    };

  }]);
})();
