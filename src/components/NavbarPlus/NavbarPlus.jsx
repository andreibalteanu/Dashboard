import { Flex, Image } from "@chakra-ui/react";
import React from "react";

import "./NavbarPlus.css";
import addIcon from "../../images/Navbar/Icon-Add.svg";
import searchIcon from "../../images/Navbar/Icon-Search.svg";
import bookmark from "../../images/Navbar/Icon-Bookmark.svg";

function NavbarPlus({ profileImageSrc }) {
  return (
    <Flex justify="flex-end" className="navbarplus">
      <Image src={addIcon} height="20" alt="add" className="add-icon" />
      <Image
        src={searchIcon}
        height="20"
        alt="search"
        className="search-icon"
      />
      <Image
        src={profileImageSrc}
        height="20"
        alt="avatar"
        className="avatar"
      />
      <Image
        src={bookmark}
        height="20"
        alt="avatar"
        className="bookmark-icon"
      />
    </Flex>
  );
}

export default NavbarPlus;
