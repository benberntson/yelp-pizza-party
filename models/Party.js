const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      business = require('./Business');

let party = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  notes: [String],
  name: String,
  date: Date,
  businesses: [business]
});

module.exports = mongoose.model('Party', party);