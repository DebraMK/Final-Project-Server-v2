require('dotenv').config()

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

// const Sequelize = require('sequelize');
// const sql = new Sequelize({
//     connectionString: process.env.DATABASE_URL,
//     database: process.env.POSTGRES_DB,
//     username: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     host: process.env.POSTGRES_HOST,
//     port: process.env.POSTGRES_PORT,
//     dialect: "postgres",
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//      },
// });

// var test = sql.authenticate()
//     .then(function () {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(function (err) {
//         console.log('Unable to connect to the database:', err);
//     })
//     .done();

//     module.exports = {
//         Sequelize,
//         sql,
//     };