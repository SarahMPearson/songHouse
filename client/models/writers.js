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

    function nuke(writer){
      return $http.delete('/writers/' + writer.writer_id);
    }

    function show(writerId){
      return $http.get('/writers/' + writerId);
    }

    function all(){
      return $http.get('/writers?limit=1000');
    }

    return {create:create, query:query, count:count, nuke:nuke, show:show, all:all};
  }]);
})();
