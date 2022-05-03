import React from "react";
import { Icon, MinMax } from "../../index";
import { DateTime, Info } from "luxon";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core/";
import { useStyles } from "./weekForcastStyle";

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
    <Container>
      <Typography variant="h4" className={classes.title}>
        7 Day Forcast
      </Typography>
      <Box className={classes.root} component="section">
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
      </Box>
    </Container>
  );
};

export default WeekForecast;
