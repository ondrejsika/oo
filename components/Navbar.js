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
          <Nav.Link href="/#jak-si-chranit-sva-stáda">
            <b>Jak si chránit svá stáda?</b>
          </Nav.Link>
          <Nav.Link href="/#priklady-z-praxe">
            <b>Příklady z praxe/Zkušenosti farmářů</b>
          </Nav.Link>
          <Nav.Link href="/#co-delat-pri-napadeni">
            <b>Co dělat při napadení?</b>
          </Nav.Link>
          <Nav.Link href="/#podpora-prevence">
            <b>Podpora prevence</b>
          </Nav.Link>
          <Nav.Link href="/#o-projektu">
            <b>O webu</b>
          </Nav.Link>
          <Nav.Link href="/#kontakt">
            <b>Kontakt</b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);
