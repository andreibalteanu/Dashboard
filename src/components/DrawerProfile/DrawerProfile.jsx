import React from "react";

import "./DrawerProfile.css";
import upload from "../../images/Drawer/Icon-Upload.svg";
import avatar from "../../images/Drawer/Avatar.png";
import sync from "../../images/Drawer/Icon-Sync.svg";
import username from "../../images/Drawer/Icon-Username.svg";
import name from "../../images/Drawer/Icon-Name.svg";
import email from "../../images/Drawer/Icon-Email.svg";
import password from "../../images/Drawer/Icon-Password.svg";
import dot from "../../images/Drawer/Dot.svg";

function DrawerProfile() {
  return (
    <div className="drawerprofile">
      <div className="profile-image-wrapper">
        <div className="upload-wrapper">
          <img src={upload} alt="upload" className="upload-icon" />
        </div>
        <img src={avatar} alt="avatar" className="avatar-icon" />
        <div className="sync-wrapper">
          <img src={sync} alt="sync" className="sync-icon" />
        </div>
      </div>
      <div className="profile-information">
        <div className="info-wrapper">
          <img src={username} alt="username" className="info-icon" />
          <p>Thomas Schneider</p>
        </div>
        <div className="info-wrapper">
          <img src={name} alt="name" className="info-icon" />
          <p>Photographer</p>
        </div>
        <div className="info-wrapper">
          <img src={email} alt="email" className="info-icon" />
          <p>thomas@invisionapp.com</p>
        </div>
        <div className="info-wrapper">
          <img src={password} alt="password" className="info-icon" />
          <div className="dot-wrapper">
            <img src={dot} alt="dot" className="dot-icon" />
            <img src={dot} alt="dot" className="dot-icon" />
            <img src={dot} alt="dot" className="dot-icon" />
            <img src={dot} alt="dot" className="dot-icon" />
            <img src={dot} alt="dot" className="dot-icon" />
            <img src={dot} alt="dot" className="dot-icon" />
            <img src={dot} alt="dot" className="dot-icon" />
            <img src={dot} alt="dot" className="dot-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerProfile;
