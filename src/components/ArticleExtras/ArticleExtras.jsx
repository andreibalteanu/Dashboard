import React from "react";

import sourceIcon from "../../images/Article/Icon-Source.svg";
import timeIcon from "../../images/Article/Icon-Time.svg";

import "./ArticleExtras.css";

function ArticleExtras({ articleExtraData }) {
  return (
    <div className="articleextras">
      <div className="article-info">
        <div className="article-source">
          <img
            src={sourceIcon}
            alt="source"
            className="article-icon source-icon"
          />
          <p>{articleExtraData.source}</p>
        </div>
        <div className="article-publish-time">
          <img src={timeIcon} alt="time" className="article-icon time-icon" />
          <p>{articleExtraData.publishTimeAgo} ago</p>
        </div>
      </div>
      <p className="article-topic">{articleExtraData.topic.toUpperCase()}</p>
    </div>
  );
}

export default ArticleExtras;
