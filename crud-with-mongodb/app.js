require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');

// Import routes
const itemRoutes = require('./routes/auth.routes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// --- Middlewares ---
// To parse JSON bodies from incoming requests
app.use(express.json());

// --- Database Connection ---
mongoose.connect(MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB! ✅'))
    .catch(err => console.error('Connection error', err));

// --- API Routes ---
// A simple welcome route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the CRUD API!" });
});

// Use the item routes for any request to /api/items
app.use('/api/items', itemRoutes);

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🚀`);
});