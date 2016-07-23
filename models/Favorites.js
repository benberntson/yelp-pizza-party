const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  User = require('../models/User'),
  business = require('../models/Business');

const favorites = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name : String,
  businesses: [business]
});

module.exports = mongoose.model('Favorites', favorites);

