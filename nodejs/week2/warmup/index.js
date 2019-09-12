const express = require("express");
const app = express();

//GET /numbers/add?first=<number here>&second=<number here>.
//                    In response send sum (first + second).
app.get("/numbers/add", function(req, res) {
  console.log("add numbers");
  res.send(`${eval(req.query.first) + eval(req.query.second)}`);
});

//GET /numbers/multiply/<first number here>/<second number here>.
//              in response send multiplication (first * second).
app.get("/multiply/:firstNumber/:secondNumber", function(req, res) {
  console.log("multiply numbers");
  res.send(`${req.params.firstNumber * req.params.secondNumber}`);
});

// port
app.listen(3000, function() {
  console.log("server started");
});
