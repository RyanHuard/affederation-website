import React from 'react'
import parse from "html-react-parser"


const ArticleBody = ({ text }) => {
  console.log(text)
  text = text.replaceAll("</p>", "</p><br/>")

  return (
    <div className="leading-7">{parse(text)}</div>
  )
}

export default ArticleBody