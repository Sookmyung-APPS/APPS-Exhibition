import { Carousel } from "react-bootstrap";
import React from "react";
import "../Assets/main.css"

function ImageMenu() {
  return (
    <Carousel className="CarouselStyle">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Assets/mainpage_carousel.png").default}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Assets/mainpage_carousel.png").default}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageMenu;
