import React from "react";
import style from "./Post.module.css";
import {Col, Row} from "antd";

const Post: React.FC<PropsType> = ({newText, likeCount}) => {
  return (
    <Row>
      <Col span={2} style={{margin:10}}>
        <img style={{width: '100%'}} src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' alt='noPhoto'/>
      </Col>
      <Col span={2}>
        <span>{newText}</span>
      </Col>
      <Col span={2}>
        <span>like {likeCount}</span>
      </Col>
    </Row>
  )
}

export default Post

type PropsType = {
  newText: string
  likeCount: number
}