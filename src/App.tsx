import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
// import PostPage from "./pages/PostPage/PostPage";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AppRouter from "./components/router/AppRouter";
import Header from "./components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <AppRouter />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
