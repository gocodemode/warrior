// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/warrior"
// );

// const workoutSeed = [
//   {
//     title: "Bikram Yoga",
//     instructor: "Brian Warner",
//     synopsis:
//       "Hot yoga in a studio.",
//     date: new Date(Date.now())
//   },
//   {
//     title: "Afternoon Yoga",
//     instructor: "Greg Monroe II",
//     synopsis:
//       "Yoga in the park",
//     date: new Date(Date.now())
//   },
//   {
//     title: "Yoga in the morning",
//     instructor: "Kaleb Garrison",
//     synopsis:
//       "Yoga at sunrise.",
//     date: new Date(Date.now())
//   },
// ];

// db.Workouts
//   .remove({})
//   .then(() => db.Workout.collection.insertMany(workoutSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
