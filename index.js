const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db/connect');

const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');
const paymentRouter = require('./routes/paymentRouter');

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/carts', cartRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/checkout', paymentRouter);

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
