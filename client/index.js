(function(){
  'use strict';

  angular.module('song', ['ui.router', 'angularFileUpload'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',              {url:'/',               templateUrl:'/views/home/home.html'})
        .state('register',          {url:'/register',       templateUrl:'/views/users/users.html',                  controller:'UsersCtrl'})
        .state('login',             {url:'/login',          templateUrl:'/views/users/users.html',                  controller:'UsersCtrl'})
        .state('writers',           {url:'/writers',        templateUrl:'/views/writers/writers.html',              abstract:true})
        .state('writers.list',      {url:'?page',           templateUrl:'/views/writers/writers_list.html',         controller:'WritersListCtrl'})
        .state('writers.detail',    {url:'/{writerId}',     templateUrl:'/views/writers/writers_detail.html',       controller:'WritersDetailCtrl'})
        .state('publishers',        {url:'/publishers',     templateUrl:'/views/publishers/publishers.html',        abstract:true})
        .state('publishers.list',   {url:'?page',           templateUrl:'/views/publishers/publishers_list.html',      controller:'PubListCtrl'})
        .state('publishers.detail', {url:'/{publisherId}',  templateUrl:'/views/publishers/publishers_detail.html', controller:'PubDetailCtrl'});
      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
