import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostPage from "./components/PostPage/PostPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <header>'Header'</header>
      <PostPage />
    </div>
  );
}

export default App;
