const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  color: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Cat', schema);
