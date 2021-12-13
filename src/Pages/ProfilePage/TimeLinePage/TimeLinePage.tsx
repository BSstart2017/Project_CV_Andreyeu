import React, {FC} from 'react';
import {Col, Row} from "antd";
import AboutMe from "../../../components/AboutMe/AboutMe";
import CustomerIcons from "../../../components/CustomerIcons/CustomerIcons";
import MyPosts from "../../../components/Profile/MyPosts/MyPosts";


const TimeLinePage: FC  = () => {
  return (
    <Row justify={"space-between"}>
      <Col span={6} >
          <AboutMe/>
        <CustomerIcons />
      </Col>
      <Col span={10}>
          <MyPosts />
      </Col>
      <Col span={6}>
        <CustomerIcons />
      </Col>
    </Row>
  )
}

export default TimeLinePage