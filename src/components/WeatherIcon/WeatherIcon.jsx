import React from "react";

function WeatherIcon({ state, location }) {
  const states = {
    Clouds: {
      title: "Clouds",
      icon: (
        <img
          src="https://icon-library.com/images/white-cloud-icon-png/white-cloud-icon-png-29.jpg"
          alt="clouds"
        />
      ),
    },
    Rainy: {
      title: "Rainy",
      icon: <img src="" alt="" />,
    },
    Sunny: {
      title: "Sunny",
      icon: <img src="" alt="" />,
    },
  };

  const current = states[state] || {
    title: "Today's temperature",
    icon: <img src="default-icon.png" alt="" />,
  };

  return (
    <div>
      {current.icon}
      <p>{current.title}</p>
      <p>{location}</p>
    </div>
  );
}

export default WeatherIcon;
