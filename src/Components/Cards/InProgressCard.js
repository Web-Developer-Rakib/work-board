import { Card } from "react-bootstrap";

const InProgressCard = ({
  handleInProgressContext,
  inProgressContextMenu,
  work,
  getId,
}) => {
  const { uid, workName, description } = work;

  return (
    <div className="mb-3" key={uid} onContextMenu={handleInProgressContext}>
      {inProgressContextMenu}
      <Card
        onContextMenu={() => getId(uid)}
        border="warning"
        style={{ width: "18rem" }}
      >
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
