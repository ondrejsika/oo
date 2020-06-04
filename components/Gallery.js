import React from "react";
import { Row, Col } from "react-bootstrap";

export default (props) => (
  <Row>
    {props.images.map((img, i) => (
      <Col key={i} xs={6} className="mb-4">
        <img src={img} className="img-fluid" />
      </Col>
    ))}
  </Row>
);
