const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const connection = require('./dbConfig');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateRandomString = () => {
  return crypto.randomBytes(16).toString('hex');
};

router.post('/login', (req, res, next) => {
  const { emailAddress, password } = req.body;
  const sqlStatement = 'SELECT * FROM users WHERE userID = ?';
  connection.query(sqlStatement, [emailAddress], (error, results) => {
    if (error) {
      console.error('Error Logging User In: ', error);
      res
        .status(500)
        .send({ message: 'Internal Server Error. Please try again.' });
    } else {
      const userID = results[0].userID;
      const userPassword = results[0].userPassword;

      bcrypt.compare(password, userPassword, (error, results) => {
        if (results === true) {
          const randomString = generateRandomString();
          console.log('Random String: ', randomString);
          //TODO: Correct error with expiresIn option, causing server to crash.
          const token = jwt.sign(emailAddress, randomString, {
            expiresIn: 86400000,
          });
          console.log('Token: ', token);
          res.cookie('access_token', token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
          });
          res.status(200).send({ message: 'Authentication Successful' });
        } else {
          res.status(401).send({
            message:
              'Incorrect Username or password. Please check and login again. ',
          });
        }
      });
    }
  });
});

module.exports = router;
