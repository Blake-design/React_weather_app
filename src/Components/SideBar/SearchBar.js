import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, query, setQuery)}>
      <input
        type="text"
        name="search"
        value={query}
        placeholder={"please enter city"}
        onChange={handleChange}
      />
    </form>
  );
};
export default SearchBar;
