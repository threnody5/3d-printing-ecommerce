const express = require('express');
const router = express.Router();

//TODO: Create functions for saving the data into the database with mysql2.
//TODO: When password is salted, unsalt password here. Research if unsalted password should be stored in the database, I doubt that though.
router.post('/create-user', (req, res, next) => {
  const { emailAddress, password } = req.body;
  res.status(200).send({ message: 'the app is working!' });
});

module.exports = router;
