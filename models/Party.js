const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

let party = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  date: Date,
  businesses: [{type:Schema.Types.ObjectId, ref: 'Business'}]
});

module.exports = mongoose.model('Party',party);