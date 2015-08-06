var immstruct = require('immstruct');
var _ = require('lodash');

module.exports = function initialModel(args) {
  var defaults = {
    user: {
      firstName: 'Maxwell',
      lastName: 'Hammer',
    }
  };
  return immstruct('model', _.assign(defaults, args));
};
