import React, { useState } from "react";
import BodyContextMenu from "./BodyContextMenu";
import DoneCard from "./DoneCard";
import InProgressCard from "./InProgressCard";
import Search from "./Search";
import ToDoCard from "./ToDoCard";
import ToDOContextMenu from "./ToDOContextMenu";

const Main = () => {
  const [bodyContextMenu, setBodyContextMenu] = useState("");
  const [toDoContextMenu, setToDoContextMenu] = useState("");
  const [inProgressContextMenu, setInProgressContextMenu] = useState("");
  const [doneContextMenu, setDoneContextMenu] = useState("");
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const num = [1, 2, 3, 4, 5];
  const addToDoContext = (e) => {
    e.preventDefault();
    setPageX(e.pageX);
    setPageY(e.pageY);
    setBodyContextMenu(
      <BodyContextMenu pageX={pageX} pageY={pageY}></BodyContextMenu>
    );
    setToDoContextMenu("");
  };
  const handleToDoContext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPageX(e.pageX);
    setPageY(e.pageY);
    setBodyContextMenu("");
    setToDoContextMenu(
      <ToDOContextMenu pageX={pageX} pageY={pageY}></ToDOContextMenu>
    );
  };

  const handleLeftClickOnBody = () => {
    setBodyContextMenu("");
    setToDoContextMenu("");
  };
  return (
    <div onClick={handleLeftClickOnBody}>
      <Search></Search>
      <div className="mx-3">
        <div className="row">
          <div className="col-lg-4 p-3">
            <div className="border border-3">
              <h3 className="text-center text-primary">TO DO</h3>
            </div>
            <div
              onContextMenu={addToDoContext}
              className="my-3 d-flex flex-wrap justify-content-around"
            >
              {bodyContextMenu}
              {num.map((n) => (
                <ToDoCard
                  toDoContextMenu={toDoContextMenu}
                  handleToDoContext={handleToDoContext}
                ></ToDoCard>
              ))}
            </div>
          </div>
          <div className="col-lg-4 p-3 border-3 border-top-0 border border-bottom-0">
            <div className="border border-3">
              <h3 className="text-center text-warning">IN PROGRESS</h3>
            </div>
            <div className="my-3 d-flex flex-wrap justify-content-around">
              <InProgressCard></InProgressCard>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="border border-3">
              <h3 className="text-center text-success">DONE!</h3>
            </div>
            <div className="my-3 d-flex flex-wrap justify-content-around">
              <DoneCard></DoneCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
