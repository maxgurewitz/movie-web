var component = require('omniscient');
var React = require('react');

var App = module.exports = component(function(props) {
  var model = props.model;

  return (
    <div className="app">
      <div className="header">
        Profile
      </div>
      <div className="body">
        Body
      </div>
    </div>
  );
}).jsx;

    // <h1>
    //   Hi {model.getIn(['user', 'firstName'])} {model.getIn(['user', 'lastName'])}
    // </h1>
