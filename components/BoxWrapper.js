import React from "react";
import { Row, Container } from "react-bootstrap";

export default (props) => (
  <Container>
    <Row>{props.children}</Row>
  </Container>
);
