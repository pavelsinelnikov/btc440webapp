import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

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

export default Header;
