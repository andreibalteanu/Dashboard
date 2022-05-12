import React from "react";

import ArticleExtras from "components/ArticleExtras/ArticleExtras";

import "./Article.css";

function Article({ articleData }) {
  return (
    <div className="article">
      <div
        className="article-mask"
        style={{
          backgroundImage: `url(${articleData.backgroundImage})`,
        }}
      >
        <div className="article-container">
          <p className="article-title">{articleData.title}</p>
          <ArticleExtras articleExtraData={articleData.articleExtras} />
        </div>
      </div>
    </div>
  );
}

export default Article;
