// backend/server.js

const express = require('express');
const connectDB = require('./config/db');
const { shortenerurl, redirect, deleteUrl } = require('./controller/url.controller');
const cors = require('cors');  // ← Make sure this is imported

const app = express();
require('dotenv').config();

// ✅ CORS - Allow frontend to connect
app.use(cors({
  origin: 'http://localhost:5173',  // Vite default port
  credentials: true
}));

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('🚀 URL Shortener Backend is running!');
});

app.post('/testurl', shortenerurl);
app.get('/:code', redirect);
app.delete('/:code', deleteUrl);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});