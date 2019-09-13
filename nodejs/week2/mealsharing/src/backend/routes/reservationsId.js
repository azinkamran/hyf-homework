const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/reservations/:id", function(req, res) {
  const paramsId = req.params.id;
  const reservationsId = reservations.find(
    reservation => reservation.Id === +paramsId
  );
  res.json(reservationsId);
});

module.exports = router;
