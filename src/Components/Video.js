import React from "react";

function Video() {
  const iframeStyle = {
    width: "900px",
    height: "450px",
    margin: "0 auto",
  };

  return (
    <div class="boxWarp" style={{ display: "flex", height: "100%" }}>
      <iframe
        class="box"
        style={iframeStyle}
        src="https://www.youtube.com/embed/yCvSR4lSqTg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
