'use strict';
const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passwordHash = require('password-hash'),
  mongooseUniqueValidator = require('mongoose-unique-validator');

var user = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  parties: [{ type: Schema.Types.ObjectId, ref: 'Party' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Favorites' }]
});

user.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', user);

