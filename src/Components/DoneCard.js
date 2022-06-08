import React from "react";
import { Card } from "react-bootstrap";

const DoneCard = () => {
  return (
    <div className="mb-3">
      <Card border="success" style={{ width: "18rem" }}>
        <Card.Header className="text-success">Work done</Card.Header>
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

export default DoneCard;
