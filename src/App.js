import React, { useState, useEffect } from "react";

import { Header } from "./Components";
import { SideBar } from "./Components/SideBar";
import { Main } from "./Components/Main";
import { fetchLocation, fetchWeather } from "./api";
function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("San Antonio");
  const [geo, setGeo] = useState({
    lat: 29.4246002,
    lon: -98.4951405,
  });
  const [cities, setCities] = useState([
    { city: "SAN ANTONIO", lat: geo.lat, lon: geo },
  ]);

  useEffect(() => {
    fetchWeather(geo, setWeather, setLoading);
  }, [geo]);

  const search = (e, query, setQuery) => {
    e.preventDefault();
    setLocation(query);
    fetchLocation(location, setGeo);
    setCities((prev) => [
      ...prev,
      { city: query.toUpperCase(), lat: geo.lat, lon: geo.lon },
    ]);
    setQuery("");
  };

  const removeCity = (targetCity) => {
    const editedCities = cities.filter((object) => {
      return object.city !== targetCity;
    });
    setCities(editedCities);
  };

  if (loading) {
    return <div>...loading</div>;
  } else {
  }

  return (
    <div className="wrapper">
      <Header className="App-header" title={"React Weather App"} />
      <div style={{ display: "flex" }}>
        <SideBar
          handleSubmit={search}
          removeCity={removeCity}
          cities={cities}
        />
        <Main weather={weather} location={location} />
      </div>
    </div>
  );
}

export default App;
