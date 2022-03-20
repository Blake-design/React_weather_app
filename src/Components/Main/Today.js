import React from "react";
import { Icon, MinMax } from "../";
import { HourForcast } from "./";

const Today = ({ weather, location }) => {
  const { temp } = weather.current;
  const { description, icon } = weather.current.weather[0];
  const { min, max } = weather.daily[0].temp;
  const hourly = weather.hourly;

  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    textAlign: "center",
  };

  return (
    <section style={center}>
      <h2 style={{ textAlign: "center" }}>{location.toUpperCase()}</h2>
      <div className="today" style={center}>
        <div>{Math.floor(temp) + "°"}</div>
        <Icon icon={icon} description={description} />
        <MinMax min={min} max={max} />
        <HourForcast hourly={hourly} />
      </div>
    </section>
  );
};

export default Today;
