var srcSettings = require(__BASE + '/../settings.json');
var controller = require(__BASE + '/controllers/views');

var appRoutes =
  srcSettings
    .viewRoutes
    .map(function(path) {
      return {
        method: 'GET',
        path: path,
        config: {
          auth: {
            mode: 'try',
            strategy: 'session'
          }
        },
        handler: controller.renderApp
      }
    });

exports.register = function(server, options, next) {
  server.views({
    engines: {
      ejs: {
        module: require('ejs'),
        relativeTo: __BASE,
        path: 'templates'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/login',
    config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false
        }
      }
    },
    handler: controller.renderLogin
  });

  server.route({
    method: 'GET',
    path: '/server-error',
    config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false
        }
      }
    },
    handler: controller.renderServerError
  });

  server.route({
    method: 'GET',
    path: '/register',
    config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false
        }
      }
    },
    handler: controller.renderRegister
  });
  server.route(appRoutes);
  next();
};

exports.register.attributes = {
  name: 'views',
  version: '1.0.0'
};
