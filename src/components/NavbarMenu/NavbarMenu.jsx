import { Flex, Image } from "@chakra-ui/react";
import React from "react";

import "./NavbarMenu.css";
import menuIcon from "../../images/Navbar/Icon-Menu.svg";

function NavbarMenu() {
  return (
    <Flex className="navbarmenu">
      <Image src={menuIcon} height="20" alt="menu" />
      <div className="navbar-menu-title">WIDGETS</div>
    </Flex>
  );
}

export default NavbarMenu;
