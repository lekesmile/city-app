import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
