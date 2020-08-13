import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch";
import Login from "./containers/Login";
import Modal from "./containers/Modal";
import ViewWorkouts from "./containers/ViewWorkouts";
import UpdateWorkout from "./containers/UpdateWorkout";
import UpdateAccount from "./containers/UpdateAccount";
import CreateWorkout from "./containers/CreateWorkout";
import Contents from "./containers/ContentPage/Contents";
import MyAccount from "./containers/MyAccount";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App page-container content">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contents" component={Contents} />
          <Route exact path="/myaccount" component={MyAccount} />
          <Route exact path="/createworkout" component={CreateWorkout} />
          <Route exact path="/viewworkouts" component={ViewWorkouts} />
          <Route exact path="/updateworkout" component={UpdateWorkout} />
          <Route exact path="/updateaccount" component={UpdateAccount} />
          <Route exact path="/modal" component={Modal} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
