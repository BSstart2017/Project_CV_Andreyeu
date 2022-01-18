import React, {FC} from 'react'
import {Col, Row} from "antd";

const CustomerTextContent : FC = ( ) => {
  return (
    <div style={{paddingTop: 100}}>
      <Row>
        <Col span={3} offset={4}>
          <span style={{color: 'black', fontSize: 14}}>VIKINGER COMMUNITY</span>
        </Col>
      </Row>
      <Row className="site-layout-background" style={{paddingTop: 24}}>
        <Col span={8} offset={4}>
          <div><span style={{color: 'black', fontSize: 26, fontWeight: 'bolder'}}>The Best Way to Connect</span>
          </div>
          <div><span style={{color: 'black', fontSize: 26, fontWeight: 'bolder'}}>With Your Friends!</span></div>
        </Col>
        <Col span={8}>
          <span style={{color: 'black', fontSize: 14}}>We made sure that the theme has everything you need to build
            an incredible community, and we also have ucoming features updates, so keep an eye out!.</span>
        </Col>
      </Row>
    </div>
  )
}

export default  CustomerTextContent