import React, {FC} from "react";
import style from "./MyPosts.module.css";
import MyPostsReduxForm, {MyPostFormDataType} from "./MyPostsForm";
import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {actions} from "../../../redux/profile-reducer";


const MyPosts: FC = () => {
//todo: selector
  const postData = useSelector((state: AppStateType)=>state.profileReducer.postData)

  const dispatch = useDispatch()

  let postElement = postData.map((el) => (
    <Post newText={el.newText} likeCount={el.likeCount} key={el.id}/>
  ));

  const onSubmit = (formData: MyPostFormDataType) => {
    dispatch(actions.setAddPostSuccess(formData.newTextBody))
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



