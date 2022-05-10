import React from "react";

import NavbarMenu from "components/NavbarMenu/NavbarMenu";

import NavbarPlus from "components/NavbarPlus/NavbarPlus";
import "./Navbar.css";
import Logo from "../../images/Navbar/Logo.svg";

function Navbar({ profileImageSrc, toggleDrawer }) {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <NavbarMenu />
        <div className="navbarlogo">
          <img src={Logo} alt="logo" className="icon-logo" />
        </div>
        <NavbarPlus
          profileImageSrc={profileImageSrc}
          toggleDrawer={toggleDrawer}
        />
      </div>
      <div className="widgets-title">WIDGETS</div>
    </div>
  );
}

export default Navbar;
