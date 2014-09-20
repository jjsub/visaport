(function(){
  'use strict';

  angular.module('visaPort')
  .controller('TravelCtrl', ['$scope', '$interval', 'Travel', function($scope, $interval, Home){
    Home.getMessage().then(function(response){
      $scope.mean = response.data.mean;

      $interval(function(){
        $scope.mean = _.shuffle($scope.mean);
      }, 100);
    });
  }]);
})();

