const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoute'); // Import admin routes
// ^yesma import chai Require lekhera garcha
// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.DB_PORT || 3005;

// Use CORS for cross-origin requests
app.use(cors());

// Use admin routes
app.use('/admin', adminRoutes); // Set up the /admin route
// app.use('/student', studentRoutes); Set up the student exmaple

// ani last ma ayera server.js ma API Endpoint use matra garna dine ho. Yo file ma 50 lines of code vanda dherai hudaina
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
