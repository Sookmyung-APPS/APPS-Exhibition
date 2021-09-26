import { Row, Col } from "react-bootstrap";
import React from "react";
import Header from "../Components/Header";
import ImageMenu from "../Components/ImageMenu";
import ImagePoster from "../Components/ImagePoster";

function MainPage() {
  const posters = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <Header />
      <ImageMenu />
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
        {posters.map((poster) => {
          return (
            <Col
              style={{
                marginBottom: "25px",
                display: "flex",
                width: "maxWidth",
                flexWrap: "wrap",
              }}
            >
              <ImagePoster poster={poster} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default MainPage;
