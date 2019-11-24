import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services/" component={Services} />
        <Route exact path="/contact/" component={Contact} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default App;
