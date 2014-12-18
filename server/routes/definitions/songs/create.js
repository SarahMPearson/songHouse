'use strict';

var Joi  = require('joi'),
    Song = require('../../../models/song');

module.exports = {
  description: 'Create a song',
  tags:['song'],
  validate: {
    payload: {
      title: Joi.string().required(),
      doc: Joi.date().format('MM/DD/YYYY')
    }
  },
  handler: function(request, reply){
    Song.create(request.auth.credentials, request.payload, function(err, songId){
      //console.log('sERVER DEF PUB CREATE.JS REQUEST.AUTH.CREDENTIALS', request.auth.credentials); coming back okay
      //console.log('server definitions pub create.js request.payload', request.payload); coming back okay
      //console.log('SERVER DEF PUBLISHER CREATE.JS publisherId', publisherId);
      reply({songId:songId}).code(err ? 400 : 200);
    });
  }
};
