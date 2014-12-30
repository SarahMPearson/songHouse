'use strict';

var Joi  = require('joi'),
  Song = require('../../../models/song');

module.exports = {
  description: 'Show A Song',
  tags:['songs'],
  validate: {
    params: {
      songId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Song.show(request.auth.credentials, request.params.songId, function(err, song){
      console.log('routes err', err);
      console.log('routes/song', song);
      reply(song).code(err ? 400 : 200);
    });
  }
};
