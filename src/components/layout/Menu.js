import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Menu() {
  return (

  <div className="container">
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink className="nav-link" to="/" exact>Home</NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">>
            <NavLink to="/contact/ContactPage"  className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  </div>
        
  );
}

export default Menu;
