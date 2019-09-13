const express = require ('express');
const router = express.Router ();

const meals = require('../data/meals.json');

router.get('/meals', function (req, res) {
    res.json(meals);
})

module.exports = router;