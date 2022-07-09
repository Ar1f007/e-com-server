const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db/connect');

const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/auth');

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Welcome to shopin');
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log('Server running'));
  } catch (error) {
    console.log(error);
  }
};

start();
