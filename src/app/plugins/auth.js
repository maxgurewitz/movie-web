var authController = require(__BASE + '/handlers/auth');

exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/login',
    handler: authController.login,
    config: {
     handler: login,
     auth: {
       mode: 'try',
       strategy: 'session'
     },
     plugins: {
       'hapi-auth-cookie': {
         redirectTo: false
       }
     }
   }
  });
  next();
};

exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/logout',
    handler: authController.logout
  });
  next();
};

exports.register.attributes = {
  name: 'auth',
  version: '1.0.0'
};
