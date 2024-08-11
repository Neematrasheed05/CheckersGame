const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); 
require('dotenv').config();


const PORT = process.env.PORT || 8001;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
