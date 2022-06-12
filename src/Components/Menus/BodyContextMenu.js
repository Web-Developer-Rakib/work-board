import { Dropdown } from "react-bootstrap";

const BodyContextMenu = ({ pageX, pageY, handleShow }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${pageX}px`,
        top: `${pageY}px`,
        zIndex: "20",
      }}
    >
      <Dropdown.Menu variant="dark" show>
        <Dropdown.Item onClick={handleShow}>New Work</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default BodyContextMenu;
