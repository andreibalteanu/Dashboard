import { Flex, Image } from "@chakra-ui/react";
import React from "react";

import "./Footer.css";
import arrowLeft from "../../images/Footer/Icon-Left.svg";
import arrowRight from "../../images/Footer/Icon-Right.svg";

function Footer() {
  return (
    <Flex direction="row" align="center" className="footer">
      <Flex className="leftside-footer">
        <Image src={arrowLeft} height="15" alt="menu" className="arrow-left" />
      </Flex>
      <div className="number-of-pages">
        <div className="page-number page-selected">1</div>
        <div className="page-number">2</div>
        <div className="page-number">3</div>
        <div className="page-number">4</div>
        <div className="page-number">5</div>
      </div>
      <Flex justify="flex-end" className="rightside-footer">
        <Image
          src={arrowRight}
          height="15"
          alt="menu"
          className="arrow-right"
        />
      </Flex>
    </Flex>
  );
}

export default Footer;
