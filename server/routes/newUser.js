const express = require('express');
const router = express.Router();

//TODO: Create functions for saving the data into the database with mysql2.
//TODO: When password is salted, unsalt password here. Research if unsalted password should be stored in the database, I doubt that though.
router.post('/create-user', (req, res, next) => {
  const { emailAddress, password } = req.body;

  //TODO: If account is successfully created on MySQL database, this is response to front end.
  res.status(201).send({ message: 'Account successfully created.' });

  //TODO: If account already exists, send error 409 with message.
});

module.exports = router;
