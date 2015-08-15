exports.register = function(server, options, next) {
  next();
};

exports.register.attributes = {
  name: 'auth',
  version: '1.0.0'
};
