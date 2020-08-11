import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import Login from "./containers/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Nav";


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
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



