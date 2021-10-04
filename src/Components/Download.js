import React from "react";

const array = [
    {
        name: "스팟지도웹서비스",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://github.com/jung-jane",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "DeliveryRun",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/Sookmyung-APPS/DeliveryRun"    
    },
    {
        name: "일력",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/Sookmyung-APPS/Dia-lendar"    
    },
    {
        name: "LightAway",
        DownloadLink1: "https://drive.google.com/file/d/1mj1ktK3BiHZCNv3uTAlZdF3CxcqafmaR/view?usp=sharing",
        DownloadLink2: "https://drive.google.com/file/d/1qTNxJePLBfirQA2CxoBvDZ1pu-7DYv_Y/view?usp=sharing",
        GithubLink: "https://github.com/Sookmyung-APPS/LightAway"    
    },
    {
        name: "SoundOfFairies",
        DownloadLink1: "",
        DownloadLink2: "https://drive.google.com/file/d/1ETk4Bk264G4NTTukfPhsnjkq2Faubtbt/view?usp=sharing",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "Comsongz",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "ALittleDruid",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/Sookmyung-APPS/Legend-Of-A-Little-Druid"    
    },
    {   //강단이
        name: "강단이",
        DownloadLink1: "https://drive.google.com/file/d/13EAtgLMLQWWQbbkG_koALkTSG5YfVu-7/view?usp=sharing",
        DownloadLink2: "https://drive.google.com/file/d/1WrY0fQ97xY-rfmibM3rKuAntHJl0da0F/view?usp=sharing",
        GithubLink: "https://github.com/Sookmyung-APPS/MagicSnowflake"
          
    },
    {   //김다연
        name: "김다연",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/Sookmyung-APPS/TERRAFORMING"
    },
    {   //김진영
        name: "김진영",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/Sookmyung-APPS/Make-My-Wish-Come-True"
    },
    {   //박해지
        name: "박해지",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //이가을
        name: "이가을",
        DownloadLink1: "https://drive.google.com/file/d/1NRo2BKj4raNXm_JiCq1f-oiUcaW_lsFl/view?usp=sharing",
        DownloadLink2: "https://drive.google.com/file/d/1NRo2BKj4raNXm_JiCq1f-oiUcaW_lsFl/view?usp=sharing",
        GithubLink: "https://github.com/Sookmyung-APPS/SNOWJUMP"
    },
    {   //장나리
        name: "장나리",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/Sookmyung-APPS/SNOWRUN"
    },
    {   //정민영
        name: "정민영",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/Sookmyung-APPS/2DSnowflakeGame"
    },
    {   //정채영
        name: "정채영",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //홍희수
        name: "홍희수",
        DownloadLink1: "https://github.com/jung-jane",
        DownloadLink2: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
];

function Download ( { name }) {
    const dev = {
        display: "flex",
        justifyContent: "center",
    }
    const devIMG = {
        justifyContent: "center",
        width: "110px", 
        height: "110px",
        margin: "20px",
        padding: "10px",
        ObjectFit: "fill",
        marginBottom: "30px"
    }


    const realName = name;
    const index = array.findIndex(i => i.name === realName);


    return (
        <div style={dev}>
            <a href={array[index].DownloadLink1} rel="noreferrer" target="_blank"><img style={devIMG} alt="" src={require("../Assets/downloadMac.png").default} /></a>
            <a href={array[index].DownloadLink2} rel="noreferrer" target="_blank"><img style={devIMG} alt="" src={require("../Assets/downloadWindow.png").default} /></a>
            <a href={array[index].GithubLink} rel="noreferrer" target="_blank"><img style={devIMG} alt="" src={require("../Assets/github.png").default} /></a>
        </div>
    )
}

export default Download;