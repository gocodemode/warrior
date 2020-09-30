const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/warrior");

const workoutSeed = [
  {
    name: "Bikram Yoga",
    description: "Hot yoga in a studio.",
    location: "Columbus",
    daysArray: [
      {
        value: {
          isActive: true,
          name: "Saturday",
        }
      }
    ]  
  },
  {
    name: "Afternoon Yoga",
    description: "Yoga in the park",
    location: "Savannah",
    daysArray: [
      {
        value: {
          isActive: true,
          name: "Thursday",
        }
      }
    ]
  },
  {
    name: "Hot Yoga",
    description: "Yoga in our studio!",
    location: "Augusta",
    daysArray: [
      {
        value: {
          isActive: true,
          name: "Friday",
        }
      }
    ]
  },
  {
    name: "Yoga in the morning",
    description: "Yoga at sunrise.",
    location: "Atlanta",
    daysArray: [
      {
        value: {
          isActive: true,
          name: "Wednesday",
        },
      }
    ]
  },
  {
    name: "Downward Dog Yoga",
    description: "Yoga in the park next to City Hall",
    location: "Savannah",
    daysArray: [
      {
        value: {
          isActive: true,
          name: "Sunday",
        },
      },
      {
        value: {
          isActive: true,
          name: "Tuesday",
        },
      }
    ]
  },
  {
    name: "Sunset Yoga",
    description: "Yoga in the park",
    location: "Columbus",
    daysArray: [
      {
        value: {
          isActive: true,
          name: "Monday",
        }
      }
    ]
  }
];

db.Workouts.remove({})
  .then(() => db.Workouts.collection.insertMany(workoutSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const instructorSeed = [
  {
    name: "John Smith",
    email: "john@test.com",
    password: "Test123",
  },
  {
    name: "Bob Snow",
    email: "Bob@test.com",
    password: "Test123",
  },
  {
    name: "Susan Sky",
    email: "susan@test.com",
    password: "Test123",
  },
];

db.Instructor.remove({})
  .then(() => db.Instructor.collection.insertMany(instructorSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
