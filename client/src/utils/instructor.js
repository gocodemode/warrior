import axios from "axios";

export default {
      getInstructorByEmail: function(email) {
        return axios.get("/api/instructor/" + email);
      },
      saveInstructor: function(instructorData)  {
        return axios.post("/api/instructor", instructorData);
      },
      updateInstructor: function(instructorData,id) {
        return axios.put(`/api/instructor/${id}`, instructorData);
      }
};