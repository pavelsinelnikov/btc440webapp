import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const BulletContent = ({ title, content }) => {
  return (
    <Container>
      <Row>
        <Col>
          {title && <h2>{title}</h2>}
          <ul>
            {content.map((point, i) => (
              <div className="bulletcontentlist" key={i}>
                {point}
              </div>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default BulletContent;
