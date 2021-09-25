import React from "react";
import ImageList from "./ImageList";
import dummy from "../db/MembersImg.json";



function AppsMember(){
    return(
        <div class="container">
            <h1 id="ImgTitle"> 2021 Sookmyung APPS Member</h1>
            <ImageList/>
        </div>
    );
}

export default AppsMember;