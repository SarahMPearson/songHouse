/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('song')
  .factory('Song', ['$rootScope', '$http', function($rootScope, $http){

    function create(song){
      return $http.post('/songs', song);
    }

    return {create:create};
  }]);
})();
