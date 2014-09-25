(function(){
  'use strict';

  angular.module('visaPort')
  .controller('TravelCtrl', ['$scope', '$interval', 'Travel', function($scope, $interval, Travel){
    $scope.findCountry = function(){
      Travel.findCountry($scope.countryTo).then(function(response){
        $scope.country = response.data;
      });
    };
  }]);
})();

