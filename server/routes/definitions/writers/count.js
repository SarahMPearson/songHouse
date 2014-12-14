'use strict';

var Writer = require('../../../models/writer');

module.exports = {
  description: 'Count all Writer by User',
  tags:['notes'],
  handler: function(request, reply){
    Writer.count(request.auth.credentials, function(err, count){
      reply({count:count}).code(err ? 400 : 200);
    });
  }
};
