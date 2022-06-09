import React, { useState } from "react";
import AddWorkModal from "./AddWorkModal";
import BodyContextMenu from "./BodyContextMenu";
import DoneCard from "./DoneCard";
import DoneContextMenu from "./DoneContextMenu";
import InProgressCard from "./InProgressCard";
import InProgressContextMenu from "./InProgressContextMenu";
import Search from "./Search";
import ToDoCard from "./ToDoCard";
import ToDOContextMenu from "./ToDOContextMenu";

const Main = () => {
  const [bodyContextMenu, setBodyContextMenu] = useState("");
  const [toDoContextMenu, setToDoContextMenu] = useState("");
  const [inProgressContextMenu, setInProgressContextMenu] = useState("");
  const [doneContextMenu, setDoneContextMenu] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const num = [1, 2, 3, 4, 5];
  const addToDoContext = (e) => {
    e.preventDefault();
    const pageX = e.pageX;
    const pageY = e.pageY;
    setBodyContextMenu(
      <BodyContextMenu
        pageX={pageX}
        pageY={pageY}
        handleShow={handleShow}
      ></BodyContextMenu>
    );
    setToDoContextMenu("");
  };
  const handleToDoContext = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const pageX = e.pageX;
    const pageY = e.pageY;
    setInProgressContextMenu("");
    setDoneContextMenu("");
    setBodyContextMenu("");
    setToDoContextMenu(
      <ToDOContextMenu pageX={pageX} pageY={pageY}></ToDOContextMenu>
    );
  };

  const handleInProgressContext = (e) => {
    e.preventDefault();
    const pageX = e.pageX;
    const pageY = e.pageY;
    setBodyContextMenu("");
    setToDoContextMenu("");
    setDoneContextMenu("");
    setInProgressContextMenu(
      <InProgressContextMenu
        pageX={pageX}
        pageY={pageY}
      ></InProgressContextMenu>
    );
  };
  const handleDoneContext = (e) => {
    e.preventDefault();
    const pageX = e.pageX;
    const pageY = e.pageY;
    setBodyContextMenu("");
    setToDoContextMenu("");
    setInProgressContextMenu("");
    setDoneContextMenu(
      <DoneContextMenu pageX={pageX} pageY={pageY}></DoneContextMenu>
    );
  };
  const handleLeftClickOnBody = () => {
    setBodyContextMenu("");
    setToDoContextMenu("");
    setInProgressContextMenu("");
    setDoneContextMenu("");
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
              <InProgressCard
                handleInProgressContext={handleInProgressContext}
                inProgressContextMenu={inProgressContextMenu}
              ></InProgressCard>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="border border-3">
              <h3 className="text-center text-success">DONE!</h3>
            </div>
            <div className="my-3 d-flex flex-wrap justify-content-around">
              <DoneCard
                handleDoneContext={handleDoneContext}
                doneContextMenu={doneContextMenu}
              ></DoneCard>
            </div>
          </div>
        </div>
      </div>
      <AddWorkModal
        show={show}
        // setShow={setShow}
        handleClose={handleClose}
        // handleShow={handleShow}
      ></AddWorkModal>
    </div>
  );
};

export default Main;
