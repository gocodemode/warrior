const router = require("express").Router();
const instructorsController = require("../../controllers/instructorsController");

// Matches with "/api/workouts"
router
  .route("/")
  .get(instructorsController.findAll)
  .post(instructorsController.create);

// Matches with "/api/workouts/:id"
router
  .route("/:id")
  .get(instructorsController.findById)
  .put(instructorsController.update)
  .delete(instructorsController.remove);

module.exports = router;
