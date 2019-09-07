const express = require("express");
const app = express();

//Route
const mealsRouter = require("./routes/meals.js");
const cheapMealsRouter = require("./routes/cheapMeals.js");
const largeMealsRouter = require("./routes/largeMeals.js");
const randomMealRouter = require("./routes/randomMeal.js");
const reservationRouter = require("./routes/reservations.js");
const randomReservationRouter = require("./routes/randomReserv.js");

app.use("/meals", mealsRouter);
app.use("/cheapmeals", cheapMealsRouter);
app.use("/largemeals", largeMealsRouter);
app.use("/meal", randomMealRouter);
app.use("/reservations", reservationRouter);
app.use("/reservation", randomReservationRouter);

// Server
const server = app.listen(3000, function() {
  console.log("The app is listening at 3000");
});
