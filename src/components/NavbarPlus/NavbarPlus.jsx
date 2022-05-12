import React from "react";

import addIcon from "../../images/Navbar/Icon-Add.svg";
import searchIcon from "../../images/Navbar/Icon-Search.svg";
import bookmark from "../../images/Navbar/Icon-Bookmark.svg";

import "./NavbarPlus.css";

function NavbarPlus({ profileImageSrc, toggleDrawer }) {
  return (
    <div className="navbarplus">
      <img src={addIcon} alt="add" className="add-icon" />
      <img src={searchIcon} alt="search" className="navbar-icon search-icon" />
      <img src={profileImageSrc} alt="avatar" className="navbar-icon avatar" />
      <img
        src={bookmark}
        onClick={() => {
          toggleDrawer();
        }}
        alt="avatar"
        className="navbar-icon bookmark-icon"
      />
    </div>
  );
}

export default NavbarPlus;
