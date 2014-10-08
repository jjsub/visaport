'use strict';

//var bcrypt = require('bcrypt'),
  //  Mongo  = require('mongodb');

function Country(){
}

Object.defineProperty(Country, 'collection', {
  get: function(){return global.mongodb.collection('usavisarequire');}
});


Country.all = function(cb){
  Country.collection.find().toArray(cb);
};

Country.findByName = function(query, cb){
  global.mongodb.collection(query.countryFrom).findOne({Country: query.countryTo}, cb);
};

module.exports = Country;

