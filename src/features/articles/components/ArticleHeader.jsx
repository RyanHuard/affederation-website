import React from 'react'

const ArticleHeader = ({ title, author, publishDate }) => {
  return (
    <header className="-mt-6">
        <h1 className="text-[28px] font-bold">{title}</h1>
        <div className="text-sm text-neutral-500 py-6">
          <h2>{publishDate}</h2>
          <h2>by {author}</h2>
        </div>
      </header>
  )
}

export default ArticleHeader