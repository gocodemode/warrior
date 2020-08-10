const router = require("express").Router();
const workoutRoutes = require("./workouts");

// Workout routes
router.use("/workouts", workoutRoutes);

module.exports = router;
