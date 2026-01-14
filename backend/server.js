import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import gameRoutes from './routes/gameRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/games', gameRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}/api`);
  console.log(`📊 Excel Export: http://localhost:${PORT}/api/games/export/excel`);
});


// const express = require('express');
// const { MongoClient } = require('mongodb');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const uri = process.env.MONGODB_URI;

// const client = new MongoClient(uri);

// app.post('/api/save-game', async (req, res) => {
//   try {
//     await client.connect();
//     const database = client.db('moralStories');
//     const collection = database.collection('gameData');
    
//     const result = await collection.insertOne(req.body);
//     res.json({ success: true, id: result.insertedId });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
