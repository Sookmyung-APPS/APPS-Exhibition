import React from "react";

const array = [
    {
        name: "스팟지도웹서비스",
        DownloadLink: "https://github.com/jung-jane",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "DeliveryRun",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "일력",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "LightAway",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "SoundOfFairies",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "Comsongz",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"    
    },
    {
        name: "ALittleDruid",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"    
    },
    {   //강단이
        name: "강단이",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
          
    },
    {   //김다연
        name: "김다연",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //김진영
        name: "김진영",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //박해지
        name: "박해지",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //이가을
        name: "이가을",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //장나리
        name: "장나리",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //정민영
        name: "정민영",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //정채영
        name: "정채영",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //홍희수
        name: "홍희수",
        DownloadLink: "https://www.naver.com/",
        GithubLink: "https://github.com/jung-jane"
    },
    {   //황수연
        name: "황수연",
        DownloadLink: "https://www.naver.com/",
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
        margin: "20px",
        padding: "10px",
        ObjectFit: "fill",
        marginBottom: "30px"
    }


    const realName = name;
    const index = array.findIndex(i => i.name === realName);


    return (
        <div style={dev}>
            <a href={array[index].DownloadLink} rel="noreferrer" target="_blank"><img style={devIMG} alt="" src={require("../Assets/download.png").default} /></a>
            <a href={array[index].GithubLink} rel="noreferrer" target="_blank"><img style={devIMG} alt="" src={require("../Assets/github.png").default} /></a>
        </div>
    )
}

export default Download;