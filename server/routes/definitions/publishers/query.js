'use strict';

var Joi     = require('joi'),
  Publisher = require('../../../models/publisher');

module.exports = {
  description: 'Query Publishers',
  tags:['publishers'],
  validate: {
    query: {
      limit: Joi.number(),
      offset: Joi.number()
    }
  },
  handler: function(request, reply){
    Publisher.query(request.auth.credentials, request.query, function(err, publishers){
      reply({publishers:publishers}).code(err ? 400 : 200);
    });
  }
};
