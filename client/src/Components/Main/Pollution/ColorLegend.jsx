export const ColorLegend = ({
  colorScale,
  tickSpacing,
  tickSize,
  tickTextOffset,
  onHover,
  hoveredValue,
  fadeOpacity,
  findDomainLabel,
}) =>
  colorScale.domain().map((domainValue, i) => (
    <g
      key={i}
      onMouseEnter={() => onHover(domainValue)}
      onMouseOut={() => onHover(null)}
      transform={`translate(${i * tickSpacing}, 0)`}
      opacity={hoveredValue && hoveredValue !== domainValue ? fadeOpacity : 1}
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text className="legend-text" x={tickTextOffset} dy={".2em"}>
        {findDomainLabel(domainValue)}
      </text>
    </g>
  ));
