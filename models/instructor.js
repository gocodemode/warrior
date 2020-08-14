const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const instructorSchema = new Schema({
  firstName : { type : String, required : true },
  LastName : { type : String, required : true },
  email : { type : String, required : "Email address is required", unique : true },
  password : { type : String, required : "Password is required" },
  isDeleted: { type : Boolean, default: false},
workouts : [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout",
    },
  ],
});

instructorSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

instructorSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
