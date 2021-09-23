import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import MainPage from "./Pages/MainPage";
import IndivPage from "./Pages/IndivPage";

function App() {
  return (
    <span className="App">
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/project/CapturedMoment" render={() => <IndivPage name="CapturedMoment" />}/>
        <Route path="/project/DeliveryRun" render={() => <IndivPage name="DeliveryRun" />}/>
        <Route path="/project/일력" render={() => <IndivPage name="일력" />}/>
        <Route path="/project/LightAway" render={() => <IndivPage name="LightAway" />}/>
        <Route path="/project/SoundOfFaires" render={() => <IndivPage name="SoundOfFaires" />}/>
        <Route path="/project/Comsongz" render={() => <IndivPage name="Comsongz" />}/>
        <Route path="/project/ALittleDruid" render={() => <IndivPage name="ALittleDruid" />}/>
      
      </BrowserRouter>
    </span>
  );
}

export default App;
