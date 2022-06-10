import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [id, setId] = useState("");
  const [searchTxt, setSearchTxt] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <ToDOContextMenu
        pageX={pageX}
        pageY={pageY}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      ></ToDOContextMenu>
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
        handleStatus={handleStatus}
        handleDelete={handleDelete}
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
      <DoneContextMenu
        handleDelete={handleDelete}
        handleStatus={handleStatus}
        pageX={pageX}
        pageY={pageY}
      ></DoneContextMenu>
    );
  };
  const handleLeftClickOnBody = () => {
    setBodyContextMenu("");
    setToDoContextMenu("");
    setInProgressContextMenu("");
    setDoneContextMenu("");
  };
  const handleAddWork = (e) => {
    e.preventDefault();
    const uid = uuidv4();
    const workName = e.target.workName.value;
    const description = e.target.description.value;
    const status = "toDo";
    const newWork = { uid, workName, description, status };
    setWorks([...works, newWork]);
  };
  //Search works
  useEffect(() => {
    let filter = [...works];
    filter = filter.filter((el) => {
      let item = el.workName.toLowerCase();
      return item.includes(searchTxt.toLowerCase());
    });
    setFilteredWorks([...filter]);
  }, [works, searchTxt]);

  //Delete function
  const handleDelete = () => {
    const remainingAfterDelete = filteredWorks.filter(
      (work) => work.uid !== id
    );
    setWorks(remainingAfterDelete);
  };
  const handleStatus = (workStatus) => {
    let updatedWorks = works.map((work) => {
      if (work.uid === id) {
        work.status = workStatus;
      }
      return work;
    });
    setWorks(updatedWorks);
  };
  return (
    <div onClick={handleLeftClickOnBody}>
      <Search setSearchTxt={setSearchTxt}></Search>
      <div className="mx-3">
        <div className="row">
          <div className="col-lg-4 p-3">
            <div className="border border-3">
              <h3 className="text-center text-primary">TO DO</h3>
            </div>
            <div
              onContextMenu={addToDoContext}
              className="my-3 d-flex flex-wrap justify-content-around"
              style={
                filteredWorks.length === 0 ||
                filteredWorks.find((work) => work.status !== "toDo")
                  ? { height: "300px" }
                  : { height: "auto" }
              }
            >
              {bodyContextMenu}
              {filteredWorks.length === 0 ? (
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <h3 className="text-center">
                    Click here with right button to add new work.
                  </h3>
                </div>
              ) : (
                filteredWorks.map(
                  (work) =>
                    work.status === "toDo" && (
                      <ToDoCard
                        work={work}
                        toDoContextMenu={toDoContextMenu}
                        handleToDoContext={handleToDoContext}
                        setId={setId}
                      ></ToDoCard>
                    )
                )
              )}
            </div>
          </div>
          <div className="col-lg-4 p-3 border-3 border-top-0 border border-bottom-0">
            <div className="border border-3">
              <h3 className="text-center text-warning">IN PROGRESS</h3>
            </div>
            <div className="my-3 d-flex flex-wrap justify-content-around">
              {filteredWorks.map(
                (work) =>
                  work.status === "inProgress" && (
                    <InProgressCard
                      work={work}
                      handleInProgressContext={handleInProgressContext}
                      inProgressContextMenu={inProgressContextMenu}
                      setId={setId}
                    ></InProgressCard>
                  )
              )}
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="border border-3">
              <h3 className="text-center text-success">DONE!</h3>
            </div>
            <div className="my-3 d-flex flex-wrap justify-content-around">
              {filteredWorks.map(
                (work) =>
                  work.status === "done" && (
                    <DoneCard
                      work={work}
                      handleDoneContext={handleDoneContext}
                      doneContextMenu={doneContextMenu}
                      setId={setId}
                    ></DoneCard>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <AddWorkModal
        show={show}
        // setShow={setShow}
        handleClose={handleClose}
        // handleShow={handleShow}
        handleAddWork={handleAddWork}
      ></AddWorkModal>
    </div>
  );
};

export default Main;
