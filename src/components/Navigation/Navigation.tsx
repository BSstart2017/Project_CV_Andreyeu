import React, { FC } from "react";
import {Col, Menu} from "antd";


const Navigation : FC = () => {
  return (
    <Col span={19}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
            style={{textAlign: 'left', color: 'white', fontWeight: "bold"}}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Testimonials</Menu.Item>
      </Menu>
    </Col>
  )
}

export default Navigation