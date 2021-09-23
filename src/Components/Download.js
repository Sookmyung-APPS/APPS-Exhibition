import React from "react";

const array = [
    {
        name: "CapturedMoment",
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
        name: "SoundOfFaires",
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
    }
];

function Download ( { name }) {
    const dev = {
        display: "flex",
        justifyContent: "center",
    }
    const devIMG = {
        justifyContent: "center",
        width: "100px",
        height: "100px",
        backgroundColor: "blueviolet",
        margin: "20px",
        ObjectFit: "cover",
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