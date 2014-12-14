(function(){
  'use strict';

  angular.module('song')
  .controller('WritersListCtrl', ['$scope', '$state', 'Writer', function($scope, $state, Writer){
    $scope.pages = 0;
    $scope._ = _;

    Writer.query($state.params.page * 1 || 0).then(function(response){
      $scope.writer = response.data.writers;
    });

    Writer.count().then(function(response){
      $scope.total = response.data.count * 1;
      $scope.pages = Math.ceil($scope.total / 5);
    });

    $scope.nuke = function(note){
      Writer.nuke(note).then(function(response){
        $state.reload();
      });
    };

    $scope.isCurrent = function(page){
      return page === $state.params.page * 1;
    };

    $scope.create = function(writer){
      $scope.count = 0;
      Writer.create(writer).then(function(response){
        $scope.writer = {};
      });
    };

  }]);
})();
