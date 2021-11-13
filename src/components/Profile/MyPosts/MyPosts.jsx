import React from "react";
import style from "./MyPosts.module.css";
import MyPostsReduxForm from "./MyPostsForm";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postElement = props.postData.map((el) => (
    <Post newText={el.newText} col={el.col} key={el.id}/>
  ));

  const onSubmit = (formData) => {
    props.addPost(formData.newTextBody);
  };

  return (
    <div className={style.myPostBlock}>
      <h3> My post </h3>
      <MyPostsReduxForm onSubmit={onSubmit}/>
        {postElement}
    </div>
  );
};

export default MyPosts;
