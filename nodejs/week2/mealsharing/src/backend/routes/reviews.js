const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/reviews", function(req, res) {
  res.json(reviews);
});

module.exports = router;
