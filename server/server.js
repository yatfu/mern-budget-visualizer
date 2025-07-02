const express = require('express');
const cors = require('cors');
require('dotenv').config();


// INITIALIZE EXPRESS APP
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // enable cors
app.use(express.json()); // enable json parsing

app.get('/', (req, res) => res.send('API Running')); // test route

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // start listening on port PORT

// CONNECT TO MONGODB ATLAS
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('Connection error:', err));