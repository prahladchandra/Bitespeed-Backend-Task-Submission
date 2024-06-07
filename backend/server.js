const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use('/identify', contactRoutes);

// Database connection
mongoose.connect('mongodb+srv://bitespeed_identity:Pc1020304050@cluster0.usgp0uq.mongodb.net/bitespeed_identity?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Define the /identify route
app.post('/identify', async (req, res) => {
   res.send({ message: 'Identify endpoint hit!' });
});
