(function(){
  'use strict';

  angular.module('song')
  .controller('PubDetailCtrl', ['$scope', '$state', 'Publisher', function($scope, $state, Publisher){

    Publisher.show($state.params.publisherId).then(function(response){
      $scope.publisher = response.data;
    });

    $scope.nuke = function(publisher){
      //console.log('client/publisher_detail publisher', publisher);
      Publisher.nuke(publisher).then(function(response){
        $state.go('publishers.list');
      });
    };

    $scope.showModal = function(modalId){
      $(modalId).foundation('reveal', 'open');
    };

  }]);
})();
