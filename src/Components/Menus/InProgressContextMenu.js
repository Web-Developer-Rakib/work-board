import { Dropdown } from "react-bootstrap";

const InProgressContextMenu = ({
  pageX,
  pageY,
  handleStatus,
  handleDelete,
}) => {
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
            <Dropdown.Header onClick={(e) => e.stopPropagation()}>
              In Progress
            </Dropdown.Header>
            <Dropdown.Item onClick={() => handleStatus("done")}>
              Done
            </Dropdown.Item>
          </Dropdown.Menu>
        </div>
        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
        <Dropdown.Item>Archive</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default InProgressContextMenu;