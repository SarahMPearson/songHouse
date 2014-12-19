'use strict';

var Joi     = require('joi'),
  Publisher = require('../../../models/publisher');

module.exports = {
  description: 'Create a Publisher',
  tags:['publisher'],
  validate: {
    payload: {
      name: Joi.string().required(),
      address: Joi.string().required(),
      phone: Joi.string().required()
    }
  },
  handler: function(request, reply){
    Publisher.create(request.auth.credentials, request.payload, function(err, publisherId){
      //console.log('sERVER DEF PUB CREATE.JS REQUEST.AUTH.CREDENTIALS', request.auth.credentials);
      //console.log('server definitions pub create.js request.payload', request.payload);
      //console.log('SERVER DEF PUBLISHER CREATE.JS publisherId', publisherId);
      reply({publisherId:publisherId}).code(err ? 400 : 200);
    });
  }
};
