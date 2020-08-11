// const express = require("express");
// const router = express.Router();
// const db = require("../models");

// // READ ALL
// router.get("/api/workouts", (req, res) => {
//   db.Workouts.find({})
//     .then((foundWorkoutss) => {
//       res.json({
//         error: false,
//         data: foundWorkoutss,
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
// // READ ONE
// router.get("/api/workouts/:id", (req, res) => {
//   db.Workouts.findById(req.params.id)
//     .then((foundWorkouts) => {
//       res.json({
//         error: false,
//         data: foundWorkouts,
//         message: "Successfully retrieved workout.",
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
// router.post("/api/workouts", (req, res) => {
//   // TODO: sanitize req.body
//   db.Workouts.create(req.body)
//     .then((createdWorkouts) => {
//       res.json({
//         error: false,
//         data: createdWorkouts,
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
// // EDIT
// router.put("/api/workouts/:id", (req, res) => {
//   // TODO: sanitize req.body
//   // TODO: destructure request.body
//   // only bring in the fields I need.
//   // name or isVegetarian
//   db.Workouts.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//   })
//     .then((updatedWorkouts) => {
//       res.json({
//         error: false,
//         data: updatedWorkouts,
//         message: "Successfully updated workout.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Failed to updated workout.",
//       });
//     });
// });

// // DELETE

// router.delete("/api/workouts/:id", (req, res) => {
//   db.Workouts.findByIdAndDelete(req.params.id)
//     .then((result) => {
//       res.json({
//         error: false,
//         data: result,
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
