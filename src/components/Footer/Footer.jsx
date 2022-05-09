import { Flex, Image, Text } from "@chakra-ui/react";
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
        <Text className="page-number page-selected">1</Text>
        <Text className="page-number">2</Text>
        <Text className="page-number">3</Text>
        <Text className="page-number">4</Text>
        <Text className="page-number">5</Text>
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
