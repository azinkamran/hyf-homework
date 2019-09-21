const express = require("express");
const app = express();
const mealsRouter = require("./api/meals");
const reservationsRouter = require('./api/reservations.js');
const reviewsRouter = require('./api/reviews.js');
const router = express.Router();

const port = process.env.PORT || 5000;
// For week4 no need to look into this!
/* const path = require("path"); */
/* // Serve the built client html
const buildPath = path.join(__dirname, "../../dist");
app.use(express.static(buildPath)); */

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/meals", mealsRouter);
router.use('/reservations', reservationsRouter);
router.use('/reviews', reviewsRouter);

app.use("/api", router);

// For week4 no need to look into this!
/* // Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./../../dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
}); */

app.listen(port, () => console.log(`Server listening on port ${port}!`));