import React, {FC} from 'react';
import {Col, Row} from "antd";
import AboutMe from "../../../components/AboutMe/AboutMe";
import Interests from "../../../components/Interests/Interests";
import PersonalInfo from "../../../components/PersonalInfo/PersonalInfo";


const AboutMePage: FC  = () => {
  return (
    <Row justify={"space-between"}>
      <Col span={6} style={{backgroundColor:'white', borderRadius: '30px'}}>
        <AboutMe/>
      </Col>
      <Col span={10} style={{backgroundColor:'white', borderRadius: '30px'}}>
        <Interests />
      </Col>
      <Col span={6} style={{backgroundColor:'white', borderRadius: '30px'}}>
        <PersonalInfo />
      </Col>
    </Row>
  )
}

export default AboutMePage