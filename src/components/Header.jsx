import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">BTC440</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Passwords</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

Header.propTypes = {};

export default Header;
