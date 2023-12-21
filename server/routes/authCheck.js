const express = require('express');
const router = express.Router();
const connection = require('./dbConfig');
const jwt = require('jsonwebtoken');

router.post('/authentication-check', (req, res, next) => {
  const encryptedCookie = req.body.userDataCookie;
  const decodedCookie = jwt.verify(encryptedCookie, 'test');
  console.log('Decoded Cookie: ', decodedCookie.userID);
  const emailAddress = decodedCookie.userID;

  const sqlStatement = 'SELECT * FROM users WHERE userID = ?';
  connection.query(sqlStatement, [emailAddress], (error, results) => {
    if (error) {
      console.error('Error Validating User: ', error);
      res.status(403).send({ message: 'User authentication status rejected.' });
    } else {
      console.log('User authentication status results: ', results);
      res
        .status(200)
        .send({ message: 'User authentication status confirmed.' });
    }
  });
});

module.exports = router;
