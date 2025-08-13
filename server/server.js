const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// INITIALIZE EXPRESS APP
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // enable cors
app.use(express.json()); // enable json parsing

app.get('/', (req, res) => res.send('API Running')); // test route

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // start listening on port PORT

// CONNECT TO MONGODB ATLAS
if (!process.env.MONGO_URI) { // .env error handling
  console.error("MONGO_URI not defined in .env");
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, { // connect to atlas
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('Connection error:', err));