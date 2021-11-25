import { actions, PostDataType } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/store";

let mapPropsToState = (state: AppStateType): MyPostStateToPropsType => {
  return {
    postData: state.profileReducer.postData
  };
};

export default connect<MyPostStateToPropsType, MyPostDispatchToPropsType, {} , AppStateType>(mapPropsToState, {addPost: actions.setAddPostSuccess})(MyPosts);;

export type MyPostStateToPropsType = {
  postData : Array<PostDataType>
}

export type MyPostDispatchToPropsType = {
  addPost: (newTextBody : string) => void
}