import { Flex, Image } from "@chakra-ui/react";
import React from "react";

import "./Navbar.css";
import menuIcon from "../../images/Navbar/Icon-Menu.svg";
import addIcon from "../../images/Navbar/Icon-Add.svg";
import Logo from "../../images/Navbar/Logo.png";

function Navbar() {
  return (
    <Flex direction="column" className="navbar">
      <Flex
        direction="row"
        justify="space-between"
        align="flex-end"
        className="navbar-top"
      >
        <Image src={menuIcon} height="20" alt="menu" />
        <Image src={Logo} height="20" alt="logo" />
        <Image src={addIcon} height="20" alt="add" />
      </Flex>
      <Flex justify="center" align="center" className="widgets-title">
        WIDGETS
      </Flex>
    </Flex>
  );
}

export default Navbar;
