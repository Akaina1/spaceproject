// server.js
const express = require('express');
const cors = require('cors');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // Enable JSON parsing

// AWS SDK Configuration
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

// Routes
const videoRoutes = require('./routes/videoRoutes');
const audioRoutes = require('./routes/audioRoutes');
const photoRoutes = require('./routes/photoRoutes');

// Use routes
app.use('/api/videos', videoRoutes);
app.use('/api/audio', audioRoutes);
app.use('/api/photos', photoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});