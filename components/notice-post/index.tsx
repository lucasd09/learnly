import React from "react";
import Icon from "../icon";
import {
  contentText,
  header,
  postname,
  postrole,
  wrapper,
  imgHeader,
  iconButton,
  buttonBar
} from "./styles.css";

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
      <div className={buttonBar}>
        {post.imgURL}
      </div>
      <div className={buttonBar}>
        <button className={iconButton}><Icon icon='mail'/>Visualizar</button>
      </div>
    </div>
  );
};

export default NoticePost;
