import React from "react";

import "./NavbarMenu.css";
import menuIcon from "../../images/Navbar/Icon-Menu.svg";

function NavbarMenu() {
  return (
    <div className="navbarmenu">
      <img src={menuIcon} alt="menu" className="icon-menu" />
      <div className="navbar-menu-title">WIDGETS</div>
    </div>
  );
}

export default NavbarMenu;
