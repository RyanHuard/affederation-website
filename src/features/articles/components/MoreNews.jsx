import React from "react";

import { useRecentArticles } from "../../home/cards/article-carousel/api/getArticles";
import tb from "/src/assets/UTSA_Football_Slide-ac6d4cc60d.jpg"
import { Link } from "react-router-dom";

const MoreNews = () => {
  const moreArticlesQuery = useRecentArticles(6);
  const moreArticles = moreArticlesQuery.data;

  return (  
    <div className="-mt-4 pl-16 lg:min-w-[24rem] lg:block hidden">
      <h1 className="text-xl font-bold pb-6">More News</h1>
        <ul>
        {moreArticles?.map((article, i) => (
          <Link to={`/news/${article?.title.replaceAll(" ", "-").toLowerCase()}/${article?.article_id}`} >
          <li className="flex mb-6 h-16 overflow-hidden">
            <img src={article?.thumbnail_url ? `/article_thumbnails/${article.thumbnail_url}` : tb} />
            <div className="pl-4 font-semibold text-sm  leading-4 flex flex-col">
            <span className="line-clamp-3">{article?.title}</span>
            <span className="text-xs text-neutral-500">{article?.author}</span>
            </div>
          </li>
          </Link>
        ))}
        </ul>
    </div>
  );
};

export default MoreNews;
