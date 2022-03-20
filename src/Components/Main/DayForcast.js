import React from "react";

const DayForecast = ({ daily }) => {
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    textAlign: "center",
  };

  const getDay = () => {};

  return (
    <section
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        overflow: "auto",
        width: "400px",
      }}
    >
      {daily.slice(0, 23).map((day, index) => {
        return (
          <article style={center} key={index}>
            <div>{getday(day.dt, day.timezone)}</div>
            <Icon
              icon={day.weather[0].icon}
              description={day.weather[0].description}
            />
            <div>{Math.floor(day.temp) + "°"}</div>
          </article>
        );
      })}
    </section>
  );
};
