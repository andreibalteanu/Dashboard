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
      <div className="horizontal-pair">
        <div className="widget-container">
          <Article />
        </div>
        <div className="widget-container">
          <Weather />
        </div>
      </div>
      <Stocks />
      <div className="container">
        <div className="vertical-pair">
          <div className="widget-container">
            <Subscribe />
          </div>
          <div className="widget-container">
            <Article />
          </div>
        </div>
        <div className="widget-container">
          <Scores />
        </div>
      </div>
    </Flex>
  );
}

export default Layout;
