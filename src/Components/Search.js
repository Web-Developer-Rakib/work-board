import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const Search = () => {
  return (
    <div className="my-5 d-flex justify-content-center">
      <InputGroup className="w-50">
        <FormControl placeholder="Enter your work name here..." />
      </InputGroup>
    </div>
  );
};

export default Search;
