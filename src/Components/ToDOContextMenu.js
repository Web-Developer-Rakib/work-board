import React from "react";
import { Dropdown } from "react-bootstrap";

const ToDOContextMenu = ({ pageX, pageY }) => {
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
        <Dropdown.Header onClick={(e) => e.stopPropagation()}>
          Todo
        </Dropdown.Header>
        <Dropdown.Item onClick={() => console.log("click on inprogress")}>
          In Progress
        </Dropdown.Item>
        <Dropdown.Item>Done</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default ToDOContextMenu;
