'use strict';

var Joi  = require('joi'),
  Song = require('../../../models/song');

module.exports = {
  description: 'Delete A Song',
  tags:['songs'],
  validate: {
    params: {
      songId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Song.nuke(request.auth.credentials, request.params.songId, function(err, songId){
      reply({songId:songId}).code(err ? 400 : 200);
    });
  }
};
