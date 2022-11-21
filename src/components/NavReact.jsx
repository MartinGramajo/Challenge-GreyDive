import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LightSwitch from "./LightSwitch";

export default function NavReact() {
  return (
    <Navbar variant="dark"  expand="lg" className="py-4 "  id="principal">
      <Container>
        <Navbar.Brand className="logo-texto" as={Link} to="/">
          Simulacr.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="">
            <LightSwitch />
            </div>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
