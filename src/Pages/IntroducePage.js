import React from "react";
import { Container } from "react-bootstrap";
import AppsInfo from "../Components/AppsInfo";
import AppsMember from "../Components/AppsMember";


function IntroduePage(){
    const infoimg = "../Assets/apps_logo.png";
   return(
       <div class="container">

           <img
            src={require("../Assets/apps_logo.png").default}
            className="w-100"
          />
          <AppsInfo/>
          <AppsMember/>

       </div>
   );
}

export default IntroduePage;