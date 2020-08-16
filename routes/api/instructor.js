const router = require("express").Router();
const instructorController = require("../../controllers/instructorController");

// Matches with "/api/instructors"
router
  .route("/")
  .get(instructorController.findAll)
  .post(instructorController.create);

// Matches with "/api/instructors/:id"
router
  .route("/:id")
  .get(instructorController.findById)
  .put(instructorController.update)
  .delete(instructorController.remove);

module.exports = router;
