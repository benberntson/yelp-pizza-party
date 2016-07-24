const express = require('express'),
  router = express.Router(),
  jwt = require('jsonwebtoken'),
  SECRET = require('../config/secret.js');

const Party = require('../models/Party'),
  User = require('../models/User');

router.get('/', (req, res, next) => {
  Party.find()
    .populate('user', 'email')
    .exec((err, party) => {
      if (err) { return res.status(500).json({ error: err }); }
      res.status(200).json(favs);
    });
});

router.use('/', (req, res, next) => {
  jwt.verify(req.query.token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    next();
  });
})

router.post('/', (req, res, next) => {
  let decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, (err, usr) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    let party = new Party({
      user: user._id,
      notes: req.body.notes,
      name: req.body.name,
      date: new Date(),
      businesses: req.body.businesses
    });
    party.save((err, result) => {
      if (err) { return res.status(500).json({ error: err }); }
      usr.parties.push(party);
      usr.save();
      res.status(201).json(result);
    });
  });
});

router.patch('/:id', (req, res, next) => {
  let decoded = jwt.decode(req.query.token);
  Party.findById(req.params.id, (err, party) => {
    if (err) { return res.status(500).json({ error: err }); }
    if (!party) { return res.status(404).json({ error: 'Party not found' }); }
    console.log(party.user);
    console.log(decoded.user);
    if (party.user !== decoded.user._id) {
      return res.status(401).json({ error: 'not authorized...' });
    }
    party.businesses = req.body.businesses;
    party.notes = req.body.notes;
    party.name = req.body.name;

    party.save((err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(200).json(result);
    });
  });
});

router.delete('/:id', (req, res, next) => {
  let decoded = jwt.decode(req.query.token);
  Party.findById(req.params.id, (err, party) => {
    if (err) { return res.status(500).json({ error: err }); }
    if (!party) { return res.status(404).json({ error: 'Not found' }); }
    if (party.user !== decoded.user._id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    party.remove((err, result) => {
      if (err) { return res.status(500).json({ error: err }); }
      res.status(200).json(result);
    });
  });
});

module.exports = router;