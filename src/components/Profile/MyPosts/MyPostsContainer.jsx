import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapPropsToState = (state) => {
  return {
    newTextPost: state.profileReducer.newTextPost,
    postData: state.profileReducer.postData
  };
};

export default connect(mapPropsToState, {addPost})(MyPosts);;
