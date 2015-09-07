var Sequelize = require('sequelize');
var dbConfig = require(__BASE + '/../db/config')[process.env.NODE_ENV];

module.exports = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dibConfig.password,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
