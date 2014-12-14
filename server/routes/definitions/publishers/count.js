'use strict';

var Publisher = require('../../../models/publisher');

module.exports = {
  description: 'Count all the Publishers by User',
  tags:['publishers'],
  handler: function(request, reply){
    Publisher.count(request.auth.credentials, function(err, count){
      reply({count:count}).code(err ? 400 : 200);
    });
  }
};
