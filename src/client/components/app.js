var component = require('omniscient');
var React = require('react');

var App = module.exports = component(function(props) {
  var model = props.model;

  return (
    <h1>
      Hi {model.getIn(['user', 'firstName'])} {model.getIn(['user', 'lastName'])}
    </h1>
  );
}).jsx;
