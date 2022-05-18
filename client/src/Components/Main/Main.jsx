import React from "react";
import { Today, WeekForecast, AqiGraph } from ".";
import { Box } from "@material-ui/core";

const Main = ({ weather, location, photoData, pollution }) => {
  return (
    <Box>
      {pollution && weather && <AqiGraph pollution={pollution}></AqiGraph>}
      <Today weather={weather} location={location} photoData={photoData} />
      <WeekForecast daily={weather.daily} />
    </Box>
  );
};

export default Main;
