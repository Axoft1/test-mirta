import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import avatar from "../img/721683348.jpeg";
import { Link } from "react-router-dom";
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
            <Link to={"/"} style={{ textDecoration: "none", color:"black" }}>
              Post
            </Link>
            <Link
              to={"/about"}
              style={{color:"black",
                textDecoration: "none",
                alignItems: "center",
                display: "flex",
                gap: "10px",
              }}
            >              
              <Image width={70} src={avatar} style={{ borderRadius: "10px" }} />
              <div>Алексей</div>
              <div>axoft10@gmail.com</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
