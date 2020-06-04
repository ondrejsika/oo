import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";

const H1 = styled.h1`
  color: white;
  /* margin-bottom: 0; */
  display: inline;
  font-weight: bold;
  font-size: 3em;
  text-transform: uppercase;
  background-color: grey;
`;
const TextBackground = styled.span`
  background-color: grey;
  padding: 5px;
`;

const BackgroundImg = styled.div`
  background-image: url("/static/images/sheep.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  /* height: 200px; */
`;
export default (props) => (
  <>
    <BackgroundImg>
      {/* <Background> */}
      <Container>
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <H1>
              <TextBackground>
                &nbsp;POMOCNÍK&nbsp;
                <br />
                &nbsp;pro chovatele&nbsp;
                <br />
                &nbsp;hospodářských zvířat&nbsp;
              </TextBackground>
            </H1>
          </a>
        </Link>
        {props.children}
      </Container>
      {/* </Background> */}
    </BackgroundImg>
  </>
);
