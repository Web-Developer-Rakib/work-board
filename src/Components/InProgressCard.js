import React from "react";
import { Card } from "react-bootstrap";

const InProgressCard = ({
  handleInProgressContext,
  inProgressContextMenu,
  work,
}) => {
  const { id, workName, description } = work;
  return (
    <div onContextMenu={handleInProgressContext} className="mb-3" key={id}>
      {inProgressContextMenu}
      <Card border="warning" style={{ width: "18rem" }}>
        <Card.Header className="text-warning">Work in progress</Card.Header>
        <Card.Body>
          <Card.Title>{workName}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InProgressCard;
