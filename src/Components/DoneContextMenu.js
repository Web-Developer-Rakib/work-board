import React from "react";
import { Dropdown } from "react-bootstrap";

const DoneContextMenu = ({ pageX, pageY }) => {
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
        <Dropdown.Item id="send-to-menu">Send to</Dropdown.Item>
        <div className="sub-menu">
          <Dropdown.Menu variant="dark" show>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              Todo
            </Dropdown.Item>
            <Dropdown.Item>In Progress</Dropdown.Item>
            <Dropdown.Header>Done</Dropdown.Header>
          </Dropdown.Menu>
        </div>
        <Dropdown.Item>Delete</Dropdown.Item>
        <Dropdown.Item>Archive</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default DoneContextMenu;
