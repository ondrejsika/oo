import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Article from "../components/Article";
import styled from "styled-components";
import Box from "../components/Box";
import BoxWrapper from "../components/BoxWrapper";

const H1 = styled.h1`
  color: purple;
`;

export default () => (
  <>
    <Navbar />
    <H1>ochranaovci.cz</H1>
    <Section header="Jak si chránit svá stáda?">
      <BoxWrapper>
        <Box
          header="MOBILNÍ ELEKTRICKÝ OHRADNÍK"
          img="https://via.placeholder.com/580x290.png"
        >
          <p>
            Elektrický ohradník je jedním z nejoblíbenějších a nejúčinnějších
            ochranných opatření proti velkým šelmám.
          </p>
        </Box>
        <Box
          header="PASTEVECKÝ PES"
          img="https://via.placeholder.com/580x290.png"
        >
          <p>
            Pastevečtí psi jsou časem prověření strážci stád a v oblastech s
            výskytem vlků se stále využívají.
          </p>
        </Box>
        <Box
          header="PEVNÝ OHRADNÍK"
          img="https://via.placeholder.com/580x290.png"
        >
          <p>
            Pevné ohrady se běžně používají k vymezení pastvin, kde jsou zvířata
            po většinu pastevní sezóny.
          </p>
        </Box>
      </BoxWrapper>
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
