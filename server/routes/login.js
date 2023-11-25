const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
// const bcrypt = require('bcrypt');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

router.post('/login', (req, res, next) => {
  const { emailAddress, password } = req.body;
  console.log('Email Address: ', emailAddress);
  console.log('Password: ', password);
  const sqlStatement = 'SELECT * FROM users WHERE userID = ?';
  connection.query(sqlStatement, [emailAddress], (error, results) => {
    if (error) {
      console.error('Error Logging User In: ', error);
      res
        .status(500)
        .send({ message: 'Internal Server Error. Please try again.' });
    } else {
      console.log('Results From Login Request: ', results);
      //TODO: log in works, next check password sent from the front-end against encrypted password in the database
      //TODO: If there is a match, log the user in
    }
  });
});

module.exports = router;
