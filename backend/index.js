const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
  })
);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  app.listen(7000, () => {
    console.log("Server running on localhost:7000");
  });