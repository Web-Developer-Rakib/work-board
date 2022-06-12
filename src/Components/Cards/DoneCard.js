import { Card } from "react-bootstrap";

const DoneCard = ({ handleDoneContext, doneContextMenu, work, getId }) => {
  const { uid, workName, description } = work;
  return (
    <div className="mb-3" key={uid} onContextMenu={handleDoneContext}>
      {doneContextMenu}
      <Card
        onContextMenu={() => getId(uid)}
        border="success"
        style={{ width: "18rem" }}
      >
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
