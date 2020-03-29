import React from 'react';
import HomePage from "./home/Home";
import ContactPage from "./contact/ContactPage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";

function Menu() {
  return (
      <Router>
          <Navbar bg="dark" variant="dark" expand="lg">
              <NavLink to="/" exact>
                  <Navbar.Brand>React MA3 - Mona Ødegård</Navbar.Brand>
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <NavLink to="/home/HomePage"  exact className="nav-link">
                          HomePage
                      </NavLink>
                      <NavLink to="/contact/ContactPage"  className="nav-link">
                          News
                      </NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Container>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/games/:id" component={AboutGame} />
              <Route path="/contact" component={ContactPage} />
            </Switch> 
          </Container>
      </Router>
  );
}

export default Menu;