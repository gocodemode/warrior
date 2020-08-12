const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// LOGIN
router.post("/api/login", (req, res) => {
    console.log(req.body);
  const email = req.body.email.toLowerCase();
  db.Instructor.findOne({ email: email }).then((foundInstructor) => {
    console.log("FOUND instructor: ", foundInstructor);
    if (foundInstructor.password === req.body.password) {
      // send back a token.
      const privateKey = "unguessablechoice";
      jwt.sign({ email: foundInstructor.email }, privateKey, function (err, token) {
        // console.log(token);
        res.json({
          error: false,
          data: token,
          message: "Successfully authenticated instructor. ",
        });
      });
    } else {
      res.status(401).json({
        error: true,
        data: null,
        message: "Unable to authenticate instructor. Please try again.",
      });
    }
  });
});

module.exports = router;