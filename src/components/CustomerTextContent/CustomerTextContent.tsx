import React, {FC} from 'react'
import {Col, Row} from "antd";
import Text from "antd/es/typography/Text";

const CustomerTextContent : FC = ( ) => {
  return (
    <div style={{paddingTop: 100}}>
      <Row>
        <Col span={3} offset={4}>
          <Text style={{color: 'black', fontSize: 14}}>VIKINGER COMMUNITY</Text>
        </Col>
      </Row>
      <Row className="site-layout-background" style={{paddingTop: 24}}>
        <Col span={8} offset={4}>
          <div><Text style={{color: 'black', fontSize: 26, fontWeight: 'bolder'}}>The Best Way to Connect</Text>
          </div>
          <div><Text style={{color: 'black', fontSize: 26, fontWeight: 'bolder'}}>With Your Friends!</Text></div>
        </Col>
        <Col span={8}>
          <Text style={{color: 'black', fontSize: 14}}>We made sure that the theme has everything you need to build
            an incredible community, and we also have ucoming features updates, so keep an eye out!.</Text>
        </Col>
      </Row>
    </div>
  )
}

export default  CustomerTextContent