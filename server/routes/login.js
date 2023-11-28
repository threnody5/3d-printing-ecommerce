const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const connection = require('./dbConfig');
const jwt = require('jsonwebtoken');
// const crypto = require('crypto');

// ? Will only be useful if the crypto string is also sent to the client, to compare the jwt created here against the cookie.
// const generateRandomString = () => {
//   return crypto.randomBytes(16).toString('hex');
// };

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
        if (error) {
          console.error('Error Validating Password: ', error);
          res
            .status(500)
            .send({ message: 'Internal Server Error. Please try again.' });
        } else if (results === true) {
          const token = jwt.sign({ userID: userID }, 'test', {
            expiresIn: '24h',
          });
          res.cookie('access_token', token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: false,
          });
          res.status(200).send({ message: 'Authentication Successful' });
        } else if (results === false) {
          console.error('Incorrect Password');

          res.status(401).send({
            message: 'Incorrect Username or password. ',
          });
        }
      });
    }
  });
});

module.exports = router;
