import React from "react";
import DoneCard from "./DoneCard";
import InProgressCard from "./InProgressCard";
import Search from "./Search";
import ToDoCard from "./ToDoCard";

const Main = () => {
  return (
    <div>
      <Search></Search>
      <div className="mx-3">
        <div className="row">
          <div className="col-lg-4 p-3">
            <div className="border border-3">
              <h3 className="text-center text-primary">TO DO</h3>
            </div>
            <div className="my-3 d-flex flex-column align-items-center">
              <ToDoCard></ToDoCard>
            </div>
          </div>
          <div className="col-lg-4 p-3 border-3 border-top-0 border border-bottom-0">
            <div className="border border-3">
              <h3 className="text-center text-warning">IN PROGRESS</h3>
            </div>
            <div className="my-3 d-flex flex-column align-items-center">
              <InProgressCard></InProgressCard>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="border border-3">
              <h3 className="text-center text-success">DONE!</h3>
            </div>
            <div className="my-3 d-flex flex-column align-items-center">
              <DoneCard></DoneCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
