import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Card from "./components/Card";
import Art from "./components/Art";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Card />
      <Home />
      <Art />
      <Footer />
    </>
  );
}

export default App;
