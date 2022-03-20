import React from "react";
import { Today } from "./";

const Main = ({ weather, location }) => {
  return (
    <main style={{ border: "2px solid black", width: "100%" }}>
      <Today weather={weather} location={location} />
    </main>
  );
};

export default Main;
