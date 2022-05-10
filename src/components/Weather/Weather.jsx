/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import useFetch from "hooks/useFetch";

import "./Weather.css";
import WeatherIcon from "components/WeatherIcon/WeatherIcon";
import WeatherTabs from "components/WeatherTabs/WeatherTabs";

function Weather() {
  const { data, isPending } = useFetch(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7bc2d24c7570b6b5317741bc0577ae6a"
  );

  if (!data) {
    return null;
  }

  const list = data.list.slice(0, 8);
  // eslint-disable-next-line no-console
  console.log(list);
  const today = list[0];
  const tomorrow = list[4];
  const week = list[7];

  const renderedHours = list.map((day) => (
    <div className="temperature-hour">
      <h3>{new Date(day.dt_txt).getHours()}</h3>
      <h6>{day.main.temp}</h6>
    </div>
  ));

  const days = {
    today: today.main.temp,
    tomorrow: tomorrow.main.temp,
    week: week.main.temp,
  };

  return (
    <div className="weather">
      <div className="top-weather">
        <WeatherIcon state={today.weather[0].main} location={data.city.name} />
        <WeatherTabs days={days} />
      </div>
      <div className="hours">{renderedHours}</div>
    </div>
  );
}

export default Weather;
