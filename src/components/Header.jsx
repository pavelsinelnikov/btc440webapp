import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">BTC440</Navbar.Brand>
        <Nav>
          <li className="element">
            <Link className="link" to="/">
              Passwords
            </Link>
          </li>
          <li className="element">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </Nav>
      </Navbar>
    </header>
  );
};

Header.propTypes = {};

export default Header;
