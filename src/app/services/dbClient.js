var Sequelize = require('sequelize');

module.exports = new Sequelize('film_count_dev', 'max', null, {
  host: 'localhost',
  dialect: 'postgres',
});
