GLOBAL.__BASE = __dirname;

var plugins = require('./plugins');

module.exports = function(server) {

  server.register(require('hapi-auth-cookie'), function (err) {
    if (err)  {
      throw new Error('Could not register auth plugin: ' + err.message);
    }

    server.auth.strategy('session', 'cookie', {
      password: 'drowssap',
      cookie: 'filmcount',
      redirectTo: '/login',
      isSecure: false
    });
  });

  server.register([
    {
      register: plugins.static,
      options: {}
    },
    {
      register: plugins.auth,
      options: {}
    },
    {
      register: plugins.views,
      options: {}
    },
  ], function(err) {
    if (err)  {
      throw new Error('Could not plugin: ' + err.message);
    }
  });
}
