import React from "react";

const CityList = ({ cities, removeCity }) => {
  return (
    <ul>
      {cities.length ? (
        cities.map((city, i) => {
          return (
            <li key={i}>
              <h3>{city.city}</h3>
              <button onClick={() => removeCity(city.city)}>X</button>
            </li>
          );
        })
      ) : (
        <div>
          <p>This area holds previous searches for easier access.</p>
        </div>
      )}
    </ul>
  );
};

export default CityList;
