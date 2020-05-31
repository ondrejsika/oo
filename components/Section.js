import React from "react";
import { Container } from "react-bootstrap";

export default (props) => (
  <Container>
    <h2>{props.header}</h2>
    {props.children}
  </Container>
);
