require('dotenv').config()

const Sequelize = require('sequelize');
const sql = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    flags: '-FOUND_ROWS',
    logging: false
  });

var test = sql.authenticate()
    .then(function () {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    })
    .done();

    module.exports = {
        Sequelize,
        sql,
    };