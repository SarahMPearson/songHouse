(function(){
  'use strict';

  angular.module('song')
  .controller('PubDetailCtrl', ['$scope', '$state', 'Publisher', function($scope, $state, Publisher){
    //$scope.moment = moment;

    Publisher.show($state.params.writerId).then(function(response){
      $scope.writer = response.data;
    });

  }]);
})();
