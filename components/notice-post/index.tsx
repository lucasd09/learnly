import React from "react";
import {
  contentText,
  header,
  postname,
  postrole,
  wrapper,
  imgHeader,
} from "./styles.css";
import Image from "next/image";

const NoticePost: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <i className={imgHeader}></i>
        <div>
          <h1 className={postname}>{post.name}</h1>
          <p className={postrole}>{post.role}</p>
        </div>
      </div>
      <div>
        <p className={contentText}>{post.text}</p>
      </div>
      <div></div>
    </div>
  );
};

export default NoticePost;
