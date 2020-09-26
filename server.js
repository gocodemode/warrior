const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const router = require("express").Router();
 
const app = express();
 
const PORT = process.env.PORT || 3001;

// const WorkoutsController = require("./controllers/workoutsController");
const AuthController = require("./controllers/authController");
 
app.use(express.urlencoded({ 
    extended: true, 
 }));

app.use(express.json());
app.use(express.static("client/build")); 

// const WorkoutsController = require("./controllers/workoutsController");
// const InstructorController = require("./controllers/instructorsController");

app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});
 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
app.use(AuthController);
// app.use(WorkoutsController);
// app.use(InstructorController);
 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

mongoose
.connect(process.env.MONGODB_URI || "mongodb://localhost/warrior", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connected to database.");
    })
    .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
    });
 
app.listen(PORT, function() {
  console.log(`Express server is running on http://localhost:${PORT}!`);
});