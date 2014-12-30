/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('song')
  .factory('Song', ['$rootScope', '$http', function($rootScope, $http){

    function create(song){
      //console.log('client/models/song song', song);
      return $http.post('/songs', song);
    }

    function query(){
      return $http.get('/songs/query');
    }

    function show(songId){
      return $http.get('/songs/' + songId);
    }

    function nuke(songId){
      return $http.delete('/songs/' + songId);
    }

    return {create:create, query:query, show:show, nuke:nuke};
  }]);
})();
