import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <span className="App">
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/detail" component={DetailPage} />
      </BrowserRouter>
    </span>
  );
}

export default App;
