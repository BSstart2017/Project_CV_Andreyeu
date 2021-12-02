import React from "react";
import style from "./Post.module.css";

const Post: React.FC<PropsType> = ({newText, likeCount}) => {
  return (
    <div className={style.item}>
      <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' alt='noPhoto'/>
      {newText}
      <div>
        <span>like {likeCount}</span>
      </div>
    </div>
  )
}

export default Post

type PropsType = {
  newText: string
  likeCount: number
}