import React from "react";
import { Card } from "react-bootstrap";

const ToDoCard = ({ toDoContextMenu, handleToDoContext, work }) => {
  const { id, workName, description } = work;
  return (
    <div onContextMenu={handleToDoContext} className="mb-3" key={id}>
      {toDoContextMenu}
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header className="text-primary">Work to do</Card.Header>
        <Card.Body>
          <Card.Title>{workName}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToDoCard;
