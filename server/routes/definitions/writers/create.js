'use strict';

var Joi     = require('joi'),
    Writer  = require('../../../models/writer');

module.exports = {
  description: 'Create a Writer',
  tags:['notes'],
  validate: {
    payload: {
      name: Joi.string().required(),
      phone: Joi.string().required(),
      pro: Joi.string().required()
    }
  },
  handler: function(request, reply){
    Writer.create(request.auth.credentials, request.payload, function(err, writerId){
      reply({writerId:writerId}).code(err ? 400 : 200);
    });
  }
};
