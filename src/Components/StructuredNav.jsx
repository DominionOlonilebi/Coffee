import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const StructuredNav = () => {
  return (
    <>
      <Navbar expand="md" className="navs">
        <Container>
          <Navbar.Brand href="#home">
            <span>
              {" "}
              <FontAwesomeIcon icon={faCoffee} />
            </span>{" "}
            <strong> HQ</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto offset-5">
              <Nav.Link href="#home" className="mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="mx-3">
                About
              </Nav.Link>
              <Nav.Link href="#goals" className="mx-3">
                Goals
              </Nav.Link>
              <Nav.Link href="#contact" className="mx-3">
                Contact
              </Nav.Link>

              <Nav.Link href="#coffeeshop" className="mx-3">
                <button className="btns">Coffee Shop</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default StructuredNav;
