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

//TODO: When password is salted, unsalt password here. Research if unsalted password should be stored in the database, I doubt that though.
router.post('/create-user', (req, res, next) => {
  const { emailAddress, password } = req.body;

  bcrypt.hash(password, saltRounds, (error, hash) => {
    if (error) {
      console.error('Error Hashing Password: ', error);
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
        if (error) {
          //TODO: Figure out a way to specify if the email address already exists as a user name, if so then send an error back to the user.
          console.error('Error Adding User: ', error);
          res.status(409).send({ message: 'Error Adding User.' });
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
