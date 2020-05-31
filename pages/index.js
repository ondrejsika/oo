import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Article from "../components/Article";
import styled from "styled-components";

const H1 = styled.h1`
  color: purple;
`;

export default () => (
  <>
    <Navbar />
    <H1>ochranaovci.cz</H1>
    <Section header="Jak si chránit svá stáda?">
      <Article header="Foo">
        <p>Foo bar foo...</p>
      </Article>
      <Article header="Foo">
        <p>Foo bar foo...</p>
      </Article>
    </Section>
    <Section header="Příklady z praxe/Zkušenosti farmářů">
      <p>Foo bar foo...</p>
    </Section>{" "}
    <Section header="Statistiky">
      <p>Foo bar foo...</p>
    </Section>
    <Section header="Podpora prevence">
      <p>Foo bar foo...</p>
    </Section>
    <Section header="Co dělat při napadení?">
      <p>Foo bar foo...</p>
    </Section>
    <Section header="O webu">
      <p>Foo bar foo...</p>
    </Section>
    <Section header="Kontakt">
      <p>Foo bar foo...</p>
    </Section>
    <Section header="End">
      <p>Foo bar foo...</p>
    </Section>
  </>
);
