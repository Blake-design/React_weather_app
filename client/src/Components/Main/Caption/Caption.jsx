import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { useStyles } from "./captionStyle";

const Caption = ({ photoData }) => {
  const classes = useStyles();
  let { description, credit } = photoData;

  if (description === null) {
    description = "";
  } else description = `"${description}"`;

  return (
    <Container className={classes.root}>
      <Typography>{`${description} - ${credit?.name}`}</Typography>
    </Container>
  );
};

export default Caption;
