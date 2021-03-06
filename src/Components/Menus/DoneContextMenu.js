import { Dropdown } from "react-bootstrap";

const DoneContextMenu = ({ pageX, pageY, handleDelete, handleStatus }) => {
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
        <Dropdown.Item id="send-to-menu">Send to →</Dropdown.Item>
        <div className="sub-menu">
          <Dropdown.Menu variant="dark" show>
            <Dropdown.Item onClick={() => handleStatus("toDo")}>
              Todo
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleStatus("inProgress")}>
              In Progress
            </Dropdown.Item>
            <Dropdown.Header onClick={(e) => e.stopPropagation()}>
              Done
            </Dropdown.Header>
          </Dropdown.Menu>
        </div>
        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
        <Dropdown.Item>Archive</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default DoneContextMenu;
