import React, {FC} from "react"
import MyPostsReduxForm, {MyPostFormDataType} from "./MyPostsForm"
import Post from "./Post/Post"
import {useDispatch, useSelector} from "react-redux"
import {actions} from "../../../redux/profile-reducer"
import {Col, Row} from "antd"
import {getPostDataSelector} from "../../../redux/Selectors/profileSelector"


const MyPosts: FC = () => {

  const postData = useSelector(getPostDataSelector)

  const dispatch = useDispatch()

  let postElement = postData.map((el) => (
    <Post newText={el.newText} likeCount={el.likeCount} key={el.id}/>
  ));

  const onSubmit = (formData: MyPostFormDataType) => {
    dispatch(actions.setAddPostSuccess(formData.newTextBody))
  };

  return (
    <Row justify={"center"}  style={{backgroundColor:'white', borderRadius: '30px'}}>
      <Col span={24}>
        <h3> My post </h3>
        <MyPostsReduxForm onSubmit={onSubmit}/>
        {postElement}
      </Col>
    </Row>
  );
};

export default MyPosts;



