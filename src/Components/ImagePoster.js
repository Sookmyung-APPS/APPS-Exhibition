import { Figure, Modal } from "react-bootstrap";
import React, { useState } from "react";

function ImagePoster(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iframeStyle = {
    width: "100%",
    height: "30vw",
  };

  return (
    <>
      <Figure style={{ width: "20rem" }}>
        <Figure.Image
          width={160}
          height={225}
          alt="171x180"
          src={props.poster}
          onClick={handleShow}
        />
      </Figure>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <iframe
              style={iframeStyle}
              src={props.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ImagePoster;
