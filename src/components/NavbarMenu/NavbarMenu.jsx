import React from "react";

import menuIcon from "../../images/Navbar/Icon-Menu.svg";

import "./NavbarMenu.css";

function NavbarMenu() {
  return (
    <div className="navbarmenu">
      <img src={menuIcon} alt="menu" className="icon-menu" />
      <div className="navbar-menu-title">WIDGETS</div>
    </div>
  );
}

export default NavbarMenu;
