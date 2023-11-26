const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const connection = require('./dbConfig');

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

      //TODO: If there is a match, log the user in
      bcrypt.compare(password, userPassword, (error, results) => {
        if (results === true) {
          res.status(200).send({ message: 'Authentication Successful' });
          next();
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
