/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('visaPort')
  .factory('Weather', ['$http', function($http){
    function getConditions(country){
      return $http.jsonp('http://api.wunderground.com/api/f0e6fdcbf9d5f727/conditions/q/' + country + '.json?callback=JSON_CALLBACK');
    }

    return {getConditions:getConditions};
  }])
  .controller('TravelCtrl', ['$scope', '$interval', 'Travel','$http', 'Weather', function($scope, $interval, Travel, $http, Weather){

    $scope.findCountry = function(){
      Weather.getConditions($scope.countryTo).then(function(response){
        $scope.temperature = response.data.current_observation.temp_f;
        $scope.icon = response.data.current_observation.icon_url;
      });

      Travel.findCountry($scope.countryTo).then(function(response){
        console.log(response.data);
      });
    };

    Travel.allCountry().then(function(response){
     $scope.allCountry = response.data.Country;
    });
 // function geocode(address){
 //   var geocoder = new google.maps.Geocoder();
 //   geocoder.geocode({address:address}, function(results, status){
    //  var loc  = results[0].formatted_address,
    //      lat  = results[0].geometry.location.lat(),
    //      lng  = results[0].geometry.location.lng();
     // console.log(name, lat, lng);
   // });
   //
/*
  function getWeather(country){
    debugger;
    return $http.jsonp('http://api.wunderground.com/api/f0e6fdcbf9d5f727/conditions/q/' + country + '.json?callback=JSON_CALLBACK');
  }



                         var query = pos.coords.latitude +','+ pos.coords.longitude;
                         weatherApi(query);

                      function getConditions(query){
                        weatherApi.conditions($scope.couuntryTo).then(function(response){
                          $scope.temperature = response.data.current_observation.temp_f;
                          $scope.icon = response.data.current_observation.icon_url;
                        });

                      }
                      if($scope.country){getConditions($scope.country);}
                    }];
*/

  }]);
})();

