import { Row, Col } from "react-bootstrap";
import React from "react";
import Header from "../Components/Header";
import ImageMenu from "../Components/ImageMenu";
import Video from "../Components/Video";
import ImagePoster from "../Components/ImagePoster";

const array = [
  {
    name: "CapturedMoment",
    src: "img_row/순간포착.jpeg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "DeliveryRun",
    src: "img_row/deliveryRun.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "일력",
    src: "img_row/일력.PNG",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "LightAway",
    src: "img_row/lightAway.jpg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "SoundOfFaires",
    src: "img_row/soundOfFairies.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "Comsongz",
    src: "img_row/컴송즈.jpeg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "ALittleDruid",
    src: "img_row/ALittleDruid.jpg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "정채영",
    src: "img_row/ALittleDruid.jpg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "정민영",
    src: "img_row/정민영_세로사진.jpeg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "장나리",
    src: "img_row/장나리_세로사진.jpeg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "이가을",
    src: "img_row/이가을_세로사진.PNG",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "박해지",
    src: "img_row/박해지_세로사진.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "김진영",
    src: "img_row/김진영_세로사진.jpeg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "김다연",
    src: "img_row/김다연_세로사진.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "홍희수",
    src: "img_row/홍희수_세로사진.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "강단이",
    src: "img_row/강단이_세로사진.jpeg",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
];

function MainPage() {
  return (
    <div>
      <Header />
      <ImageMenu />
      <br />
      <Video />
      <br />
      <br />
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        2021 APPS EXHIBITION
      </p>

      <Row xs={2} md={5} className="g-6" style={{ margin: "0 140px" }}>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
            objectFit: "contain",
          }}
        >
          <ImagePoster
            name={array[0].name}
            poster={array[0].src}
            link={array[0].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[1].name}
            poster={array[1].src}
            link={array[1].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[2].name}
            poster={array[2].src}
            link={array[2].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[3].name}
            poster={array[3].src}
            link={array[3].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[4].name}
            poster={array[4].src}
            link={array[4].link}
          />
        </Col>

        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[5].name}
            poster={array[5].src}
            link={array[5].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[6].name}
            poster={array[6].src}
            link={array[6].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[7].name}
            poster={array[7].src}
            link={array[7].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[8].name}
            poster={array[8].src}
            link={array[8].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
          }}
        >
          <ImagePoster
            name={array[9].name}
            poster={array[9].src}
            link={array[9].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
            objectFit: "contain",
          }}
        >
          <ImagePoster
            name={array[10].name}
            poster={array[10].src}
            link={array[10].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
            objectFit: "contain",
          }}
        >
          <ImagePoster
            name={array[11].name}
            poster={array[11].src}
            link={array[11].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
            objectFit: "contain",
          }}
        >
          <ImagePoster
            name={array[12].name}
            poster={array[12].src}
            link={array[12].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
            objectFit: "contain",
          }}
        >
          <ImagePoster
            name={array[13].name}
            poster={array[13].src}
            link={array[13].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
            objectFit: "contain",
          }}
        >
          <ImagePoster
            name={array[14].name}
            poster={array[14].src}
            link={array[14].link}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            width: "maxWidth",
            flexWrap: "wrap",
            objectFit: "contain",
          }}
        >
          <ImagePoster
            name={array[15].name}
            poster={array[15].src}
            link={array[15].link}
          />
        </Col>
      </Row>
    </div>
  );
}

export default MainPage;
