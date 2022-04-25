import React from "react";
import { Icon, MinMax } from "../";
import { DateTime, Info } from "luxon";
import {
  makeStyles,
  Container,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    margin: ".5rem",
    width: 120,
  },
}));

const WeekForecast = ({ daily }) => {
  const classes = useStyles();

  const getDay = (unix) => {
    const time = DateTime.fromSeconds(unix);
    const weekdayIndex = time.weekday;
    const weekday = Info.weekdays()[weekdayIndex];

    if (weekday != null) {
      return Info.weekdays()[weekdayIndex];
    } else {
      return "Monday";
    }
  };

  return (
    <Container className={classes.root}>
      {daily.slice(0, 7).map((day, index) => {
        return (
          <Card className={classes.card} key={index}>
            <CardContent>
              <Typography>{getDay(day.dt)}</Typography>
              <Icon
                icon={day.weather[0].icon}
                description={day.weather[0].description}
              />
              <MinMax min={day.temp.min} max={day.temp.max} />
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};

export default WeekForecast;
