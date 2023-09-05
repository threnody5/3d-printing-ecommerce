const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/images');

app.use(cors());
app.use('/', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
