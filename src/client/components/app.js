var component = require('omniscient');
var React = require('react');
var Body = require('./body');

var App = module.exports = component(function(props) {
  return (
    <div className="app">
      <div className="header">
        Profile
      </div>
      <Body model={props.model}/>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}).jsx;
