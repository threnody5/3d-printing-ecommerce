const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const imageRouter = require('./routes/images');
const userRouter = require('./routes/newUser');
const login = require('./routes/login');

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/', imageRouter, userRouter, login);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
