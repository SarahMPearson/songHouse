'use strict';

var Joi  = require('joi'),
    Song = require('../../../models/song');

module.exports = {
  description: 'Create a song',
  tags:['song'],
  validate: {
    payload: {
      title: Joi.string().required(),
      doc: Joi.date().required(),
      writers: Joi.array().min(1)
    }
  },
  handler: function(request, reply){
    console.log('server/def/songs create.js request', request.payload);
    Song.create(request.auth.credentials, request.payload, function(err, songId){
      console.log('server/definitions/songs create.js err', err);
      console.log('SERVER DEF song CREATE.JS REQUEST.AUTH.CREDENTIALS', request.auth.credentials);
      console.log('server/definitions/songs create.js request.payload.title', request.payload.title);
      console.log('server/definitions/songs create.js request.payload.doc', request.payload.doc);
      //console.log('SERVER DEF PUBLISHER CREATE.JS publisherId', publisherId);
      reply({songId:songId}).code(err ? 400 : 200);
    });
  }
};
