/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('song')
  .factory('Song', ['$rootScope', '$http', function($rootScope, $http){

    function create(song){
      console.log('client/models/song song', song);
      return $http.post('/songs', song);
    }

    function query(){
      //console.log('client/models/songs songs', songs);
      return $http.get('/songs/query');
    }

    return {create:create, query:query};
  }]);
})();
