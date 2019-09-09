const express = require ('express');
const router = express.Router ();

const meals = require('../data/meals.json');

router.get('/cheapMeals', function (req, res) {
    res.json(meals.filter(meal => {
        return meal.price < 100;
    }));
})

module.exports = router;