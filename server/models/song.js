/* jshint camelcase:false */

'use strict';

var pg     = require('../postgres/manager'),
    async  = require('async');

function Song(){
}

Song.create = function(user, payload, cb){
  pg.query('insert into songs (title, doc, user_id) values ($1, $2, $3) returning id', [payload.title, payload.doc, user.id], function(err, results){

    async.each(payload.writers, iterator, function(err){
      console.log('done!!!!!!');
      cb(err);
    });

    function iterator(writer, cb){
      pg.query('insert into percentages (percent, user_id, publisher_id, writer_id, song_id) values ($1, $2, $3, $4, $5)', [writer.percentage * 1, user.id, writer.publisher_id, writer.writer_id, results.rows[0].id], function(err, res){
        cb(err);
      });
    }
  });
};

module.exports = Song;
