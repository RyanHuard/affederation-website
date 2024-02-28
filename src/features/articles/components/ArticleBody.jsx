import React from 'react'
import parse from "html-react-parser"


const ArticleBody = ({ text }) => {
  text = text.replaceAll("</p>", "</p><br/>")

  return (
    <div className="leading-7 sm:leading-7 sm:text-base text-sm">{parse(text)}</div>
  )
}

export default ArticleBody