import React from "react";
import { Link } from "react-router-dom"

import tb from "/src/assets/UTSA_Football_Slide-ac6d4cc60d.jpg"

const Thumbnail = ({ article }) => {
  return (
    <div className="relative min-w-full">
      <Link to={`/news/${article.title.replaceAll(" ", "-").toLowerCase()}/${article.article_id}`}>
        <img
          src={tb}
          className="rounded-t-sm max-h-[418px] aspect-[16/9] w-full"
        />
        <div className="absolute bottom-0 left-0 h-96 w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="mb-[0.125rem] h-1 w-9 bg-aff-orange" />
          <h1 className="mb-3 text-xl font-bold leading-5 text-white sm:text-3xl sm:leading-8">
            {article.title.toUpperCase()}
          </h1>
          <h3 className="text-sm font-bold text-aff-orange">READ MORE</h3>
        </div>
      </Link>
    </div>
  );
};

export default Thumbnail;
