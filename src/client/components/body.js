var component = require('omniscient');
var React = require('react');
var _ = require('lodash');

function movieCell() {
  return (
    <div className="movieCell"> Cell </div>
  );
}

function movieRow() {
  var movieCells = _.times(2, movieCell);
  return (
    <div className="movieRow"> {movieCells} </div>
  );
}

var Body = module.exports = component(function(props) {
  var movieRows = _.times(2, movieRow);
  return (
    <div className="body">
      {movieRows}
    </div>
  );
}).jsx;
