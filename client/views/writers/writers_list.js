(function(){
  'use strict';

  angular.module('song')
  .controller('WritersListCtrl', ['$scope', '$state', 'Writer', 'Publisher', function($scope, $state, Writer, Publisher){
    $scope.pages = 0;
    $scope._ = _;


    function query(){
      Writer.query($state.params.page * 1 || 0).then(function(response){
        $scope.writers = response.data.writers;
      });
    }

    query();

    function listPubs(){
      Publisher.all().then(function(response){
        $scope.publishers = response.data.publishers;
      });
    }

    listPubs();

    Writer.count().then(function(response){
      $scope.total = response.data.count * 1;
      $scope.pages = Math.ceil($scope.total / 5);
    });

    $scope.nuke = function(writer){
      Writer.nuke(writer).then(function(response){
        $state.reload();
      });
    };

    $scope.isCurrent = function(page){
      return page === $state.params.page * 1;
    };

    $scope.create = function(writer){
      Writer.create(writer).then(function(response){
        $scope.person = {};
        query();
      });
    };
  }]);
})();
