import React from "react";
import { Container } from "react-bootstrap";
import AppsInfo from "../Components/AppsInfo";
import AppsMember from "../Components/AppsMember";
import '../Assets/IntroducePage.css'
import Header from "../Components/Header";
import Footer from "../Components/Footer";


function IntroduePage(){
    const infoimg = "../Assets/apps_logo.png";
   return(
       <div class="container">
           <Header />
           <div id="BigAppsImg">
           <img
            src={require("../Assets/IntroducePageImg.png").default}
            className="w-75"
          /></div>
          <AppsInfo/>
          <AppsMember/>
          <Footer />
       </div>
   );
}

export default IntroduePage;