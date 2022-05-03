import React from "react";
import { Icon } from "../../index";
import { HourForcast, City, Caption } from "../index";
import { useStyles } from "./todayStyles";
import { Typography, Container, Box, Grid } from "@material-ui/core";

const Today = ({ weather, location, photoData }) => {
  const classes = useStyles();
  const hourly = weather.hourly;

  return (
    <Container maxWidth="lg" component="section">
      <Grid
        container
        className={classes.content}
        direction="row"
        justifyContent="space-between"
        style={{ backgroundImage: `url(${photoData?.url?.regular})` }}
      >
        <Grid item sm={12}>
          <City weather={weather} location={location} />
        </Grid>
        <Grid
          item
          sm={12}
          style={{
            alignSelf: "flex-end",
          }}
        >
          <Caption photoData={photoData}></Caption>
        </Grid>
      </Grid>
      <Typography variant="h4" className={classes.title}>
        Hourly Forcast
      </Typography>
      <HourForcast hourly={hourly} />
    </Container>
  );
};

export default Today;
