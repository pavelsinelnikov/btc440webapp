import React, { Component } from "react";
import NavigationBar from "./components/navigationbar";
import { Container, Col, Row } from "react-bootstrap";
import passwordimg1 from "./static/images/password-cracker.jpg";
import PasswordChecker from "./components/PasswordChecker";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavigationBar />
        </header>
        <main>
          <Container>
            <Row>
              <Col>
                <h1>Security in Technology</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={passwordimg1} alt="ryaandavis.wordpress.com" />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <PasswordChecker />
              </Col>
            </Row>
          </Container>
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
