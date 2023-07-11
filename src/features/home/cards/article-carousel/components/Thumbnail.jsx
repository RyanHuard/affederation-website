import React from "react";
import { Link } from "react-router-dom"

const Thumbnail = ({ article }) => {
  return (
    <div className="relative min-w-full">
      <Link to={article.title.replace(" ", "-").toLowerCase()}>
        <img
          src="https://goutsa.com/images/2022/1/25/dome_1stgm.jpg"
          className="rounded-t-sm"
        />
        <div className="absolute bottom-0 left-0 h-96 w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="mb-[0.125rem] h-1 w-9 bg-aff-orange" />
          <h1 className="mb-3 text-xl font-bold leading-5 text-white sm:text-3xl sm:leading-8">
            {article.title}
          </h1>
          <h3 className="text-sm font-bold text-aff-orange">READ MORE</h3>
        </div>
      </Link>
    </div>
  );
};

export default Thumbnail;
