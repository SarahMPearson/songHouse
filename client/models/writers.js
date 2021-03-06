/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('song')
  .factory('Writer', ['$rootScope', '$http', function($rootScope, $http){

    function create(writer){
      return $http.post('/writers', writer);
    }

    function query(page){
      return $http.get('/writers?limit=25&offset=' + 25 * page);
    }

    function findOne(writerId){
      return $http.get('/writers/' + writerId + '/songs');
    }

    function count(){
      return $http.get('/writers/count');
    }

    function nuke(writerId){
      return $http.delete('/writers/' + writerId);
    }

    function show(writerId){
      return $http.get('/writers/' + writerId);
    }

    function all(){
      return $http.get('/writers?limit=1000');
    }

    return {create:create, query:query, findOne:findOne, count:count, nuke:nuke, show:show, all:all};
  }]);
})();
