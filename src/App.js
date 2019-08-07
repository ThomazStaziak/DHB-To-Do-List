import React from "react";

import "./styles/global.css";

import ToDo from "./components/ToDo/ToDo";
import AppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <>
      <AppBar />
      <ToDo />
    </>
  );
}

export default App;
