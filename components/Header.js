import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const H1 = styled.h1`
  color: #575757;
  padding: 1em 0 7em 0;
  font-weight: bold;
`;
const Background = styled.div`
  background-image: url("/static/images/header.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
`;
export default (props) => (
  <Background>
    <Container>
      <H1>
        POMOCNÍK
        <br /> pro chovatele hospodářských zvířat
      </H1>
      {props.children}
    </Container>
  </Background>
);
