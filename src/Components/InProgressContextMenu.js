import React from "react";
import { Dropdown } from "react-bootstrap";

const InProgressContextMenu = ({ pageX, pageY }) => {
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
        <Dropdown.Item>Todo</Dropdown.Item>
        <Dropdown.Header onClick={() => console.log("click on inprogress")}>
          In Progress
        </Dropdown.Header>
        <Dropdown.Item>Done</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default InProgressContextMenu;
