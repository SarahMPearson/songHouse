(function(){
  'use strict';

  angular.module('song')
  .controller('WritersDetailCtrl', ['$scope', '$state', 'Writer', function($scope, $state, Writer){
    //$scope.moment = moment;

    Writer.show($state.params.writerId).then(function(response){
      $scope.writer = response.data;
    });

  }]);
})();
