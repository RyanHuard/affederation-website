import React from 'react'

const Headlines = ({ articles, currentIndex, setCurrentIndex }) => {
  return (
    <div className="flex h-16 lg:h-auto xl:h-16 flex-grow gap-1 bg-white rounded-b-sm">
        {articles?.map((article, index) => {
          const isActive = index === currentIndex;
          const activeBgColor = isActive ? "aff-orange" : "aff-blue";

          return (
            <div
              onClick={() => setCurrentIndex(index)}
              className="flex-1 cursor-pointer overflow-hidden rounded-b-lg"
              key={index}
            >
              <div
                className={`h-[.2rem] bg-${activeBgColor}`}
              ></div>
              <span
                className={`block text-sm font-semibold text-${activeBgColor} h-12 lg:h-auto xl:h-12 overflow-hidden p-2 leading-5`}
              >
                {article?.title.toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>
  )
}

export default Headlines