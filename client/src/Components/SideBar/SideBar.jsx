import React from "react";
import { SearchBar, CityList } from ".";

const Sidebar = ({ handleSubmit, cities, removeCity, reloadCity }) => {
  return (
    <section>
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

export default Sidebar;