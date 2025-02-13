//Entry point for our api
import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

//Importing the router
import router from './routes/product.route.js';

dotenv.config();

const app = express();

//Using the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//The products API
const productRouter = router;

app.use('/products', productRouter);

app.listen(5000, () => {
  connectDB();
  console.log('Server started at http://localhost:5000');
});
