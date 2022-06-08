import React from "react";
import { Card } from "react-bootstrap";

const InProgressCard = ({ handleInProgressContext, inProgressContextMenu }) => {
  return (
    <div onContextMenu={handleInProgressContext} className="mb-3">
      {inProgressContextMenu}
      <Card border="warning" style={{ width: "18rem" }}>
        <Card.Header className="text-warning">Work in progress</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InProgressCard;
