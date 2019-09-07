const express = require ('express');
const router = express.Router ();

const meals = require('../data/meals.json');
const reservations = require('../data/reservations.json');

router.get('/meals', function (req, res) {
    const randomMeal=meals[Math.floor(Math.random() * meals.length)]
    let meal='';
    let listOfEmails=reservations.filter(reservation => reservation.mealId=randomMeal.id).map(item=>item.email)
    let emailString = listOfEmails.join(', ');
    if(emailString === ''){
        meal = randomMeal.Title;
    }
    else{
        meal = `${randomMeal.Title}: ${emailString}`;
    }   

    res.json(meal);
})



module.exports = router;