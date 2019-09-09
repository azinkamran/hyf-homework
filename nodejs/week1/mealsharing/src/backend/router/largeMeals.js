const express = require ('express');
const router = express.Router ();

const meals = require('../data/meals.json');

router.get('/largeMeals', function (req, res) {
    res.json(meals.filter(meal => {
        return meal.maxNumberOfGuests > 10;
    }));
})

module.exports = router;