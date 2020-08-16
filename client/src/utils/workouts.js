import axios from "axios";

export default {
  // Gets all workouts
  getWorkouts: function() {
    return axios.get("/api/workouts");
  },
  // Gets the workout with the given id
  getWorkout: function(id) {
    return axios.get("/api/workouts/" + id);
  },

  getWorkoutLocation: function(location) {
    return axios.get("/api/workouts/locations/" + location);
  },
  // Deletes the workout with the given id
  deleteWorkout: function(id) {
    return axios.delete("/api/workouts/" + id);
  },
  // Saves a workout to the database
  saveWorkout: function(workoutData) {
    return axios.post("/api/workouts", workoutData);
  },
  updateWorkout: function(workoutData,id) {
    return axios.put(`/api/workouts/${id}`, workoutData);
  }
};
