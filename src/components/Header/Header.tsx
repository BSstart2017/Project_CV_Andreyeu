import {Avatar, Badge, Button, Col, Row} from "antd";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {getLogout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";
import {Layout} from 'antd';
import Text from "antd/lib/typography/Text";
import {UserOutlined} from '@ant-design/icons';

const {Header} = Layout;

export const Headers: React.FC = () => {

  //todo: selector
  const isLogin = useSelector((state: AppStateType) => state.authReducer.isLogin)
  const login = useSelector((state: AppStateType) => state.authReducer.login)

  const dispatch = useDispatch()

  const onGetLogout = () => dispatch(getLogout())

  return (
    <Header className="header">
      <Row>
        <Col span={19}>
          <div className="logo"/>
        </Col>
        {isLogin
          ? <>
            <Col span={1}>
              <span className="avatar-item">
                <Badge count={1}>
                  <Avatar shape="square" icon={<UserOutlined/>}/>
                </Badge>
              </span>
            </Col>
            <Col span={1}><Text type="success">{login}</Text></Col>
            <Col span={3}>
              <Button type="primary" onClick={onGetLogout}>log out</Button>
            </Col>
          </>
          : <Col span={4}> <Button type="primary"><NavLink to={'/login'}>Login</NavLink></Button></Col>}
      </Row>
    </Header>

  );
}