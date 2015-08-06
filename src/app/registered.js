GLOBAL.__BASE = __dirname;

var plugins = require('./plugins');

module.exports = [
  {
    register: plugins.views,
    options: {}
  },
];
