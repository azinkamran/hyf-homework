const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");
const bodyParser = require ('body-parser');

router.use (bodyParser.urlencoded ({extended: false}));
router.use (bodyParser.json ());

router.get("/", (request, response) => {
  pool.query("some sql query", function(error, results, fields) {
    response.json({});
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
});

// Post new meal
router.post ('/add-meal', (req, res) => {
    const meal = req.body;
    pool.query ('insert into meal set ?;', meal, (err, result, query) => {
      if (err) {
        console.error ('this is the error', err);
      } else {
        res.send ('Meal added');
      }
    });
  });
  
  // Get meal by id
  router.get ('/:id', (req, res) => {
    const mealId = req.params.id;
    pool.query (
      'select * from meal where id = ?;',
      mealId,
      (err, result, query) => {
        if (err) {
          console.error (err);
        } else {
          res.send (result);
        }
      }
    );
  });
  
  // Update meal by id
  router.put ('/:id', (req, res) => {
    const mealId = req.params.id;
    pool.query (
      'update meal set title = ?, description = ?, location = ?, when = ?, max_reservations = ?, price = ?, created_date = ? where id = ?;',
      [
        req.body.title,
        req.body.description,
        req.body.location,
        req.body.when,
        req.body.max_reservations,
        req.body.price,
        req.body.created_date,
        mealId,
      ],
      (err, result, query) => {
        if (err) {
          console.error (err);
        } else {
          res.send ('Meal has been updated.');
        }
      }
    );
  });
  
  // Delete meals by id
  router.delete ('/:id', (req, res) => {
    const mealId = req.params.id;
    pool.query (
      'delete from meal where id = ?;',
      mealId,
      (err, results, query) => {
        if (err) {
          console.error (err);
        } else {
          res.send ('Meal has been deleted.');
        }
      }
    );
  });
  
  // Get meals that has smaller price than maxPrice
  router.get ('/', (req, res) => {
    const maxPrice = req.query.maxPrice;
    console.log ('hello');
    pool.query (
      'select * from meal where price <= ?',
      maxPrice,
      (err, results, query) => {
        if (err) {
          console.error (err);
        } else {
          res.send (results);
        }
      }
    );
  });

module.exports = router;