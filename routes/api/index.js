const router = require("express").Router();
const workoutRoutes = require("./workouts");
const instructorRoutes = require("./instructor");
// const signinRoutes = require("./signin")

// // Workout routes
router.use("/workouts", workoutRoutes);

//  Instructor routes
router.use("/instructor", instructorRoutes)

// router.use("/account/signup", signinRoutes)

module.exports = router;
