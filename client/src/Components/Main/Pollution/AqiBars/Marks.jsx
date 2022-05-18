export const Marks = ({
  data,
  yScale,
  xScale,
  yValue,
  xValue,
  colorValue,
  colorScale,
}) =>
  data.map((d, i) => (
    <rect
      className={"bars"}
      key={i}
      x={xScale(xValue(d))}
      y={yScale(yValue(d))}
      width={xScale.bandwidth()}
      height={10}
      fill={colorScale(colorValue(d))}
      opacity={0.5}
    >
      <title>{`AQI Index: ${yValue(d)}`}</title>
    </rect>
  ));
