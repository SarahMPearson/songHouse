'use strict';

var Joi  = require('joi'),
    Writer = require('../../../models/writer');

module.exports = {
  description: 'Query Writers',
  tags:['writers'],
  validate: {
    query: {
      limit: Joi.number(),
      offset: Joi.number()
    }
  },
  handler: function(request, reply){
    Writer.query(request.auth.credentials, request.query, function(err, writers){
      //console.log('query.js error', err);
      reply({writers:writers}).code(err ? 400 : 200);
    });
  }
};
