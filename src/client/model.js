var immstruct = require('immstruct');
var _ = require('lodash');

var defaults = {
  user: {
    firstName: 'Maxwell',
    lastName: 'Hammer'
  },
  home: {
    movies: [
    ]
  }
};
module.exports = immstruct('model', defaults);
