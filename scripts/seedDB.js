const mongoose = require("mongoose");
const db = require("../models/index");
// const Workouts = require("../models/workouts");
// const Instructor = require("../models/instructor");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/warrior"
);

const workoutSeed = [
  {
    name: "Bikram Yoga",
    description:
      "Hot yoga in a studio.",
    location:"Columbus",
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: true
  },
  {
    name: "Afternoon Yoga",
    description:
      "Yoga in the park",
      location:"Savannah",
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: true,
      Friday: false,
      Saturday: false
  },
  {
    name: "Yoga in the morning",
    description:
      "Yoga at sunrise.",
      location:"Atlanta",
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: true,
      Thursday: false,
      Friday: false,
      Saturday: false
  },
];

db.Workouts
  .remove({})
  .then(() => db.Workouts.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
