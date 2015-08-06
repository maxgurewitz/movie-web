var React = require('react');
var component = require('omniscient');
var initialModel = require('./model');
var App = require('./components/app');

var model = initialModel();

function render() {
  React.render(
    <App model={model.cursor()}/>,
    document.getElementById('js-main')
  );
}

render();
model.on('swap', render);
