import React from "react";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";
import AboutGame from "./components/games/AboutGame";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (

  <div className="container">
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" exact></NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/games/GameList" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/contact/ContactPage"  className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/games/:id" component={AboutGame} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      </Navbar>
    </Router>
  </div>
        
  );
}

export default App;

