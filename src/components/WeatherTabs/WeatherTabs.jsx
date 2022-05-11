/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

import "./WeatherTabs.css";

function WeatherTabs({ days }) {
  const [currentTab, setCurrentTab] = useState("today");
  return (
    <div className="weathertabs">
      <div className="date-tabs">
        <div
          onClick={() => setCurrentTab("today")}
          className="weather-tab date-today"
        >
          TODAY
        </div>
        <div
          onClick={() => setCurrentTab("tomorrow")}
          className="weather-tab date-tomorrow"
        >
          TOMORROW
        </div>
        <div
          onClick={() => setCurrentTab("week")}
          className="weather-tab date-week"
        >
          WEEK
        </div>
      </div>
      <div>
        <p className="tab-temperature">
          {days[currentTab].toString().slice(0, 3)}°
        </p>
      </div>
    </div>
  );
}

export default WeatherTabs;
