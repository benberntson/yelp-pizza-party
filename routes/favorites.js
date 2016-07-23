const express = require('express'),
  router = require.Router(),
  jwt = require('jsonwebtoken'),
  SECRET = require('../config/secret.js');

const Favorites = require('../models/Favorites'),
  User = require('../models/User');

router.get('/', (req, res, next) => {
  Favorites.find()
    .populate('user', 'email')
    .exec((err, favs) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json(favs);
    });
});

router.use('/', (req, res, next) => {
  jwt.verify(req.query.token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    next();
  });//end jwt.verify
});

router.post('/', (req, res, next) => {
  let decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, (err, usr) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    let favorites = new Favorites({
      user: usr,
      name: req.body.name,
      businesses: req.body.businesses
    });
    favorites.save((err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      usr.favorites.push(favorites);
      usr.save();
      res.status(201).json(result);
    });
  })
})

router.patch('/:id', (req, res, next) => {
  let decoded = jwt.decode(req.query.token);
  Favorites.findById(req.params.id, (err, favs) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (!favs) {
      return res.status(404).json({ error: `Favorites list not found...` });
    }
    console.log(favs.user);
    console.log(decoded.user);
    if (favs.user !== decoded.user._id) {
      return res.status(401).json({ error: 'Not authorized.' });
    }
    favs.businesses = req.body.businesses;
    favs.name = req.body.name;
    favs.save((err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(200).json(result);
    });
  });
});

router.delete('/:id', (req, res, next) => {
  let decoded = jwt.decode(req.query.token);
  Message.findById(req.params.id, (err, favs) => {
    if (err) { return res.status(500).json({ error: err }); }
    if (!favs) { return res.status(404).json({ error: 'Not found' }); }
    if (favs.user !== decoded.user._id) {
      return res.status(401).json({
        error: "Not authorized"
      })
    }


    favs.remove((err, result) => {
      if (err) {
        return res.status(404).json({ error: err });
      }
      res.status(200).json(result);
    });


  });
});

module.exports = router;