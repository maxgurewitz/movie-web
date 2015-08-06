exports.register = function(server, options, next) {
  server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: 'public',
        listing: true
      }
    }
  });
  next();
};

exports.register.attributes = {
  name: 'static',
  version: '1.0.0'
};
