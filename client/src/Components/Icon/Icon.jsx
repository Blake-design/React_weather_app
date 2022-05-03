import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useStyles } from "./iconStyle";

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
