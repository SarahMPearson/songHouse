'use strict';

var Joi  = require('joi'),
    Writer = require('../../../models/Writer');

module.exports = {
  description: 'Delete Writer',
  tags:['writers'],
  validate: {
    params: {
      writerId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Writer.nuke(request.auth.credentials, request.params.noteId, function(err, writerId){
      reply({writerId:writerId}).code(err ? 400 : 200);
    });
  }
};
