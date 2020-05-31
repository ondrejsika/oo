import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import styled from "styled-components";

const H1 = styled.h1`
  color: purple;
`;

export default () => (
  <>
    <Navbar />
    <H1>ochranaovci.cz</H1>
    <Section header="Jak si chránit svá stáda?">
      <p>Foo bar foo...</p>
    </Section>
    <Section header="Příklady z praxe/Zkušenosti farmářů">
      <p>Foo bar foo...</p>
    </Section>
  </>
);
