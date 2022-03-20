import React from "react";
import { DateTime } from "luxon";
import { Icon } from "../";
const HourForcast = ({ hourly }) => {
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    textAlign: "center",
  };
  const getHour = (unix, zone) => {
    const time = DateTime.fromSeconds(unix, { zone: zone });
    let hour = time.c.hour;

    if (hour >= 12) {
      hour = hour % 12 || 12;
      return hour + "PM";
    } else {
      hour = hour % 12 || 12;
      return hour + "AM";
    }
  };

  return (
    <section
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        overflow: "auto",
        width: "400px",
      }}
    >
      {hourly.slice(0, 23).map((hour, index) => {
        return (
          <article style={center} key={index}>
            <div>{getHour(hour.dt, hour.timezone)}</div>
            <Icon
              icon={hour.weather[0].icon}
              description={hour.weather[0].description}
            />
            <div>{Math.floor(hour.temp) + "°"}</div>
          </article>
        );
      })}
    </section>
  );
};

export default HourForcast;
