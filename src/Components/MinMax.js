import React from "react";
const MinMax = ({ min, max }) => {
  return (
    <div style={{ display: "flex", flexflow: "column nowrap", gap: "2rem" }}>
      <div style={{ color: "#4c7bec" }}>{"L: " + Math.floor(min) + "°"}</div>
      <div style={{ color: "#ec6d4c" }}>{"H: " + Math.floor(max) + "°"}</div>
    </div>
  );
};

export default MinMax;
