import React from "react";
const devIMG = {
    justifyContent: "center",
    width: "16vw",
    margin: "10px",
}

function Memoji({image}) {
    return (
        <img style={devIMG} src={image} alt="" />
    )
}

const array = [
    {   //곽효림, 김예진, 김혜수, 장현애, 정제인
        projectName: "스팟지도웹서비스",
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
    {   //권민지, 황정현, 박진희,
        projectName: "LightAway",
        memoji: ["/memoji/Minji(권민지).png", "/memoji/Jeonghyeon(황정현).jpeg", "/memoji/Jinhee(박진희).jpg" ],    
    },
    {   //고예린, 최은형, 황유경
        projectName: "SoundOfFairies",
        memoji: ["/memoji/Yerin(고예린).png","/memoji/Eunhyung(최은형).png", "/memoji/YuKyung(황유경).jpg" ],    
    },
    {   //정제인, 현유경, 윤다빈
        projectName: "Comsongz",
        memoji: ["/memoji/Jane(정제인).png", "/memoji/Yugyeong(현유경).png", "/memoji/Dabin(윤다빈).png" ],    
    },
    {   //심채영, 김예진, 황정현, 장현애
        projectName: "ALittleDruid",
        memoji: ["/memoji/chaeyeong(심채영).jpg","/memoji/Yejin(김예진).jpeg", "/memoji/Jeonghyeon(황정현).jpeg", "/memoji/Hyeonae(장현애).png" ],   
    },
    {   //강단이
        projectName: "강단이",
        memoji: ["/memoji/Dani(강단이).jpg" ],   
    },
    {   //김다연
        projectName: "김다연",
        memoji: ["/memoji/Dayeon(김다연).png" ],   
    },
    {   //김진영
        projectName: "김진영",
        memoji: ["/memoji/Jinyoung(김진영).png" ],   
    },
    {   //박해지
        projectName: "박해지",
        memoji: ["/memoji/Haeji(박해지).png" ],   
    },
    {   //이가을
        projectName: "이가을",
        memoji: ["/memoji/Gaeul(이가을).jpg" ],   
    },
    {   //장나리
        projectName: "장나리",
        memoji: ["/memoji/Nari(장나리).png" ],   
    },
    {   //정민영
        projectName: "정민영",
        memoji: ["/memoji/Minyeong(정민영).png" ],   
    },
    {   //정채영 
        projectName: "정채영",
        memoji: ["/memoji/Chaeyoung(정채영).png" ],   
    },
    {   //홍희수 
        projectName: "홍희수",
        memoji: ["/memoji/Heesoo.png" ],   
    },
];



function IndivMemoji ( {name} ) {
    const dev = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
    }

    const index = array.findIndex(i => i.projectName === name);

    return (
        <div style={dev}>
            {array[index].memoji.map((data) => {
                return <Memoji image={data} />}
            )}
        </div>
    )
}

export default IndivMemoji;