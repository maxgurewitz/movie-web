var srcSettings = require(__BASE + '/../settings.json');
var viewsController = require(__BASE + '/controllers/views');

var appRoutes =
  srcSettings
    .viewRoutes
    .map(function(path) {
      return {
        method: 'GET',
        path: path,
        auth: {
          mode: 'try',
          strategy: 'session'
        },
        handler: viewsController.renderApp
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
    handler: viewsController.renderLogin
  });
  server.route(appRoutes);
  next();
};

exports.register.attributes = {
  name: 'views',
  version: '1.0.0'
};
