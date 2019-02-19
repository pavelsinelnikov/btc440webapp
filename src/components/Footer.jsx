import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

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
                <a href="">
                  <i class="fab fa-linkedin fa-3x" />
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-github-square fa-3x" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row bsPrefix="footer-copyright text-center py-3">
          <Col>Copyright Pavel Sinelnikov</Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
