const router = require("express").Router();
const instructorsController = require("../../controllers/instructorsController");

// Matches with "/api/workouts"
router.route("/")
  .get(instructorsController.findAll)
  .post(instructorsController.create);

  module.exports = router;
