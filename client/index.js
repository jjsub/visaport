(function(){
  'use strict';

  angular.module('visaPort', ['ngRoute', 'LocalForageModule', 'angular-loading-bar', 'angucomplete','jjWeatherModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/travel', {templateUrl:'/views/travel/travel.html', controller:'TravelCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login',    {templateUrl:'/views/login/login.html',       controller:'LoginCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'visaPort', storeName:'cache', version:1.0});
  }]).controller('IndexCtrl', ['$scope', '$interval', 'Travel','$http', 'Weather', function($scope, $interval, Travel, $http, Weather){
    $scope.title = 'hola';
    $scope.randomImage = function(){
    var bgImage    = ['./assets/image/SnowTracks_web.jpg', './assets/image/wings-web1.jpg'],
        shuffeled  = _.shuffle(bgImage);
      return shuffeled[0];
    };
    $scope.randomImage();
  }]);
})();

