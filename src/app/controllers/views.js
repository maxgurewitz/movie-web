module.exports.renderApp = function(request, reply) {
  reply.view('home');
};

module.exports.renderLogin = function(request, reply) {
  reply.view('login');
};
