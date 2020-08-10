const express = require("express");
const router = express.Router();
const db = require("../models");

// READ ALL INSTRUCTORS
router.get("/api/instructors", (req, res) => {
  db.Instructor.find({})
    .populate("workouts")
    .then((retrievedInstructors) => {
      res.json({
        error: false,
        data: retrievedInstructors,
        message: "Successfully retrieved all instructors.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all instructors. ",
      });
    });
});

// CREATE INSTRUCTOR
router.post("/api/instructors", (req, res) => {
  db.Instructor.create(req.body)
    .then((createdInstructor) => {
      res.json({
        error: false,
        data: createdInstructor,
        message: "Successfully created new instructor.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to create new instructor.",
      });
    });
});
// EDIT

// DELETE

module.exports = router;