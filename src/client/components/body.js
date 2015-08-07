var component = require('omniscient');
var React = require('react');
var _ = require('lodash');

var ROW_WIDTH = 2;
var ROW_COUNT = 2;

function movieCell(movie) {
  return (
    <div className="movie-cell">
      <image className="home-image" src={movie.thumbnail}></image>
    </div>
  );
}

function movieCell2(movie) {
  return (
    <figure className="movie-cell">
      <image className="home-image" src={movie.thumbnail}></image>
    </figure>
  );
}

function movieRow(rowNumber, movies) {
  var movieCells = _.times(ROW_WIDTH, function(cellNumber) {
    var movieIndex = cellNumber + ROW_WIDTH*rowNumber;
    var movie = movies[movieIndex];
    return movieCell(movie);
  });

  return (
    <div className="movie-row"> {movieCells} </div>
  );
}

var Body = module.exports = component(function(props) {
  var movies = props.model.getIn(['home', 'movies']);
  var movieRows = _.times(ROW_COUNT, function(rowNumber) {
    return movieRow(rowNumber, movies);
  });

  var movieCells = _.times(4, function(i) {
    return movieCell2(movies[i]);
  });

  return (
    <div className="body">
      {movieCells}
    </div>
  );
}).jsx;
