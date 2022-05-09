import { Flex, Image } from "@chakra-ui/react";
import React from "react";

import NavbarMenu from "components/NavbarMenu/NavbarMenu";

import NavbarPlus from "components/NavbarPlus/NavbarPlus";
import "./Navbar.css";
import Logo from "../../images/Navbar/Logo.svg";

function Navbar({ profileImageSrc }) {
  return (
    <Flex direction="column" className="navbar">
      <Flex direction="row" className="navbar-top">
        <NavbarMenu />
        <Flex justify="center" className="navbarlogo">
          <Image src={Logo} height="20" alt="logo" />
        </Flex>
        <NavbarPlus profileImageSrc={profileImageSrc} />
      </Flex>
      <div className="widgets-title">WIDGETS</div>
    </Flex>
  );
}

export default Navbar;
