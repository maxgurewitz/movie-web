module.exports.renderApp = function(request, reply) {
  reply.view('home');
};

module.exports.renderLogin = function(request, reply) {
  if(request.auth.isAuthenticated) {
    reply.redirect('/');
  } else {
    reply.view('login');
  }
};

module.exports.renderRegister = function(request, reply) {
  if(request.auth.isAuthenticated) {
    reply.redirect('/');
  } else {
    reply.view('register');
  }
};

module.exports.renderServerError = function(request, reply) {
  reply.view('serverError');
}
