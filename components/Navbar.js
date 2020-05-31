import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Jak si chránit svá stáda?</Nav.Link>
          <Nav.Link href="#pricing">
            Příklady z praxe/Zkušenosti farmářů
          </Nav.Link>
          <Nav.Link href="">Co dělat při napadení?</Nav.Link>
          <Nav.Link href="">Podpora prevence</Nav.Link>
          <Nav.Link href="">O webu</Nav.Link>
          <Nav.Link href="">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);
