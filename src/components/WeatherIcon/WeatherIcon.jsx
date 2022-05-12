import React from "react";

import Clouds from "../../images/Weather/Clouds.jpeg";
import Rainy from "../../images/Weather/Rainy.png";
import Sunny from "../../images/Weather/Sunny.png";

import "./WeatherIcon.css";

function WeatherIcon({ state, location }) {
  const states = {
    Clouds: {
      title: "Clouds",
      icon: <img className="weather-state" src={Clouds} alt="clouds" />,
    },
    Rainy: {
      title: "Rainy",
      icon: <img className="weather-state" src={Rainy} alt="rainy" />,
    },
    Sunny: {
      title: "Sunny",
      icon: <img className="weather-state" src={Sunny} alt="sunny" />,
    },
  };

  const current = states[state] || {
    title: "Clouds",
    icon: <img className="weather-state" src={Clouds} alt="clouds" />,
  };

  return (
    <div className="weathericon">
      {current.icon}
      <p className="weather-title">{current.title}</p>
      <p className="weather-location">{location}</p>
    </div>
  );
}

export default WeatherIcon;
