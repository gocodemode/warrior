const router = require("express").Router();
const workoutRoutes = require("./workouts");
const instructorRoutes = require("./instructors");

// // Workout routes
router.use("/workouts", workoutRoutes);

//  Instructor routes
router.use("/instructors", instructorRoutes)

module.exports = router;
