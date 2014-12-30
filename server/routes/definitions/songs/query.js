'use strict';

var //Joi  = require('joi'),
  Song = require('../../../models/song');

module.exports = {
  description: 'Query Songs',
  tags:['songs'],
  // validate: {
  //   query: {
  //     limit: Joi.number(),
  //     offset: Joi.number()
  //   }
  // },
  handler: function(request, reply){
    Song.query(request.auth.credentials, function(err, songs){
      //console.log('server/routes/def/query.js error', err);
      //console.log('server/routes/def/query.js songs', songs);
      reply({songs:songs}).code(err ? 400 : 200);
    });
  }
};
