import React from "react";

const Icon = ({ icon, description }) => {
  return (
    <div >
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <div>{description} </div>
    </div>
  );
};

export default Icon;
