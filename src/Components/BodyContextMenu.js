import React from "react";
import { Dropdown } from "react-bootstrap";

const BodyContextMenu = ({ pageX, pageY }) => {
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
        <Dropdown.Item>New Work</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default BodyContextMenu;
