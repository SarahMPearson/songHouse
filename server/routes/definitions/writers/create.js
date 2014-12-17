'use strict';

var Joi     = require('joi'),
    Writer  = require('../../../models/writer');

module.exports = {
  description: 'Create a Writer',
  tags:['writers'],
  validate: {
    payload: {
      name: Joi.string().required(),
      phone: Joi.string().required(),
      pro: Joi.string().required(),
      pub: Joi.number().required()
    }
  },
  handler: function(request, reply){
    console.log('create.js server request', request.payload);
    Writer.create(request.auth.credentials, request.payload, function(err, writerId){
      console.log('SERVER DEF WRITERS CREATE.JS writerId', writerId);
      reply({writerId:writerId}).code(err ? 400 : 200);
    });
  }
};
