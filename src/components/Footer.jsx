import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="page-footer font-small teal pt-4">
      <Container>
        <Row>
          <Col bsPrefix="col text-center">
            <h3>Name</h3>
            <p>Pavel Sinelnikov</p>
          </Col>
          <Col bsPrefix="col text-center">
            <h3>Social Media</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/pavel-sinelnikov-320385146">
                  <i className="fab fa-linkedin fa-3x" />
                </a>
              </li>
              <li>
                <a href="https://github.com/pavelsinelnikov">
                  <i className="fab fa-github-square fa-3x" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row bsPrefix="footer-copyright text-center py-3">
          <Col />
        </Row>
      </Container>
      <div className="created">Created by Pavel Sinelnikov</div>
    </footer>
  );
};

export default Footer;
