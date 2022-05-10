import Article from "components/Article/Article";
import Scores from "components/Scores/Scores";
import Stocks from "components/Stocks/Stocks";
import Subscribe from "components/Subscribe/Subscribe";
import Weather from "components/Weather/Weather";
import React from "react";

import "./Layout.css";

function Layout({ data }) {
  return (
    <div className="layout">
      <div className="horizontal-pair">
        <div className="widget-container">
          <Article articleData={data.articles.firstArticle} />
        </div>
        <div className="widget-container">
          <Weather data={data.weather} />
        </div>
      </div>
      <Stocks data={data.stocks} />
      <div className="container">
        <div className="vertical-pair">
          <div className="widget-container">
            <Subscribe />
          </div>
          <div className="widget-container">
            <Article articleData={data.articles.secondArticle} />
          </div>
        </div>
        <div className="widget-container">
          <Scores data={data.scores} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
