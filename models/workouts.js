const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  name : { type : String, required : true },
  description : { type : String, required : true },
  location : { type : String, required : true },
  Sunday : { type : Boolean},
  Monday : { type : Boolean },
  Tuesday : { type : Boolean },
  Wednesday : { type : Boolean },
  Thursday : { type : Boolean },
  Friday : { type : Boolean },
  Saturday : { type : Boolean },
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
