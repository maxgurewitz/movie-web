var controller = require(__BASE + '/controllers/auth');

exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/login',
    handler: controller.login,
    config: {
     controller: login,
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
    handler: controller.logout
  });
  next();
};

exports.register.attributes = {
  name: 'auth',
  version: '1.0.0'
};
