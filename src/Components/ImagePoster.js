import { Figure, Modal } from "react-bootstrap";
import React, { useState } from "react";

function ImagePoster() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Figure style={{ width: "20rem" }}>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={require("../Assets/poster.png").default}
          onClick={handleShow}
        />
      </Figure>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ImagePoster;
