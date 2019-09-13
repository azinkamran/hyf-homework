const express = require ('express');
const router = express.Router ();

const meals = require('../data/meals.json');

router.get('meals/:id', function (req, res) {
    const paramsId = req.params.id;
    let result = '';

    if(isNaN(+paramsId)){
        result = 'You should choose a number for a meal Id';
    } else{
        result = 'Sorry. You do not have such meal.';
    }

    const mealId = meals.find(meal => meal.Id === +paramsId);
    res.json(mealId || result);
})



module.exports = router;