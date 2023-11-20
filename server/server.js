const express = require('express');
const app = express();
const cors = require('cors');
const imageRouter = require('./routes/images');
const userRouter = require('./routes/newUser');

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/', imageRouter, userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
