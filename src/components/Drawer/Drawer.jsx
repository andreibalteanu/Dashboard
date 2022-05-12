import React from "react";

import DrawerProfile from "components/DrawerProfile/DrawerProfile";
import EmailNotifications from "components/EmailNotifications/EmailNotifications";
import collapse from "../../images/Drawer/Icon-Collapse.svg";
import logout from "../../images/Drawer/Icon-Logout.svg";

import "./Drawer.css";

function Drawer({ toggleDrawer }) {
  return (
    <div className="drawer">
      <DrawerProfile />
      <EmailNotifications />
      <div className="bottom-drawer">
        <img
          onClick={() => {
            toggleDrawer();
          }}
          src={collapse}
          alt="collapse"
          className="drawer-icon collapse-icon"
        />
        <img src={logout} alt="logout" className="drawer-icon logout-icon" />
      </div>
    </div>
  );
}

export default Drawer;
