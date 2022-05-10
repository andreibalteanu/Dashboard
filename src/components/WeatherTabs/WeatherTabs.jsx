/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

function WeatherTabs({ days }) {
  const [currentTab, setCurrentTab] = useState("today");
  return (
    <div>
      <div>
        <div onClick={() => setCurrentTab("today")}>Today</div>
        <div onClick={() => setCurrentTab("tomorrow")}>Tomorrow</div>
        <div onClick={() => setCurrentTab("week")}>Week</div>
      </div>
      <div>
        <p>{days[currentTab]}</p>
      </div>
    </div>
  );
}

export default WeatherTabs;
