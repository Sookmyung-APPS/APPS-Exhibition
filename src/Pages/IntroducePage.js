import React from "react";
import { Container } from "react-bootstrap";
import AppsInfo from "../Components/AppsInfo";
import AppsMember from "../Components/AppsMember";
import '../Assets/IntroducePage.css'
import Header from "../Components/Header";


function IntroduePage(){
    const infoimg = "../Assets/apps_logo.png";
   return(
       <div class="container">
           <Header />
           <div id="BigAppsImg">
           <img
            src={require("../Assets/apps_logo.png").default}
            className="w-50"
          /></div>
          <AppsInfo/>
          <AppsMember/>

       </div>
   );
}

export default IntroduePage;