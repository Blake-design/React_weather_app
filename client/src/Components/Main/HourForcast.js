import React from "react";
import { Icon } from "../";
import { getHour, getMeridian } from "../../utils/time";

import {
  makeStyles,
  Paper,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100%",
    margin: "1rem",
    overflow: "auto",
    border: "2px solid #f2f2f1 ",
    "&::-webkit-scrollbar": {
      width: "4em",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f2f2f1",
    },
    "&::-webkit-scrollbar-button": {
      width: "1em",
      height: "1em",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#16a7cd",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#4ccbec",
      cursor: "grab",
    },

    "&::-webkit-scrollbar-thumb:active": {
      background: "#f29881",
      cursor: "grabbing",
    },
  },
  time: {
    display: "flex",
    justifyContent: "center",
  },
}));

const HourForcast = ({ hourly }) => {
  const classes = useStyles();

  return (
    <Box component={"article"} className={classes.root}>
      {hourly.slice(1, 22).map((hour, index) => {
        return (
          <Container key={index}>
            <Box className={classes.time}>
              <Typography variant="body1">
                {getHour(hour.dt, hour.timezone)}
              </Typography>

              <Typography variant="caption">
                {getMeridian(hour.dt, hour.timezone)}
              </Typography>
            </Box>
            <Icon
              icon={hour.weather[0].icon}
              description={hour.weather[0].description}
            />
            <div>{Math.floor(hour.temp) + "°"}</div>
          </Container>
        );
      })}
    </Box>
  );
};

export default HourForcast;
