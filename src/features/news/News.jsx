import React from "react";
import { Link } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import { useRecentArticles } from "../home/cards/article-carousel/api/getArticles";
import tb from "/src/assets/UTSA_Football_Slide-ac6d4cc60d.jpg";

const News = () => {
  const articleQuery = useRecentArticles(99);
  const articles = articleQuery.data;
  console.log(articles);

  return (
    <MainLayout>
      <div className="flex h-screen flex-col bg-white p-8 pt-12 sm:-mt-12 sm:p-16">
        <div className="text-[28px] font-bold">News</div>

        <ul className="pt-8">
          {articles?.map((article, i) => (
            <Link
              to={`/news/${article?.title.replaceAll(" ", "-").toLowerCase()}/${
                article?.article_id
              }`}
            >
              <li className="mb-8 flex h-24 overflow-hidden">
                <img
                  src={
                    article?.thumbnail_url
                      ? `/article_thumbnails/${article.thumbnail_url}`
                      : tb
                  }
                />
                <div className="flex flex-col pl-8 text-xl font-semibold my-auto">
                  <span className="line-clamp-3">{article?.title}</span>
                  <span className="text-base text-neutral-500 font-norm">
                    {article?.author}
                  </span>
                  <span className="text-base text-neutral-500 -mt-1">
                    {article?.publish_date.split(" ").slice(0, 4).join(" ")}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default News;
