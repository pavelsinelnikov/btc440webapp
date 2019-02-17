import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const navigationbar = props => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

navigationbar.propTypes = {};

export default navigationbar;
