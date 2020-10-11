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



  /*   if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    } */
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Select page: </label>
      <input type="text" value={inputValue} onChange={handlePageChange} />
    </form>
  );
};


