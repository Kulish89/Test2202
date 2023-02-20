import React from "react";
import "./App.css";
import { EventsPage } from "./features/Events/EventsPage";
import { Main } from "./features/Main/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <EventsPage />
    </div>
  );
}

export default App;
