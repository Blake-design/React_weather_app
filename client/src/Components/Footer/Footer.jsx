import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import { useStyles } from "./footerStyle";

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h6">
        This Website is Powered by
        <Link href="https://openweathermap.org/api" className={classes.link}>
          {" "}
          OpenWeather API{" "}
        </Link>
        &
        <Link href="https://unsplash.com/developers" className={classes.link}>
          {" "}
          Unsplash API{" "}
        </Link>
        &copy; 2022
      </Typography>
    </Container>
  );
};

export default Footer;
