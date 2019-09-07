const express = require('express');
const router = express.Router();

const reservations = require('../data/reservations.json');

router.get('/reservations', function (req, res) {
    res.json(reservations);
})

module.exports = router;