import { addPostAC, newTextPostAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapPropsToState = (state) => {
  return {
    newTextPost: state.profileReducer.newTextPost,
    postData: state.profileReducer.postData
  };
};

let mapDispatchToState = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    postTextChange: (body) => {
      dispatch(newTextPostAC(body));
    },
  };
};

const MyPostsContainer = connect(mapPropsToState, mapDispatchToState)(MyPosts);

export default MyPostsContainer;
