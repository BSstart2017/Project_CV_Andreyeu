import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route} from "react-router-dom";
import "./App.css";
import Preloader from "./components/commons/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Login } from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Users } from "./components/Users/Users";
import {initializedApp} from "./redux/app-reducer"
import store, { AppStateType } from "./redux/store";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb} from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import { Headers } from "./components/Header/Header";
import ChatPage from "./Pages/Chat/ChatPage";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const App: React.FC = () => {

  const initialized = useSelector((state: AppStateType) => state.appReducer.initialized)

  const dispatch = useDispatch() 

  const getInitializedApp = () => dispatch(initializedApp())

  React.useEffect(() => {
    getInitializedApp()
  }, [initialized])

    if(!initialized) return <Preloader />
    return (
    <Layout>
      <Headers />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
              <Menu.Item key="1"><Link to="/profile">Profile</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/dialogs">Dialogs</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
              <Menu.Item key="3"><Link to="/users">Users</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<LaptopOutlined />} title="Chat">
              <Menu.Item key="4"><Link to="/chat">Users</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/chat" render={() => <ChatPage />} />
          <Route path="/users" render={() => <Users />} />
          <Route path="/login" render={() => <Login />} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )
}

export const AppSocialProject = () => {
 return <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
</React.StrictMode>
}


