const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
    min: 5
  }
});

module.exports = mongoose.model('Book', schema);
