import axios from "axios";

export default {
  // Gets all workouts
  getWorkouts: function() {
    return axios.get("/api/workouts");
  },
  // Gets the book with the given id
  getWorkout: function(id) {
    return axios.get("/api/workouts/" + id);
  },
  // Deletes the book with the given id
  deleteWorkout: function(id) {
    return axios.delete("/api/workouts/" + id);
  },
  // Saves a book to the database
  saveWorkout: function(workoutData) {
    return axios.post("/api/workouts", workoutData);
  },
  updateWorkout: function(workoutData) {
    return axios.update("/api/workouts", workoutData);
  }
};
