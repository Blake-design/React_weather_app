import React, { useState } from "react";
import { TextField } from "@material-ui/core/";
import { useStyles } from "./searchBarStyle";

const SearchBar = ({ handleSubmit }) => {
  const classes = useStyles();

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e, query, setQuery)}
    >
      <TextField
        id="outlined-basic"
        label="Search City"
        variant="outlined"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};
export default SearchBar;
