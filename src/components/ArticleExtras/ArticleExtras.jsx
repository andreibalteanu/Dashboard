import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import "./ArticleExtras.css";
import sourceIcon from "../../images/Article/Icon-Source.svg";
import timeIcon from "../../images/Article/Icon-Time.svg";

function ArticleExtras({ articleExtraData }) {
  return (
    <Flex direction="row" justify="space-between" className="articleextras">
      <Flex className="article-info" justify="space-between">
        <Flex align="center" className="article-source">
          <Image
            src={sourceIcon}
            height="13"
            alt="source"
            className="article-icon"
          />
          <Text>{articleExtraData.source}</Text>
        </Flex>
        <Flex align="center" className="article-publish-time">
          <Image
            src={timeIcon}
            height="13"
            alt="time"
            className="article-icon"
          />
          <Text>{articleExtraData.publishTimeAgo} ago</Text>
        </Flex>
      </Flex>
      <Text className="article-topic">
        {articleExtraData.topic.toUpperCase()}
      </Text>
    </Flex>
  );
}

export default ArticleExtras;
