
(function(){
  'use strict';

  angular.module('visaPort')
  .factory('Travel', ['$http', function($http){

    function findCountry(countryTo){
      return $http.post('/getcountry', {countryTo:countryTo});
    }
    function allCountry(){
      return $http.get('/allCountry');
    }

    return {findCountry:findCountry, allCountry:allCountry};
  }]);
})();

