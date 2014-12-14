(function(){
  'use strict';

  angular.module('song')
  .controller('PubListCtrl', ['$scope', '$state', 'Publisher', function($scope, $state, Publisher){
    $scope.publisher = {};
    $scope.pages = 0;
    $scope._ = _;

    Publisher.query($state.params.page * 1 || 0).then(function(response){
      $scope.publisher = response.data.publishers;
    });

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
        $scope.publisher = {};
        console.log(response.data);
      }, function(){
        console.log('error');
      });
    };
  }]);
})();
