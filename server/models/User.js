const mongoose = require('mongoose');

const variableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: Number,
    required: true
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
  variables: {
    type: [variableSchema],
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