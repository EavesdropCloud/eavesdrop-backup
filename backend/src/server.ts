import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import apiRouter from './routers/apiRouter';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', apiRouter);

//Connect to database
const db_url = process.env.DB_URL;

mongoose.connect(db_url);
const database = mongoose.connection;

database.on('error',  (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database connected');
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});