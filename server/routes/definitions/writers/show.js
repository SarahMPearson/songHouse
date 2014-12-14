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
    Writer.show(request.auth.credentials, request.params.noteId, function(err, writer){
      reply(writer).code(err ? 400 : 200);
    });
  }
};
