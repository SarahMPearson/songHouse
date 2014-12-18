'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',                     config: require('../definitions/static/angular')},
  {method: 'post',   path: '/register',                     config: require('../definitions/users/register')},
  {method: 'post',   path: '/login',                        config: require('../definitions/users/login')},
  {method: 'delete', path: '/logout',                       config: require('../definitions/users/logout')},
  {method: 'get',    path: '/status',                       config: require('../definitions/users/status')},
  {method: 'post',   path: '/writers',                      config: require('../definitions/writers/create')},
  {method: 'get',    path: '/writers',                      config: require('../definitions/writers/query')},
  {method: 'get',    path: '/writers/{writerId}',           config: require('../definitions/writers/show')},
  {method: 'delete', path: '/writers/{writerId}',           config: require('../definitions/writers/nuke')},
  {method: 'get',    path: '/writers/count',                config: require('../definitions/writers/count')},
  {method: 'post',   path: '/publishers',                   config: require('../definitions/publishers/create')},
  {method: 'get',    path: '/publishers',                   config: require('../definitions/publishers/query')},
  {method: 'get',    path: '/publishers/{publisherId}',     config: require('../definitions/publishers/show')},
  {method: 'delete', path: '/publishers/{publisherId}',     config: require('../definitions/publishers/nuke')},
  {method: 'get',    path: '/publishers/count',             config: require('../definitions/publishers/count')},
  {method: 'post',   path: '/songs',                        config: require('../definitions/songs/create')}
];
