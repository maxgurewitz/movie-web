var _ = require('lodash');
var bluebird = require('bluebird');
var bCrypt = bluebird.promisifyAll(require('bcrypt-nodejs'));
var models = require(__BASE + '/models');
var validationError = require('sequelize').prototype.ValidationError;

module.exports.login = function(request, reply) {
  if (request.auth.isAuthenticated) {
    reply({ error: { message: 'Already logged in' } }).code(400);
  } else {
    request.auth.session.set({ userId: 1 });
    reply.redirect('/');
  }
};

module.exports.register = function(request, reply) {
  if (request.auth.isAuthenticated) {
    reply.redirect('/');
  } else {
    models.user
      .findOne({ where: { userName: request.payload.user.userName } })
      .then(function(user) {
        return user ?
          Promise.reject({ isUserAlreadyExistsError: true }) :
          bCrypt.hashAsync(request.payload.user.password, null, null);
      })
      .then(function(encryptedPassword) {
        var user = _.set(_.clone(request.payload.user), 'password', encryptedPassword);
        return models.user.create(user);
      })
      .then(function(user) {
        request.auth.session.set({ userId: user.id });
        reply.redirect('/');
      })
      .catch(function(err) {
        return !!err.isUserAlreadyExistsError;
      }, function(err) {
        reply.redirect('/login');
      })
      .catch(validationError, function(err) {
        reply.redirect('/register');
      });
  }
};

module.exports.logout = function(request, reply) {
  request.auth.session.clear();
  reply.redirect('/login');
};
