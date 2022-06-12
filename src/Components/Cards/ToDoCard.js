import { Card } from "react-bootstrap";

const ToDoCard = ({ toDoContextMenu, handleToDoContext, work, getId }) => {
  const { uid, workName, description } = work;
  return (
    <div className="mb-3" key={uid} onContextMenu={handleToDoContext}>
      {toDoContextMenu}
      <Card
        onMouseMove={() => getId(uid)}
        border="primary"
        style={{ width: "18rem" }}
      >
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
