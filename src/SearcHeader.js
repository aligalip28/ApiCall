import { useState } from "react";

function Search({ Search }) {
  const handleChange = (event) => {
    setvalue(event.target.value);
  };
  const [value, setvalue] = useState("");

  const handleFormSubmit = (Event) => {
    Event.preventDefault();
    debugger;
    Search(value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="SearchDiv">
          <label>Ne Arıyordunuz ?</label>
          <input type="text" value={value} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}

export default Search;
