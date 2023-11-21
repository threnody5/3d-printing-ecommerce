const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

console.log(process.env.MYSQL_HOST);

//TODO: When password is salted, unsalt password here. Research if unsalted password should be stored in the database, I doubt that though.
router.post('/create-user', (req, res, next) => {
  const { emailAddress, password } = req.body;

  const data = {
    userID: emailAddress,
    userPassword: password,
  };

  connection.query(
    `INSERT INTO users SET ?`,
    data,
    (error, results, fields) => {
      if (error) {
        console.error('Error Adding User: ', error);
        res.status(409).send({ message: 'Error Adding User.' });
      } else {
        console.log('User Successfully Added.');
        res.status(201).send({ message: 'User Successfully Added.' });
        console.log('Results: ', results);
      }
    }
  );

  //TODO: If account already exists, send error 409 with message.
});

module.exports = router;
