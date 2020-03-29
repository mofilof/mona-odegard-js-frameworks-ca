
import "./App.css";
import React from "react";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";
import Menu from "./components/layout/Menu"
import AboutGame from "./components/games/AboutGame";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>

    <Menu/>

  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/game/:name" component={AboutGame} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  </div>
    </>    
  );
}

export default App;