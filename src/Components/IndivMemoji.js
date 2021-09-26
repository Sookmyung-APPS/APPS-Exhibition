import React from "react";

const devIMG = {
    justifyContent: "center",
    width: "15vw",
    margin: "10px",
}

function Memoji({image}) {
    return (
        <img style={devIMG} src={image} alt="" />
    )
}

const array = [
    {   //곽효림, 김예진, 김혜수, 장현애, 정제인
        projectName: "CapturedMoment",
        memoji: ["/memoji/Hyesu(김혜수).png","/memoji/Yejin(김예진).jpeg", "/memoji/Hyeonae(장현애).png", "/memoji/Jane(정제인).png"],    
    },
    {   //심채영, 김예진, 유정현
        projectName: "DeliveryRun",
        memoji: ["/memoji/chaeyeong(심채영).jpg", "/memoji/Hyeonae(장현애).png","/memoji/Junghyun(유정현).jpg" ],    
    },
    {   //최예빈, 장현애
        projectName: "일력",
        memoji: ["/memoji/Yebin(최예빈).png", "/memoji/Hyeonae(장현애).png" ],    
    },
    {   //권민지, 황정현, 박진희
        projectName: "LightAway",
        memoji: ["/memoji/Minji(권민지).png", "/memoji/Jeonghyeon(황정현).jpeg", "/memoji/Jinhee(박진희).jpg" ],    
    },
    {   //고예린, 최은형, 황유경
        projectName: "SoundOfFaires",
        memoji: ["/memoji/Yerin(고예린).png","/memoji/Eunhyung(최은형).png", "/memoji/YuKyung(황유경).jpg" ],    
    },
    {   //정제인, 현유경, 윤다빈
        projectName: "Comsongz",
        memoji: ["/memoji/Jane(정제인).png", "/memoji/Hyesu(김혜수).png", "/memoji/Dabin(윤다빈).jpg" ],    
    },
    {   //심채영, 김예진, 황정현, 장현애
        projectName: "ALittleDruid",
        memoji: ["/memoji/chaeyeong(심채영).jpg","/memoji/Yejin(김예진).jpeg", "/memoji/Jeonghyeon(황정현).jpeg", "/memoji/Hyeonae(장현애).png" ],   
    }
];



function IndivMemoji ( {name} ) {
    const dev = {
        display: "flex",
        justifyContent: "center",
    }

    const index = array.findIndex(i => i.projectName === name);

    return (
        <div style={dev}>
            {array[index].memoji.map((data) => {
                return <Memoji image={data} />
            })}
        </div>
    )
}

export default IndivMemoji;