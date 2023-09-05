const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const imagePath = path.join(__dirname, '..', 'images');

router.use(express.static(imagePath));

router.get('/images/:imageName', (req, res, next) => {
  const imagePath = path.join(__dirname, '..', req.url);

  fs.access(imagePath, (error) => {
    if (!error) {
      res.sendFile(imagePath);
    } else {
      res.status(404).send('Image not found');
      console.error('Error: ', error);
    }
  });
});

module.exports = router;
