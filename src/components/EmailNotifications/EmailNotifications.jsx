import EmailNotificationsDay from "components/EmailNotificationsDay/EmailNotificationsDay";
import React from "react";

import "./EmailNotifications.css";

function EmailNotifications() {
  return (
    <div className="email-notifications">
      <p>EMAIL NOTIFICATIONS</p>
      <div className="input-email-wrapper">
        <EmailNotificationsDay day="Monday" />
        <EmailNotificationsDay day="Tuesday" />
        <EmailNotificationsDay day="Wednesday" />
        <EmailNotificationsDay day="Thursday" />
        <EmailNotificationsDay day="Friday" />
      </div>
    </div>
  );
}

export default EmailNotifications;
