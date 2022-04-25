import React from "react";

import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: "1rem",
  },
  cold: {
    color: "#4ccbec",
  },
  hot: {
    color: "#ec1d4c",
  },
}));

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
