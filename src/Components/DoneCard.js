import React from "react";
import { Card } from "react-bootstrap";

const DoneCard = ({ handleDoneContext, doneContextMenu, work }) => {
  const { id, workName, description } = work;
  return (
    <div onContextMenu={handleDoneContext} className="mb-3" key={id}>
      {doneContextMenu}
      <Card border="success" style={{ width: "18rem" }}>
        <Card.Header className="text-success">Work done</Card.Header>
        <Card.Body>
          <Card.Title>{workName}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DoneCard;
