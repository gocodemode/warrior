const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  daysArray: [
    {
      value: {
        isActive: { type: Boolean, default: false },
        name: { type: String, value: "Sunday" },
      },
    },
    {
      value: {
        isActive: { type: Boolean, default: false },
        name: { type: String, value: "Monday" },
      },
    },
    {
      value: {
        isActive: { type: Boolean, default: false },
        name: { type: String, value: "Tuesday" },
      },
    },
    {
      value: {
        isActive: { type: Boolean, default: false },
        name: { type: String, value: "Wednesday" },
      },
    },
    {
      value: {
        isActive: { type: Boolean, default: false },
        name: { type: String, value: "Thursday" },
      },
    },
    {
      value: {
        isActive: { type: Boolean, default: false },
        name: { type: String, value: "Friday" },
      },
    },
    {
      value: {
        isActive: { type: Boolean, default: false },
        name: { type: String, value: "Saturday" },
      },
    },
  ],
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
