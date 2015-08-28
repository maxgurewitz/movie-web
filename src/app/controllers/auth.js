module.exports.login = function(request, reply) {
  if(request.auth.isAuthenticated) {
    reply({ error: { message: 'Already logged in' } }).code(400);
  } else {
    request.auth.session.set({ userId: 1 });
    reply.redirect('/');
  }
};

module.exports.logout = function(request, reply) {
  request.auth.session.clear();
  reply.redirect('/login');
};
