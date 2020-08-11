const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  name : { type : String, required : true },
  email : { type : String, required : true },
  password : { type : String, required : true },
workouts : [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout",
    },
  ],
});

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
