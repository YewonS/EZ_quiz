const express = require('express');
const app = express();

// import db connection and initialize
const connection = require('./dbConnector');

// constant for PORT
const PORT = 5000;

app.get('/api/categories', (req, res) => {
  connection.query('SELECT * FROM categories', (error, results, fields) => {
    if (error) throw error;

    res.json(results);
  });
});

app.get('/api/categories/:id', (req, res) => {
  connection.query(
    `SELECT * FROM categories WHERE id = ${req.params.id}`,
    (error, results, fields) => {
      if (error) throw error;

      res.json(results);
    }
  );
});

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
