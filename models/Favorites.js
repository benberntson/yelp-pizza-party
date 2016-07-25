const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  User = require('../models/User'),
  business = require('../models/Business');

const favorites = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  businesses: [business]
});

favorites.post('remove', (favs) => {
    User.findById(favs.user,(err,usr) => {
      user.favorites.pull(favs);
      user.save();
    });
});

module.exports = mongoose.model('Favorites', favorites);

