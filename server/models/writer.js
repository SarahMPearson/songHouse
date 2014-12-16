/* jshint camelcase:false */

'use strict';

var pg     = require('../postgres/manager');

function Writer(){
}

Writer.create = function(user, obj, cb){
  pg.query('select add_writer($1, $2, $3, $4)', [user.id, obj.name, obj.phone, obj.pro], function(err, results){
    console.log('SERVER WRITER.JS writer.create results', results);
    cb(err, results && results.rows ? results.rows[0].add_writer : null);
  });
};

Writer.query = function(user, query, cb){
  pg.query('select * from query_writers($1, $2, $3)', [user.id, query.limit || 10, query.offset || 0], function(err, results){
    //console.log('WRITER JS RESUTLS in query>>>>>>>>>', results);
    cb(err, results && results.rows ? results.rows : null);
  });
};

Writer.count = function(user, cb){
  pg.query('select count(*) from writers where user_id = $1', [user.id], function(err, results){
    //console.log('SERVER WRITER.JS ERR', err);
    //console.log('Server Writer.js Results', results);
    cb(err, results && results.rows ? results.rows[0].count : null);
  });
};

module.exports = Writer;
