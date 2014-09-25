'use strict';

var Country = require('../models/country');

exports.getCountry = function(req, res){
  Country.findByName(req.body.countryTo, function(err, country){
    res.send(country);
    res.status(200).end();
  });
};
