import { Flex } from "@chakra-ui/react";
import Article from "components/Article/Article";
import Scores from "components/Scores/Scores";
import Stocks from "components/Stocks/Stocks";
import Subscribe from "components/Subscribe/Subscribe";
import Weather from "components/Weather/Weather";
import React from "react";

import "./Layout.css";

function Layout() {
  // const articleData = {
  //   firstArticle: {
  //     title: "Astronauts could land on Red Planet by 2039",
  //     articleExtras: {
  //       source: "space.com",
  //       timeAgo: "20m",
  //       topic: "science",
  //     },
  //   },
  //   secondArticle: {
  //     title: "Arctic sea ice extent hits record low for winter maximum",
  //     articleExtras: {
  //       source: "CNN",
  //       timeAgo: "1h",
  //       topic: "environment",
  //     },
  //   },
  // };
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
