/* jshint camelcase:false */

'use strict';

var pg     = require('../postgres/manager');

function Publisher(){
}

Publisher.create = function(user, obj, cb){
  pg.query('select add_publisher($1, $2, $3, $4)', [user.id, obj.name, obj.address, obj.phone], function(err, results){
    //console.log('SERVER WRITER.JS writer.create results', results);
    cb(err, results && results.rows ? results.rows[0].add_publisher : null);
  });
};

Publisher.query = function(user, query, cb){
  pg.query('select * from query_publishers($1, $2, $3)', [user.id, query.limit || 10, query.offset || 0], function(err, results){
    //console.log('publisher JS RESUTLS in query>>>>>>>>>', results);
    cb(err, results && results.rows ? results.rows : null);
  });
};

Publisher.count = function(user, cb){
  pg.query('select count(*) from publishers where user_id = $1', [user.id], function(err, results){
    cb(err, results && results.rows ? results.rows[0].count : null);
  });
};

Publisher.nuke = function(user, publisherId, cb){
  pg.query('delete from publishers where id = $1 and user_id = $2 ;', [publisherId, user.id], function(err, results){
    cb(err, results && results.rows ? results.rows[0] : null);
  });
};

Publisher.show = function(user, publisherId, cb){
  //console.log(user.id);
  pg.query('select * from publishers where id = $1 and user_id = $2;', [publisherId, user.id], function(err, results){
    //console.log('server model err', err);
    //console.log('server/model:', results);
    cb(err, results && results.rows ? results.rows[0] : null);
  });
};

module.exports = Publisher;
