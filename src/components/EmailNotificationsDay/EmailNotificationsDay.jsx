import React from "react";

import "./EmailNotificationsDay.css";

function EmailNotificationsDay({ day }) {
  return (
    <div className="email-notifications-day">
      <p className="name-day">{day}</p>
      <label className="toggle" htmlFor={`myToggle${day}`}>
        <input
          className="toggle__input"
          name=""
          type="checkbox"
          id={`myToggle${day}`}
        />
        <div className="toggle__fill" />
      </label>
    </div>
  );
}

export default EmailNotificationsDay;
