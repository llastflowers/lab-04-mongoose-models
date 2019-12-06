const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  succulent: {
    type: Boolean,
    required: true
  },
  location: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Plant', schema);
