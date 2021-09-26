import React from "react";

const array = [
    {
        name: "CapturedMoment",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"    
    },
    {
        name: "DeliveryRun",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "일력",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"
    },
    {
        name: "LightAway",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk" 
    },
    {
        name: "SoundOfFaires",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk" 
    },
    {
        name: "Comsongz",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"
    },
    {
        name: "ALittleDruid",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    }
];


function Youtube ( { name }) {
    const iframeStyle = {
        width: "100%",
        height: "30vw",
    }


    const realName = name;
    const index = array.findIndex(i => i.name === realName);

    return (
        <div>
            <iframe style={iframeStyle} src={array[index].link} title="YouTube video player"  frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Youtube;