GLOBAL.__BASE = __dirname;

var plugins = require('./plugins');

module.exports = [
  require('hapi-auth-cookie'),
  {
    register: plugins.static,
    options: {}
  },
  {
    register: plugins.auth,
    options: {}
  },
  {
    register: plugins.views,
    options: {}
  },
];
