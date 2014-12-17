'use strict';

var Joi  = require('joi'),
  Publisher = require('../../../models/publisher');

module.exports = {
  description: 'Show one Publisher',
  tags:['publisher'],
  validate: {
    params: {
      publisherId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Publisher.show(request.auth.credentials, request.params.publisherId, function(err, publisher){
      reply(publisher).code(err ? 400 : 200);
    });
  }
};
