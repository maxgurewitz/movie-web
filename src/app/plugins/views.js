var srcSettings = require(__BASE + '/../settings.json');
var viewController = require(__BASE + '/controllers/views');

var routes =
  srcSettings
    .viewRoutes
    .map(function(path) {
      return {
        method: 'GET',
        path: path,
        handler: viewController
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
  server.route(routes);
  next();
};

exports.register.attributes = {
  name: 'views',
  version: '1.0.0'
};
