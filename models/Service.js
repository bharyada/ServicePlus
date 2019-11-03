const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'location',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Service = mongoose.model('service', ServiceSchema);
