import "./styles.css";
import { utcDay, utcHour } from "d3";

export const AxisBottom = ({
  xScale,
  innerHeight,
  tickFormat,
  tickOffset = 3,
  width,
}) =>
  xScale
    .ticks(width / 200)

    .map((tickValue) => (
      <g
        key={tickValue}
        className={"tick"}
        transform={`translate(${xScale(tickValue)}, 0)`}
      >
        <line y2={innerHeight} />
        <text dy={".71em"} y={innerHeight + tickOffset}>
          {tickFormat(tickValue)}
        </text>
      </g>
    ));
