/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('song')
  .factory('Writer', ['$rootScope', '$http', function($rootScope, $http){

    function create(writer){
      return $http.post('/writers', writer);
    }

    function query(page){
      return $http.get('/writers?limit=5&offset=' + 5 * page);
    }

    function count(){
      return $http.get('/writers/count');
    }

    return {create:create, query:query, count:count};
  }]);
})();
