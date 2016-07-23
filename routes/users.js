'use strict';
const express  = require('express'),
  router       = express.Router(),
  passwordHash = require('password-hash'),
  jwt          = require('jsonwebtoken'),
  User         = require('../models/User'),
  SECRET       = require('../config/secret');

router.post('/', function (req, res, next) {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email
  })
  user.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        error: 'A server error occurred.'
      });
    }//end if (err)

    res.status(200).json(result);
  });
});

router.post('/signin', function (req, res, next) {
  User.findOne({ email: req.body.email }, function (err, usr) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }
    if (!usr) {
      return res.status(404).json({
        error: { message: 'User could not be found' }
      });
    }
    if (!passwordHash.verify(req.body.password, usr.password)) {
      return res.status(404).json({
        error: { message: 'Invalid password' }
      });
    }
    let token = jwt.sign({ user: usr }, 'secret', { expiresIn: 7200 });
    res.status(200).json({
      token: token,
      userId: usr._id
    });
  })
});

module.exports = router;
