import React from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const AddWorkModal = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter the work name"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Enter the work descriotion"
          >
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add work
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddWorkModal;
