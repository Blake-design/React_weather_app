import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

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
