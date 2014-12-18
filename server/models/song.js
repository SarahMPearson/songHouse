/* jshint camelcase:false */

'use strict';

var pg     = require('../postgres/manager');

function Song(){
}

Song.create = function(user, obj, cb){
  pg.query('select add_song($1, $2, $3)', [user.id, obj.title, obj.doc], function(err, results){
    //console.log('SERVER/models/song.JS song.create results', results);
    //console.log('server/models/song.js err', err);
    cb(err, results && results.rows ? results.rows[0].add_song : null);
  });
};

module.exports = Song;
