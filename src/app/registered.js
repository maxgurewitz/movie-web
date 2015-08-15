GLOBAL.__BASE = __dirname;

var plugins = require('./plugins');

module.exports = [
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
