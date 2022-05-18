import React from "react";

import { scaleBand, scaleLinear } from "d3";

import { Marks } from "./Marks";

export const AqiBars = ({
  data,
  margin,
  innerWidth,
  innerHeight,
  colorValue,
  colorScale,
}) => {
  const xValue = (d) => d.dt;
  const yValue = (d) => d.aqi;

  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  const yScale = scaleLinear().domain([0, 5]).range([innerHeight, 0]);

  return (
    <Marks
      data={data}
      yScale={yScale}
      xScale={xScale}
      xValue={xValue}
      yValue={yValue}
      innerHeight={innerHeight}
      colorValue={colorValue}
      colorScale={colorScale}
    />
  );
};
