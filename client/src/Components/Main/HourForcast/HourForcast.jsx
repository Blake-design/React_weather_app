import React from "react";
import { Icon } from "../..";
import { getHour, getMeridian } from "../../../utils/time";
import { useStyles } from "./hourForcastStyle";
import { Paper, Grid, Box, Typography, Container } from "@material-ui/core";

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
