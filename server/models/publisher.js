/* jshint camelcase:false */

'use strict';

var pg     = require('../postgres/manager');

function Publisher(){
}

Publisher.create = function(user, obj, cb){
  pg.query('select add_publisher($1, $2, $3, $4)', [user.id, obj.name, obj.address, obj.phone], function(err, results){
    cb(err, results && results.rows ? results.rows[0].add_publisher : null);
  });
};

Publisher.query = function(user, query, cb){
  pg.query('select * from query_publishers($1, $2, $3)', [user.id, query.limit || 10, query.offset || 0], function(err, results){
    console.log('publisher JS RESUTLS in query>>>>>>>>>', results);
    cb(err, results && results.rows ? results.rows : null);
  });
};

Publisher.count = function(user, cb){
  pg.query('select count(*) from publishers where user_id = $1', [user.id], function(err, results){
    console.log('SERVER WRITER.JS ERR', err);
    console.log('Server Writer.js Results', results);
    cb(err, results && results.rows ? results.rows[0].count : null);
  });
};

module.exports = Publisher;
