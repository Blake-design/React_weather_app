import React from "react";
import { Today, WeekForecast } from ".";
import { Box } from "@material-ui/core";

const Main = ({ weather, location, photoData }) => {
  return (
    <Box>
      <Today weather={weather} location={location} photoData={photoData} />
      <WeekForecast daily={weather.daily} />
    </Box>
  );
};

export default Main;
