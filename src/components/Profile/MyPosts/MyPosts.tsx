import React, {FC} from "react"
import Post from "./Post/Post"
import {useSelector} from "react-redux"
import {Col, Row} from "antd"
import {getPostDataSelector} from "../../../redux/Selectors/profileSelector"
import MyPostsForm from "./MyPostsForm";


const MyPosts: FC = () => {

  const postData = useSelector(getPostDataSelector)

  let postElement = postData.map((el) => (
    <Post newText={el.newText} likeCount={el.likeCount} key={el.id}/>
  ));

  return (
    <Row justify={"center"}  style={{backgroundColor:'white', borderRadius: '30px'}}>
      <Col span={24}>
        <h3> My post </h3>
        <MyPostsForm onSubmit={(values)=>{}}/>
        {postElement}
      </Col>
    </Row>
  );
};

export default MyPosts;



