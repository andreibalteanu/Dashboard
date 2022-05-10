import { Flex } from "@chakra-ui/react";
import Article from "components/Article/Article";
import Scores from "components/Scores/Scores";
import Stocks from "components/Stocks/Stocks";
import Subscribe from "components/Subscribe/Subscribe";
import Weather from "components/Weather/Weather";
import React from "react";

import "./Layout.css";
// import articleOneBackground from "../../images/Article/Clip.png";
// import articleTwoBackground from "../../images/Article/960x0.jpeg";

function Layout() {
  const articlesData = {
    firstArticle: {
      title: "Astronauts could land on Red Planet by 2039",
      backgroundImage: "articleOneBackground.png",
      articleExtras: {
        source: "space.com",
        publishTimeAgo: "20m",
        topic: "science",
      },
    },
    secondArticle: {
      title: "Arctic sea ice extent hits record low for winter maximum",
      backgroundImage: "articleTwoBackground.jpeg",
      articleExtras: {
        source: "CNN",
        publishTimeAgo: "1h",
        topic: "environment",
      },
    },
  };
  return (
    <Flex direction="column" className="layout">
      <div className="horizontal-pair">
        <div className="widget-container">
          <Article articleData={articlesData.firstArticle} />
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
            <Article articleData={articlesData.secondArticle} />
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
