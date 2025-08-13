const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: Number,
    required: true,
    min: 0
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  categories: {
    type: [categorySchema],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
;
let User = mongoose.model('User', userSchema)
let Variable = mongoose.model('Variable', variableSchema);

module.exports = { User, Variable };