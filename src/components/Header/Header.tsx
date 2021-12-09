import {Avatar, Badge, Button, Col, Row} from "antd";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLogout} from "../../redux/auth-reducer";
import {Layout} from 'antd';
import Text from "antd/lib/typography/Text";
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from '@ant-design/icons';
import {getLoginSelector} from "../../redux/Selectors/authSelector";
import Logo from "../Logo/Logo";
import {getCollapsed} from "../../redux/Selectors/appSelector";
import {actions} from "../../redux/app-reducer";

const {Header} = Layout;

export const Headers: React.FC = () => {

  const login = useSelector(getLoginSelector)
  const collapsed = useSelector(getCollapsed)
  const dispatch = useDispatch()

  const onGetLogout = () => dispatch(getLogout())
  const onToggleCollapsed = () => dispatch(actions.setToggleCollapsed(!collapsed))



  return (
    <Header className="header">
      <Row>
        <Col span={19}>
          <Row style={{textAlign: 'center'}}>
            <Logo spanNumberText={2} spanNumberLogo={1}/>
            <Col span={2} style={{textAlign: 'center'}}>
              <Button type="primary" onClick={onToggleCollapsed}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
            </Col>
          </Row>
        </Col>
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
      </Row>
    </Header>

  );
}