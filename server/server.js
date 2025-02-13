//Entry point for our api
import express from 'express';

import { connectDB } from './config/db.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
//
app.get('/', (req, res) => {
  res.send('Hello from express');
});

app.listen(5000, () => {
  connectDB();
  console.log('Server started at http://localhost:5000');
});
