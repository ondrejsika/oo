import React from "react";
import { Container } from "react-bootstrap";

export default (props) => (
  <Container id={props.id} className="mt-5 mb-5">
    <h2>{props.header}</h2>
    {props.children}
  </Container>
);
