const express = require ('express');
const router = express.Router ();
const pool = require ('./../database');
const bodyParser = require ('body-parser');

router.use (bodyParser.urlencoded ({extended: false}));
router.use (bodyParser.json ());

// Get all reviews
router.get('/', (req, res) => {
    pool.query('select * from review;', (err, results, fields) => {
        if (err) {
            console.error (err);
        } else {
            res.send (results);
        }
    })
});

// Add a new review
router.post('/', (req, res) => {
    const review = req.body;
    pool.query('insert into reviews set ?', review, (err, results, fields) => {
        if (err) {
            console.error (err);
        } else {
            res.send ('Review has been added');
        }
    })
});

// Get review by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    pool.query('select * from review where id = ?', id, (err, results, fields) => {
        if (err) {
            console.error (err);
          } else if (results.length < 1) {
            res.send ('There is no such an id');
          } else {
            res.send (results);
          }
    })
});







module.exports = router;