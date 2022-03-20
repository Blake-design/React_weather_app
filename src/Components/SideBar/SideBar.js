import React from "react";
import { SearchBar, CityList } from "./";

const Sidebar = ({ handleSubmit, cities, removeCity }) => {
  return (
    <section>
      <SearchBar handleSubmit={handleSubmit} />
      <CityList cities={cities} removeCity={removeCity} />
    </section>
  );
};

export default Sidebar;
