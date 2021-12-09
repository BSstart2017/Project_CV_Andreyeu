import React, {FC} from 'react';
import {Col, Menu} from "antd";
import {UserOutlined, HomeOutlined, MessageOutlined, SketchOutlined, FileDoneOutlined,
  UsergroupAddOutlined, DingtalkOutlined,EnvironmentOutlined, WechatOutlined, InsuranceOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCollapsed} from "../../redux/Selectors/appSelector";

export const SideBar: FC<PropsType> = ({spanNumber}) => {
  const collapsed = useSelector(getCollapsed)

  return (
    <Col span={spanNumber} className="site-layout-background">
      <Menu mode="inline" defaultSelectedKeys={['1']}
            theme="dark"
            inlineCollapsed={collapsed}
            style={{height: '100%', borderRight: 0}}>
        <Menu.Item key="1" icon={<HomeOutlined/>}><Link to="/profile">Profile</Link></Menu.Item>
        <Menu.Item key="2" icon={<MessageOutlined/>}><Link to="/dialogs">Dialogs</Link></Menu.Item>
        <Menu.Item key="3" icon={<FileDoneOutlined/>}><Link to="/newsfeed">Newsfeed</Link></Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined/>}><Link to="/users">Users</Link></Menu.Item>
        <Menu.Item key="5" icon={<UsergroupAddOutlined/>}><Link to="/groups">Groups</Link></Menu.Item>
        <Menu.Item key="6" icon={<DingtalkOutlined/>}><Link to="/badges">Badges</Link></Menu.Item>
        <Menu.Item key="7" icon={<EnvironmentOutlined/>}><Link to="/quests">Quests</Link></Menu.Item>
        <Menu.Item key="8" icon={<InsuranceOutlined/>}><Link to="/ranks">Ranks</Link></Menu.Item>
        <Menu.Item key="9" icon={<SketchOutlined/>}><Link to="/credits">Credits</Link></Menu.Item>
        <Menu.Item key="10" icon={<WechatOutlined/>}><Link to="/chat">Chat</Link></Menu.Item>
      </Menu>
    </Col>
  )
}

type PropsType = {
  spanNumber: number
}