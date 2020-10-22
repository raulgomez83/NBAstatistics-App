import React, {useState} from "react";


export const SelectPage = ({setPage}) => {
  const [inputValue, setInputValue] = useState("");

  const handlePageChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Select page: </label>
      <input className="page" type="text" value={inputValue} onChange={handlePageChange} />
    </form>
  );
};


