const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  iso: {
    type: Number,
    required: true,
    min: 4,
    max: 20000
  },
  exposures: {
    type: Number,
    required: true,
    min: 12,
    max: 36
  }
});

module.exports = mongoose.model('Film', schema);
