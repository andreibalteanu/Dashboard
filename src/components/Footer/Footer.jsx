import { Flex } from "@chakra-ui/react";
import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <Flex direction="row" justify="space-between" className="footer">
      <div>ArrowLeft</div>
      <div>Numbers</div>
      <div>ArrowRight</div>
    </Flex>
  );
}

export default Footer;
