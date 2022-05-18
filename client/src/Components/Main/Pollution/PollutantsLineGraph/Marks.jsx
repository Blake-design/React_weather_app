import { line, curveNatural } from "d3";
import "./styles.css";

export const Marks = ({
  data,
  yScale,
  xScale,
  yValue,
  xValue,
  tooltipFormat,
  circleRadius,
}) => (
  <g className={"mark"}>
    <path
      d={line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve(curveNatural)(data)}
    />
    {data.map((d, i) => (
      <circle
        key={i}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title> {`${yValue(d)}, ${tooltipFormat(xValue(d))}`}</title>
      </circle>
    ))}
  </g>
);
