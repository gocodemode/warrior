// const express = require("express");
// const router = express.Router();
// const db = require("../models");

// // READ ALL WORKOUTS
// router.get("/api/workouts", (req, res) => {
//   db.Workouts.find({})
//     .then((savedWorkouts) => {
//       res.json({
//         error: false,
//         data: savedWorkouts,
//         message: "Successfully retrieved all workouts.",
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Unable to retrieve all workouts. ",
//       });
//     });
// });
// // READ ONE WORKOUT
// router.get("/api/workouts/:id", (req, res) => {
//   db.Workouts.findById(req.params.id)
//     .then((savedWorkout) => {
//       res.json({
//         error: false,
//         data: savedWorkout,
//         message: "Successfully retrieved ingredient.",
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Unable to retrieve workout. ",
//       });
//     });
// });

// // CREATE
// // Destructure req.body. 
// // Sanitize req.body
// router.post("/api/workouts", (req, res) => {
//   db.Workouts.create(req.body)
//     .then((createdWorkout) => {
//       res.json({
//         error: false,
//         data: createdWorkout,
//         message: "Successfully created new workout.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Failed to create new workout.",
//       });
//     });
// });
// // EDIT WORKOUTS
// router.put("/api/workouts/:id", (req, res) => {
//   db.Workouts.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//   })
//     .then((updatedWorkout) => {
//       res.json({
//         error: false,
//         data: updatedWorkout,
//         message: "Successfully updated workout.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Failed to update workout.",
//       });
//     });
// });

// // DELETE

// router.delete("/api/workouts/:id", (req, res) => {
//   db.Workouts.findByIdAndDelete(req.params.id)
//     .then((deletedWorkout) => {
//       res.json({
//         error: false,
//         data: deletedWorkout,
//         message: "Successfully deleted workout.",
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Failed to delete requested workout.",
//       });
//     });
// });

// module.exports = router;

const express = require("express");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Workouts
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Workouts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Workouts
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Workouts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Workouts
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
