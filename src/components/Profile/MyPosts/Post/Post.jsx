import React from "react";
import style from "./Post.module.css";

const Post = props => {
    return (
            <div className={style.item}>
              <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' alt='' />
             {props.newText}
              <div>
                <span>like {props.col}</span> 
              </div>
            </div>
    )
}

export default Post 