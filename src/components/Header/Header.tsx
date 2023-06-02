import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import avatar from "../img/721683348.jpeg";
const Header = () => {
  return (
    <Navbar bg="light" expand="xxl" style={{ marginBottom: "10px" }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">Test</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ alignItems: "center", gap: "20px" }}
          >
            <Nav.Link href="/">Post</Nav.Link>
            <Nav.Link
              href="/about"
              style={{ alignItems: "center", display: "flex", gap: "10px" }}
            >
              <Image width={70} src={avatar} style={{ borderRadius: "10px" }} />
              <div>Алексей</div>
              <div>axoft10@gmail.com</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header