'use strict';

var Joi     = require('joi'),
  Publisher = require('../../../models/publisher');

module.exports = {
  description: 'Delete a publisher',
  tags:['publisher'],
  validate: {
    params: {
      publisherId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Publisher.nuke(request.auth.credentials, request.params.publisherId, function(err, publisherId){
      reply({publisherId:publisherId}).code(err ? 400 : 200);
    });
  }
};
