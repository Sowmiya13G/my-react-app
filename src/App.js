import React, { useState } from "react";
import "./App.css";
import Counter from "./counter/counter";
import Crud from "./crud/crud";

function App() {
  return (
    <div className="App">
        <Counter />
        <Crud />
    </div>
  );
}

export default App;
