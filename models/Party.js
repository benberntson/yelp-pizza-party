const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  User = require('./User'),
  business = require('./Business');

let party = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  notes: [String],
  name: String,
  date: Date,
  businesses: [business]
});

party.post('remove', (err, prty) => {
  User.findById(prty.user, (err, usr) => {
    user.parties.pull(prty);
    user.save();
  });
});

module.exports = mongoose.model('Party', party);