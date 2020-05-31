import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const Border = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  padding: 1em;
`;

const Header = styled.h3`
  font-size: 1.2em;
  text-align: center;
  text-transform: uppercase;
`;

export default (props) => (
  <Col>
    <Border>
      <img src={props.img} class="img-fluid" />
      <Wrapper>
        <Header>{props.header}</Header>
        {props.children}
      </Wrapper>
    </Border>
  </Col>
);
