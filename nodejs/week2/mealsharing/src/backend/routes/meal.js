const express = require ('express');
const router = express.Router ();

const meals = require('../data/meals.json');
let responseMeals =meals;

 router.get ('/', (req, res, next)=>{
   const parameters = {
     maxPrice : req.query.maxPrice,
     title : req.query.title,
     date : req.query.date,
     limit : req.query.limit
   }
  
   if(parameters.maxPrice){
    responseMeals = meals.filter(meal => meal.price < parameters.maxPrice);
   }
  
   if(parameters.title){
    responseMeals = meals.filter(meal =>meal.title.toLowerCase().trim().split(" ").join("") === parameters.title.toLowerCase().trim());
   }
   
   if(parameters.date){
   responseMeals = meals.filter(meal => {         
     return Date.parse(meal.createdAt) > Date.parse(parameters.date) ;
   });
  } 
  
  if (parameters.limit){
    responseMeals = meals.slice(0, parameters.limit);
    console.log(responseMeals.length);
  }
  if(responseMeals.length < 1){
    res.status(400).send("<h1>That is a bad request!</h1>");   
 }
  
  res.send (responseMeals);
 
});

module.exports = router;