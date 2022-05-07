import { Flex } from "@chakra-ui/react";
import Article from "components/Article/Article";
import Scores from "components/Scores/Scores";
import Stocks from "components/Stocks/Stocks";
import Subscribe from "components/Subscribe/Subscribe";
import Weather from "components/Weather/Weather";
import React from "react";

import "./Layout.css";

function Layout() {
  return (
    <Flex direction="column" className="layout">
      <Article />
      <Weather />
      <Stocks />
      <Subscribe />
      <Article />
      <Scores />
    </Flex>
  );
}

export default Layout;
