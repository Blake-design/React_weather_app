import React from "react";
import { MinMax } from "../../index";

import { getTimeandDay } from "../../../utils/time";

import {
  makeStyles,
  Typography,
  Container,
  Box,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "100%",
    marginTop: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    background: "rgba(242, 242,242,80%)",
    padding: ".5rem",
    borderRadius: "10px",
  },
  city: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100%",

    gap: "2rem",
  },
  frost: {
    color: "#4ccbec",
  },
  cool: {
    color: "#4cecbd",
  },
  warm: {
    color: "#f29881",
  },
  hot: {
    color: "#ec1d4c",
  },
  minMaxBox: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100%",
    gap: "2rem",
  },
}));

const City = ({ weather, location }) => {
  const classes = useStyles();
  const { min, max } = weather.daily[0].temp;
  const { temp } = weather.current;
  const { description } = weather.current.weather[0];
  const temperatureStyle = (temp) => {
    if (Math.floor(temp) <= 45) {
      return classes.frost;
    } else if (Math.floor(temp) <= 70) {
      return classes.cool;
    } else if (Math.floor(temp) <= 90) {
      return classes.warm;
    } else return classes.hot;
  };
  return (
    <Grid container>
      <Grid item sm={12} md={6} className={classes.root}>
        <Box className={classes.city}>
          <Typography
            variant="h4"
            component="h2"
            style={{ borderBottom: "2px solid #dee5e6" }}
          >
            {location.toUpperCase()}
          </Typography>
          <Typography
            className={temperatureStyle(temp)}
            variant="h3"
            component="h3"
          >
            {Math.floor(temp) + "°"}
          </Typography>
        </Box>
        <Box className={classes.minMaxBox}>
          <Typography variant="subtitle1" component="div">
            {getTimeandDay()}
          </Typography>
          <MinMax min={min} max={max} />

          <Typography variant="subtitle1" component="div">
            {description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default City;
