'use strict';

var Joi  = require('joi'),
    Writer = require('../../../models/writer');

module.exports = {
  description: 'Show A Writer',
  tags:['writers'],
  validate: {
    params: {
      writerId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Writer.show(request.auth.credentials, request.params.writerId, function(err, writer){
      // console.log('routes err', err);
      // console.log('routes writer', writer);
      reply(writer).code(err ? 400 : 200);
    });
  }
};
