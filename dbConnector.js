const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'ez_quiz',
  user: 'root',
  password: 'password13'
});

// connecting to database
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to db');
});

module.exports = connection;
