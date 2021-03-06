/* jshint camelcase:false */

'use strict';

var pg     = require('../postgres/manager');

function Writer(){
}

Writer.create = function(user, obj, cb){
  pg.query('select add_writer($1, $2, $3, $4, $5)', [user.id, obj.name, obj.phone, obj.pro, obj.pub], function(err, results){
    //console.log('SERVER WRITER.JS writer.create results', results);
    //console.log('server writers.js err', err);
    cb(err, results && results.rows ? results.rows[0].add_writer : null);
  });
};

Writer.query = function(user, query, cb){
  pg.query('select * from query_writers($1, $2, $3)', [user.id, query.limit || 10, query.offset || 0], function(err, results){
    //console.log('server WRITER JS RESUTLS in query>>>>>>>>>', results);
    cb(err, results && results.rows ? results.rows : null);
  });
};

Writer.findOne = function(user, writerId, cb){
  pg.query('select * from query_by_writersId($1, $2)', [user.id, writerId], function(err, results){
    //console.log('server/model/writer writer.js err in findOne', err);
    //console.log('server/model/writer writer.JS RESUTLS in findOne>>>>>>>>>', results);
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

Writer.show = function(user, writerId, cb){
  //console.log(user.id);
  pg.query('select * from writers where id = $1 and user_id = $2;', [writerId, user.id], function(err, results){
    // console.log('server model err', err);
    // console.log('server/model:', results);
    cb(err, results && results.rows ? results.rows[0] : null);
  });
};

Writer.nuke = function(user, writerId, cb){
  //console.log('server/model/writer nuke writerId', writerId);
  pg.query('delete from writers where id = $1 and user_id = $2 ;', [writerId, user.id], function(err, results){
    cb(err, results && results.rows ? results.rows[0] : null);
  });
};

module.exports = Writer;
