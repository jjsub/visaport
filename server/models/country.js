'use strict';

//var bcrypt = require('bcrypt'),
  //  Mongo  = require('mongodb');

function Country(){
}

Object.defineProperty(Country, 'collection', {
  get: function(){return global.mongodb.collection('usavisarequire');}
});


Country.findByName = function(country, cb){
  Country.collection.findOne({Country:country}, cb);

};

module.exports = Country;

