import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  desc: {
    height: "3rem",
  },
}));

const Icon = ({ icon, description }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Typography variant="caption" className={classes.desc}>
        {description}{" "}
      </Typography>
    </Box>
  );
};

export default Icon;
