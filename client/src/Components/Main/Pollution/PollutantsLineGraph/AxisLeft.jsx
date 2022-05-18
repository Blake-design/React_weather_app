import "./styles.css";

export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue) => {
    return (
      <g
        key={tickValue}
        className={"tick"}
        transform={`translate(0,${yScale(tickValue)})`}
      >
        <line x2={innerWidth} />
        <text className={"countryName"} x={-tickOffset} dy={".32em"}>
          {tickValue}
        </text>
      </g>
    );
  });
