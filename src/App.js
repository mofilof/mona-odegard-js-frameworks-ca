
import "./App.css";
import React from "react";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";
import Menu from "./components/layout/Menu"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import AboutGame from "./components/games/AboutGame";

function App() {
  return (
    <>

    <Menu/>

  
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/games/:id" component={AboutGame} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
 
    </>    
  );
}

export default App;