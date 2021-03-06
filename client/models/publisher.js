/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('song')
  .factory('Publisher', ['$rootScope', '$http', function($rootScope, $http){

    function create(publisher){
      return $http.post('/publishers', publisher);
    }

    function all(){
      return $http.get('/publishers?limit=1000');
    }

    function query(page){
      return $http.get('/publishers?limit=25&offset=' + 25 * page);
    }

    function count(){
      return $http.get('/publishers/count');
    }

    function nuke(publisherId){
      return $http.delete('/publishers/' + publisherId);
    }

    function show(publisherId){
      return $http.get('/publishers/' + publisherId);
    }

    return {create:create, all:all, query:query, count:count, nuke:nuke, show:show};
  }]);
})();
