#!/usr/bin/env node
var Hapi = require('hapi');

var registerPlugins = require('../src/app/registerPlugins');

var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

registerPlugins(server);

server.start(function(err) {
  if (err) {
    return console.error("Failed to start server: " +  err);
  }

  console.log("Server Started.");
});
