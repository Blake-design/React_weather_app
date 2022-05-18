import React from "react";
import { SearchBar, CityList } from ".";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.sidebar,
    color: theme.palette.text.primary,
  },
}));
const Search = ({ handleSubmit, cities, removeCity, reloadCity }) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <SearchBar handleSubmit={handleSubmit} />
      <CityList
        component="ul"
        cities={cities}
        removeCity={removeCity}
        reloadCity={reloadCity}
      />
    </section>
  );
};

export default Search;
