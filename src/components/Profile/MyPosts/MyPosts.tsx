import React from "react";
import style from "./MyPosts.module.css";
import { MyPostDispatchToPropsType, MyPostStateToPropsType } from "./MyPostsContainer";
import MyPostsReduxForm, { MyPostFormDataType } from "./MyPostsForm";
import Post from "./Post/Post";

const MyPosts: React.FC<MyPostStateToPropsType & MyPostDispatchToPropsType> = ({postData, addPost}) => {
  
  let postElement = postData.map((el) => (
    <Post newText={el.newText} likeCount={el.likeCount} key={el.id}/>
  ));

  const onSubmit = (formData : MyPostFormDataType) => {
    addPost(formData.newTextBody);
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



