'use strict';
const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const business = new Schema({
  name: String,
  url: String,
  phone: String,
  image_url: String,
  location: {
    city: String,
    display_address: [String],
    postal_code: String,
    country_code: String,
    address: [String],
    state_code: String,
    coordinate: {
      latitude: Number,
      longitude: Number
    }
  },
  snippet_text: String,
  rating: Number,
  review_count: Number
});

module.exports = mongoose.model('Business',business);