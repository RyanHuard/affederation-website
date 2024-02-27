import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import MarkdownPreview from "@uiw/react-markdown-preview";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "/src/App.css";

import Button from "../../components/button/Button";
import MainLayout from "../../components/layout/MainLayout";
import { createMarkup } from "./components/createMarkup";
import { usePublishArticle } from "./api/postArticle";
import { Input } from "@chakra-ui/react";

const UploadArticles = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  const publishArticleMutation = usePublishArticle();

  const handlePostArticle = async () => {
    const formData = new FormData();
    formData.append('author', author);
    formData.append('title', title);
    formData.append('content', convertedContent);
    formData.append('thumbnail', thumbnail);

    publishArticleMutation.mutate(formData);
  };

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);


  return (
    <MainLayout>
      <form onSubmit={handlePostArticle} encType="multipart/form-data" className="flex flex-col gap-4 bg-white px-4 pb-16 sm:-mt-12 sm:px-16">
        <h1 className="pb-4 pt-10 text-[28px] font-bold">Publish an Article</h1>
        <div className="flex flex-col gap-4">
          <Input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <span>
            Upload thumbnail (16:9) <br />{" "}
            <input
              onChange={(e) => setThumbnail(e.target.files[0])}
              accept="image/*"
              type="file"
            />{" "}
          </span>
        </div>
        <Editor
          editorState={editorState}
          editorStyle={{ minHeight: "200px" }}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        <h2 className="font-xl font-semibold">Preview</h2>
        <div className="border border-neutral-300 p-2">
          <MarkdownPreview source={convertedContent} />
        </div>
        <Button type="submit">Publish</Button>
      </form>
    </MainLayout>
  );
};

export default UploadArticles;
