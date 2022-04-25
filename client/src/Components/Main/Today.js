import React from "react";
import { Icon } from "../";
import { HourForcast, City } from "./";

import { makeStyles, Typography, Container, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cityBox: {
    width: "100%",
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    objectFit: "cover",
  },
}));

const Today = ({ weather, location, photoData }) => {
  const classes = useStyles();
  const hourly = weather.hourly;

  return (
    <Container maxWidth="lg">
      <Box
        className={classes.cityBox}
        style={{ backgroundImage: `url(${photoData?.url?.regular})` }}
      >
        <City weather={weather} location={location} />
      </Box>
      <HourForcast hourly={hourly} />
    </Container>
  );
};

export default Today;
