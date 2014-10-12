(function(){
  'use strict';

  angular.module('visaPort')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope, Home){
    Home.getMessage().then(function(response){
  }]);
})();

