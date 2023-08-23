import React from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import ArticleHeader from "./components/ArticleHeader";
import ArticleBody from "./components/ArticleBody";
import MoreNews from "./components/MoreNews";
import { useArticle } from "./api/getArticle";
import { Spinner } from "@chakra-ui/react";

const Article = () => {
  let { title, articleId } = useParams();

  const articleQuery = useArticle(articleId);
  const article = articleQuery?.data;

  if (articleQuery.isLoading) {
    return (
      <MainLayout>
        <div className="flex h-24 w-full items-center justify-center bg-[#edeef2]">
          <Spinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex bg-white sm:-mt-12 p-16">
        <div className="flex flex-col pr-6">
          <ArticleHeader
            author={article?.author}
            publishDate={article?.publish_date.replace("GMT", "CST")}
            title={article?.title}
          />
          <ArticleBody text={article?.content} />
        </div>
        {/* <MoreNews /> */}
      </div>
    </MainLayout>
  );
};

export default Article;
