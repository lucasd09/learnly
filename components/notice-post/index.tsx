import React from "react";
import { contentText, header, postname, postrole, wrapper } from "./styles.css";
import Icon from "../icon";
import Image from "next/image";

const NoticePost: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <Icon icon="account_circle" />
        <div>
          <h1 className={postname}>{post.name}</h1>
          <p className={postrole}>{post.role}</p>
        </div>
      </div>
      <div>
        <p className={contentText}>{post.text}</p>
      </div>
    </div>
  );
};

export default NoticePost;
