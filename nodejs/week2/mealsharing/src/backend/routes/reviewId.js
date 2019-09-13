const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/reviews/:id", function(req, res) {
  const paramsId = req.params.id;
    let result = '';

    if(isNaN(+paramsId)){
        result = 'You should choose a number for a review Id';
    } else{
        result = 'Sorry. You do not have such a review';
    }

    const reviewId = reviews.find(review => review.Id === +paramsId);
    res.json(reviewId || result);
});

module.exports = router;
