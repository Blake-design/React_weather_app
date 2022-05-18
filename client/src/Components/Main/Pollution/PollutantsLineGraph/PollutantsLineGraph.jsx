import React from "react";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { extent, scaleLinear, scaleUtc, utcFormat } from "d3";

export const PollutantsLineGraph = ({
  data,
  width,
  innerWidth,
  innerHeight,
  xAttribute,
}) => {
  const xValue = (d) => d.dt;
  const xAxisLabelOffset = innerHeight + 60;

  const yValue = (d) => d.components[xAttribute];
  const yAxisLabel = "Pollutant concentration in μg/m3";
  const yAxisLabelOffset = -50;

  const xScale = scaleUtc()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  const xAxisTickFormat = utcFormat("%a %-I%p");
  const tooltipFormat = utcFormat("%x %-I%p");
  return (
    <>
      <AxisBottom
        innerHeight={innerHeight}
        innerWidth={innerWidth}
        tickFormat={xAxisTickFormat}
        tickOffset={20}
        xScale={xScale}
        width={width}
      />

      <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={20} />
      <text
        className="x-title"
        transform={`translate(${yAxisLabelOffset}, ${
          innerHeight / 2
        }), rotate(-90)`}
      >
        {yAxisLabel}
      </text>

      <Marks
        data={data}
        xScale={xScale}
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        tooltipFormat={tooltipFormat}
        circleRadius={5}
      />
    </>
  );
};
