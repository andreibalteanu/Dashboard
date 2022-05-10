import { Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import ArticleExtras from "components/ArticleExtras/ArticleExtras";
import React from "react";

import "./Article.css";

function Article({ articleData }) {
  return (
    <Flex className="article">
      <ArticleContainer backgroundImg={articleData.backgroundImage}>
        <Flex
          direction="column"
          justify="space-between"
          className="article-container"
        >
          <Text className="article-title">{articleData.title}</Text>
          <ArticleExtras articleExtraData={articleData.articleExtras} />
        </Flex>
      </ArticleContainer>
    </Flex>
  );
}

export default Article;

const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  background-image: url("../../images/Article/${(props) =>
    props.backgroundImg}");
`;
