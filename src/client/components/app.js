var component = require('omniscient');
var React = require('react');
var Body = require('./body');
var superagent = require('superagent-bluebird-promise');

function logout() {
  window.location = '/logout';
}

var App = module.exports = component(function(props) {
  return (
    <div className="app">
      <div className="header">
        <button onClick={logout}> Logout </button>
        Profile
      </div>
      <Body model={props.model}/>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}).jsx;
