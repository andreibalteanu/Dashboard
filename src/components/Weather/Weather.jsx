/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import useFetch from "hooks/useFetch";
import WeatherIcon from "components/WeatherIcon/WeatherIcon";
import WeatherTabs from "components/WeatherTabs/WeatherTabs";

import "./Weather.css";

function Weather() {
  const { data, isPending } = useFetch(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7bc2d24c7570b6b5317741bc0577ae6a"
  );

  if (!data) {
    return null;
  }

  const list = data.list.slice(0, 8);
  const today = list[0];
  const tomorrow = list[4];
  const week = list[7];

  const renderedHours = list.map((day) => (
    <div className="temperature-hour">
      <p className="temperature-hour-top">
        {day.main.temp.toString().slice(0, 3)}°
      </p>
      <p className="temperature-hour-bottom">
        {new Date(day.dt_txt).getHours()}
      </p>
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
