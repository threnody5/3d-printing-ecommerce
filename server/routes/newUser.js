const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

router.post('/create-user', (req, res, next) => {
  const { emailAddress, password } = req.body;

  bcrypt.hash(password, saltRounds, (error, hash) => {
    if (error) {
      console.error('Error Hashing Password For New Account Creation: ', error);
      res
        .status(500)
        .send({ message: 'Internal Server Error. Please try again. ' });
    } else {
      const hashedPassword = hash;

      const data = {
        userID: emailAddress,
        userPassword: hashedPassword,
      };

      connection.query(`INSERT INTO users SET ?`, data, (error, results) => {
        if (error?.errno === 1062) {
          console.error('User Already Exists: ', error);
          res.status(409).send({
            message:
              'Error adding user with that email address. That email address is already is use.',
          });
        } else if (error) {
          console.error('An Error Has Occurred: ', error);
          res.status(500).send({
            message:
              'An error has occurred creating the account. Please try again.',
          });
        } else {
          console.log('User Successfully Added.');
          res.status(201).send({ message: 'User Successfully Added.' });
          console.log('Results: ', results);
        }
      });
    }
  });
});

module.exports = router;
