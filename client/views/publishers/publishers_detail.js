(function(){
  'use strict';

  angular.module('song')
  .controller('PubDetailCtrl', ['$scope', '$state', 'Publisher', function($scope, $state, Publisher){

    Publisher.show($state.params.publisherId).then(function(response){
      $scope.publisher = response.data;
    });

    $scope.showModal = function(modalId){
      $(modalId).foundation('reveal', 'open');
    };

  }]);
})();
