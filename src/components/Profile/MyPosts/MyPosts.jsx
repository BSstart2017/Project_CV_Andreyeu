import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postElement = props.postData.map((el) => (
    <Post newText={el.newText} col={el.col} key={el.id}/>
  ));
  
  const onAddPost = () => props.addPost();
  const onChangePostText = (event) => props.postTextChange(event.target.value);

  return (
    <div className={style.myPostBlock}>
      <h3> My post </h3>
      <div>
        <textarea value={props.newTextPost} onChange={onChangePostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add new Post</button>
      </div>
        {postElement}
    </div>
  );
};

export default MyPosts;
