import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
// import PostPage from "./pages/PostPage/PostPage";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AppRouter from "./components/router/AppRouter";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
