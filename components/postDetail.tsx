import React, { useEffect } from "react"
import { PostData } from "../lib/posts";
import Prism from 'prismjs';

interface PostDetailProps {
  postData: PostData
}

const PostDetail = ({ postData }: PostDetailProps) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="prose">
      <h1 className="text-3xl font-bold mt-5 mb-3">
        {postData.fileData.matter.title}
      </h1>
      <div className="line-numbers my-5">
        <div dangerouslySetInnerHTML={{ __html: postData.fileData.contentHtml }} />
      </div>
    </div>
  )
}

export default PostDetail