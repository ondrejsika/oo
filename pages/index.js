import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const H1 = styled.h1`
  color: purple;
`;

export default () => (
  <>
    <Navbar />
    <H1>ochranaovci.cz</H1>
  </>
);