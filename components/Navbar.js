import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="ml-auto"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">
            <b>Jak si chránit svá stáda?</b>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <b>Příklady z praxe/Zkušenosti farmářů</b>
          </Nav.Link>
          <Nav.Link href="">
            <b>Co dělat při napadení?</b>
          </Nav.Link>
          <Nav.Link href="">
            <b>Podpora prevence</b>
          </Nav.Link>
          <Nav.Link href="">
            <b>O webu</b>
          </Nav.Link>
          <Nav.Link href="">
            <b>Kontakt</b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);
