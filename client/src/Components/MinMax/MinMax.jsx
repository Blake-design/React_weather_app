import React from "react";
import { useStyles } from "./minMaxStyle";
import { Typography, Box } from "@material-ui/core";

const MinMax = ({ min, max }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography variant="h6" className={classes.cold}>
        {Math.floor(min) + "°"}
      </Typography>
      <Typography variant="h6" className={classes.hot}>
        {+Math.floor(max) + "°"}
      </Typography>
    </Box>
  );
};

export default MinMax;
