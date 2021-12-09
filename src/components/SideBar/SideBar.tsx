import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import {LaptopOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {SubMenu} = Menu;
const {Sider} = Layout;

export const SideBar: FC = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}>
        <SubMenu key="sub1" icon={<UserOutlined/>} title="Profile">
          <Menu.Item key="1"><Link to="/profile">Profile</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/dialogs">Dialogs</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Users">
          <Menu.Item key="3"><Link to="/users">Users</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<LaptopOutlined/>} title="Chat">
          <Menu.Item key="4"><Link to="/chat">Chat</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}