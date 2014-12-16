(function(){
  'use strict';

  angular.module('song')
  .controller('PubListCtrl', ['$scope', '$state', 'Publisher', function($scope, $state, Publisher){
    $scope.pages = 0;
    $scope._ = _;

    function query(){
      Publisher.query($state.params.page * 1 || 0).then(function(response){
        $scope.publishers = response.data.publishers;
      });
    }

    query();

    Publisher.count().then(function(response){
      $scope.total = response.data.count * 1;
      $scope.pages = Math.ceil($scope.total / 5);
    });

    $scope.nuke = function(note){
      Publisher.nuke(note).then(function(response){
        $state.reload();
      });
    };

    $scope.isCurrent = function(page){
      return page === $state.params.page * 1;
    };

    $scope.create = function(publisher){
      Publisher.create(publisher).then(function(response){
        $scope.pub = {};
        query();
      });
    };
  }]);
})();
