/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('song')
  .factory('Publisher', ['$rootScope', '$http', function($rootScope, $http){

    function create(publisher){
      return $http.post('/publishers', publisher);
    }

    function query(page){
      return $http.get('/publishers?limit=5&offset=' + 5 * page);
    }

    function count(){
      return $http.get('/publishers/count');
    }

    return {create:create, query:query, count:count};
  }]);
})();
