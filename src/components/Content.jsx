import React from "react";
import { Container, Col, Row, Figure } from "react-bootstrap";

const Content = ({ title, imgsrc, alttxt, content }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>{title}</h2>
          {content && <p>{content}</p>}
        </Col>
      </Row>
      {imgsrc && (
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={180}
                height={180}
                alt={alttxt}
                src={imgsrc}
              />
              <Figure.Caption>{alttxt}</Figure.Caption>
            </Figure>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Content;
