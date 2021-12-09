import {Layout} from "antd";
import React, {FC} from "react";
import {Headers} from "../../components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Dialogs from "../../components/Dialogs/Dialogs";
import Profile from "../../components/Profile/Profile";
import ChatPage from "../Chat/ChatPage";
import {Users} from "../../components/Users/Users";
import {Login} from "../../components/Login/Login";
import {SideBar} from "../../components/SideBar/SideBar";
import {Redirect} from "react-router";

const {Content} = Layout;

export const AuthPage: FC<PropsType> = ({onLogin, setOnLogin}) => {
  return (
    <>
      { !onLogin
        ? <Layout>
          <Headers/>
          <Layout>
            <SideBar />
            <Layout style={{padding: '0 24px 24px'}}>
              <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 280}}>
                <Switch>
                  <Route path="/dialogs" render={() => <Dialogs/>}/>
                  <Route path="/profile/:userId?" render={() => <Profile/>}/>
                  <Route path="/chat" render={() => <ChatPage/>}/>
                  <Route path="/users" render={() => <Users/>}/>
                  <Route path="/login" render={() => <Login setOnLogin={setOnLogin}/>}/>
                  <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                  <Route path="*" render={() => <div>404 non found</div>}/>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
        : <Route path="/login" render={() => <Login setOnLogin={setOnLogin}/>}/>
      }
    </>
  )
}

type PropsType = {
  onLogin: boolean
  setOnLogin: (onLogin:boolean) => void
}