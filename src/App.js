import { BrowserRouter } from "react-router-dom";
import React from "react";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <span className="App">
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </span>
  );
}

export default App;
