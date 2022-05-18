import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { useStyles } from "./AqiGraphStyles";
import { scaleOrdinal } from "d3";
import { Box } from "@material-ui/core";
import { Dropdown } from "./Dropdown";
import { PollutantsLineGraph } from "./PollutantsLineGraph/PollutantsLineGraph";
import { ColorLegend } from "./ColorLegend";
import { AqiBars } from "./AqiBars/AqiBars";
import "./styles.css";

const AqiGraph = ({ pollution }) => {
  const [hoveredValue, setHoveredValue] = useState();
  const [node, setNode] = useState(null);
  const [width, setWidth] = useState(900);
  const [xAttribute, setXAtrribute] = useState("co");
  const [data, setData] = useState();

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  useLayoutEffect(() => {
    if (node) {
      console.log("hit");
      const measure = () => {
        setWidth(node.getBoundingClientRect().width);
      };
      measure();
      window.addEventListener("resize", measure);

      return () => {
        window.removeEventListener("resize", measure);
      };
    }
  }, [node]);

  useEffect(() => {
    console.log(pollution);
    const dataCombined = pollution.list.map((i) => ({
      dt: i.dt * 1000,
      components: i.components,
      aqi: i.main.aqi,
    }));

    setData(dataCombined);
  }, [pollution]);

  const height = 400;
  const margin = { top: 4, right: 60, bottom: 150, left: 100 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  if (!data) {
    return <div>loading...</div>;
  }
  const colorValue = (d) => d.aqi;
  const colorLegendLabel = "Air Quality Index";
  const filteredbyColor = data.filter((d) => hoveredValue === colorValue(d));
  const fadeOpacity = 0.5;
  const colorScale = scaleOrdinal()
    .domain([1, 2, 3, 4, 5])
    .range(["#4cecbd", "#f3da58", "#e58429", "#ec6d4c", "#ec1d4c"]);
  const findDomainLabel = (domainValue) => {
    const valueName = {
      1: "Good",
      2: "Fair",
      3: "Moderate",
      4: "Poor",
      5: "Very Poor",
    };
    return valueName[domainValue];
  };

  return (
    <Box ref={measuredRef}>
      <Dropdown
        data={data}
        xAttribute={xAttribute}
        handleChange={setXAtrribute}
      />

      {width > 650 && (
        <svg width={width} height={100}>
          <g transform={`translate(${margin.left},60)`}>
            <text className={"colorLegend-label"} x={-20} y={-30}>
              {colorLegendLabel}
            </text>
            <ColorLegend
              colorScale={colorScale}
              tickSpacing={100}
              tickSize={5}
              tickTextOffset={20}
              onHover={setHoveredValue}
              hoveredValue={hoveredValue}
              fadeOpacity={fadeOpacity}
              findDomainLabel={findDomainLabel}
            />
          </g>
        </svg>
      )}

      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g opacity={hoveredValue ? fadeOpacity : 1}>
            <AqiBars
              data={data}
              innerWidth={innerWidth}
              innerHeight={innerHeight}
              margin={margin}
              colorValue={colorValue}
              colorScale={colorScale}
            />
          </g>

          <AqiBars
            data={filteredbyColor}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            margin={margin}
            colorValue={colorValue}
            colorScale={colorScale}
          />

          <PollutantsLineGraph
            data={data}
            width={width}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            xAttribute={xAttribute}
          />
        </g>
      </svg>
    </Box>
  );
};

export default AqiGraph;
