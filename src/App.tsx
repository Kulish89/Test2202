import React from "react";
import "./App.css";
import { Events } from "./features/Events/Events";
import { Main } from "./features/Main/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <Events />
    </div>
  );
}

export default App;
