const express = require("express");
const app = express();

//Route
const mealsRouter = require("./routes/meals.js");
const cheapMealsRouter = require("./routes/cheapMeals.js");
const largeMealsRouter = require("./routes/largeMeals.js");
const randomMealRouter = require("./routes/meal.js");
const reservationRouter = require("./routes/reservations.js");
const randomReservationRouter = require("./routes/reservation.js");

app.get("/meals", mealsRouter);
app.get("/cheapMeals", cheapMealsRouter);
app.get("/largeMeals", largeMealsRouter);
app.get("/meal", randomMealRouter);
app.get("/reservation", randomReservationRouter);
app.get("/reservations", reservationRouter);

app.get("/", function(req, res) {
  res.send(`
    <a href="/meals">../meals</a><br />
    <a href="/cheap-meals">../cheap-meals</a><br />
    <a href="/large-meals">../large-meals</a><br />
    <a href="/meal">../meal</a><br />
    <a href="/reservation">../reservation</a><br />
    <a href="/reservations">../reservations</a><br />
  `);
});

// Server
const server = app.listen(3000, function() {
  console.log("The app is listening at 3000");
});
