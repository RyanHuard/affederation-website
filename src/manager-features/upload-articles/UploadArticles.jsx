import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "/src/App.css";

import MainLayout from "../../components/layout/MainLayout";
import { createMarkup } from "./components/createMarkup";

const UploadArticles = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);


  return (
    <MainLayout>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
      <button onClick={() => console.log(createMarkup(convertedContent))}>
        log
      </button>
    </MainLayout>
  );
};

export default UploadArticles;
