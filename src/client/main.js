var React = require('react');
var component = require('omniscient');
var model = require('./model');
var App = require('./components/app');
var update = require('./update');

function render() {
  React.render(
    <App model={model.cursor()}/>,
    document.getElementById('js-main')
  );
}

update.getMovies();
render();
model.on('swap', render);
