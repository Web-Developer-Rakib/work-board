import { Card } from "react-bootstrap";

const ToDoCard = ({ toDoContextMenu, handleToDoContext, work, setId }) => {
  const { uid, workName, description } = work;
  return (
    <div className="mb-3" key={uid} onContextMenu={setId(uid)}>
      {toDoContextMenu}
      <Card
        onContextMenu={handleToDoContext}
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
