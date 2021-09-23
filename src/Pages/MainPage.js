import { Row, Col } from "react-bootstrap";
import React from "react";
import Header from "../Components/Header";
import ImageMenu from "../Components/ImageMenu";
import Video from "../Components/Video";
import ImagePoster from "../Components/ImagePoster";

const array = [
  {
    name: "CapturedMoment",
    src: "../Assets/poster.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "DeliveryRun",
    src: "../Assets/poster.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "일력",
    src: "../Assets/poster.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "LightAway",
    src: "../Assets/poster.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "SoundOfFaires",
    src: "../Assets/poster.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "Comsongz",
    src: "../Assets/poster.png",
    link: "https://www.youtube.com/embed/Nr7R3mDeJsk",
  },
  {
    name: "ALittleDruid",
    src: "../Assets/poster.png",
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

      <Row
        xs={1}
        md={5}
        className="g-6"
        style={{
          marginLeft: "50px",
          marginTop: "50px",
          marginRight: "50px",
          marginBottom: "50px",
        }}
      >
        <Col style={{ margin: "1px auto" }}>
          <ImagePoster
            name={array[0].name}
            poster={array[0].src}
            link={array[0].link}
          />
        </Col>
        <Col style={{ margin: "1px auto" }}>
          <ImagePoster
            name={array[1].name}
            poster={array[1].src}
            link={array[1].link}
          />
        </Col>
        <Col style={{ margin: "1px auto" }}>
          <ImagePoster
            name={array[2].name}
            poster={array[2].src}
            link={array[2].link}
          />
        </Col>
        <Col style={{ margin: "1px auto" }}>
          <ImagePoster
            name={array[3].name}
            poster={array[3].src}
            link={array[3].link}
          />
        </Col>
        <Col style={{ margin: "1px auto" }}>
          <ImagePoster
            name={array[4].name}
            poster={array[4].src}
            link={array[4].link}
          />
        </Col>
        <Col style={{ margin: "1px auto" }}>
          <ImagePoster
            name={array[5].name}
            poster={array[5].src}
            link={array[5].link}
          />
        </Col>
        <Col style={{ margin: "1px auto" }}>
          <ImagePoster
            name={array[6].name}
            poster={array[6].src}
            link={array[6].link}
          />
        </Col>
      </Row>
    </div>
  );
}

export default MainPage;
