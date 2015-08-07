var Promise = require('bluebird');
var model = require('./model');

module.exports = {
  getMovies: function () {
    model.cursor().setIn(['home', 'movies'], [
      {thumbnail: 'http://i.imgur.com/Db0pSZS.jpg'},
      {thumbnail: 'http://i.imgur.com/0pi3WHY.jpg'},
      {thumbnail: 'http://i.imgur.com/6FK482Z.jpg'},
      {thumbnail: 'http://i.imgur.com/T9nAMrU.jpg'},
    ]);
  }
};
