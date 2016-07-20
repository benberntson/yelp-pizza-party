const express = require('express'),      
      router = express.Router(),
      Yelp = require('yelp'),
      yelpApiKeys = require('../config/yelp/yelp-api-config.js'),
      yelp = new Yelp(yelpApiKeys);

function toSchema(data){
  return {
    total: data.total,
    businesses: data.businesses.map(business => {
      return {
        name: business.name,
        url: business.url,
        phone: business.phone,
        image_url: business.image_url,
        location: business.location,
        snippet_text: business.snippet_text,
        rating: business.rating,
        review_count: business.review_count
      }
    })
  }
}

router.get('/search/:location',function(req,res,next){

  yelp.search({
    term: 'pizza',
    location: req.params.location,
    sort: 1
  })
  .then(data => res.status(200).json((data)))
  .catch(data => res.status(400).json(data.error));

});

module.exports = router;