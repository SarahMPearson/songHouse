(function(){
  'use strict';

  angular.module('song')
  .controller('WritersDetailCtrl', ['$scope', '$state', 'Writer', function($scope, $state, Writer){

    Writer.show($state.params.writerId).then(function(response){
      $scope.writer = response.data;
    });

  }]);
})();
