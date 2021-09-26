import React from "react";


//이미지 파일 퍼블릭 폴더에 저장

function MainImg ( { name }) {
    const mainIMG = {
        maxWidth: "1300px",
        margin: "0 auto",
        height: "40vh",
        objectFit: "cover",
        boxShadow: "0 2px 5px 0 rgba(0,0,0,0.1)",
    }

    const imgUrl = "/img/"+name+".png"
    return (
        <div>
            <img className="d-block w-100" style={mainIMG} src={imgUrl} alt={name} title={name} /> 
        </div>
        
        
    )
}

export default MainImg;