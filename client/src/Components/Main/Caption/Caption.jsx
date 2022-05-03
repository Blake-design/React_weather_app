import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { useStyles } from "./captionStyle";

const Caption = ({ photoData }) => {
  let {
    description,
    credit: { name },
  } = photoData;

  if (description === null) {
    description = "";
  } else description = `"${description}"`;

  if (name === null) {
    name = "anomynous";
  }

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography>{`${description} - ${name}`}</Typography>
    </Container>
  );
};

export default Caption;
