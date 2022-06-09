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
        <Dropdown.Item>Todo</Dropdown.Item>
        <Dropdown.Item>In Progress</Dropdown.Item>
        <Dropdown.Header>Done</Dropdown.Header>
      </Dropdown.Menu>
    </div>
  );
};

export default DoneContextMenu;
