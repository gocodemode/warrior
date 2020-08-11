const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  name : { type : String, required : true },
  description : { type : String, required : true },
  location : { type : String, required : true },
  Sunday : { type : Boolean, default : false },
  Monday : { type : Boolean, default : false },
  Tuesday : { type : Boolean, default : false },
  Wednesday : { type : Boolean, default : false },
  Thursday : { type : Boolean, default : false },
  Friday : { type : Boolean, default : false },
  Saturday : { type : Boolean, default : false },
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
