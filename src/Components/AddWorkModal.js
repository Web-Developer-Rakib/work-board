import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const AddWorkModal = ({ show, handleClose, handleAddWork }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New work</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleAddWork}>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter the work name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="workName"
                placeholder="Enter the work description"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Enter the work description"
            >
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Enter the work description"
                style={{ height: "100px" }}
                required
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Add work
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddWorkModal;
