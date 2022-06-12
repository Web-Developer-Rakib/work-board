import { FormControl, InputGroup } from "react-bootstrap";

const Search = ({ setSearchTxt }) => {
  return (
    <div className="pb-5 d-flex justify-content-center">
      <InputGroup className="w-50">
        <FormControl
          type="text"
          onChange={(e) => setSearchTxt(e.target.value)}
          placeholder="Enter your work name here..."
        />
      </InputGroup>
    </div>
  );
};

export default Search;
