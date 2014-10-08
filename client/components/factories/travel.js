
(function(){
  'use strict';

  angular.module('visaPort')
  .factory('Travel', ['$http', function($http){

    function findCountry(countryTo, countryFrom){
      return $http.post('/getcountry', {countryTo:countryTo, countryFrom:countryFrom});
    }
    function allCountry(){
      return $http.get('/allCountry');
    }

    return {findCountry:findCountry, allCountry:allCountry};
  }]);
})();

