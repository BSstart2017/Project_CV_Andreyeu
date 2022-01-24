import {Col, Layout, Row} from "antd";
import React, {FC, useCallback, useEffect, useState} from "react";
import {Headers} from "../../components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Dialogs from "../../components/Dialogs/Dialogs";
import Profile from "../../components/Profile/Profile";
import {Users} from "../../components/Users/Users";
import {Login} from "../../components/Login/Login";
import {SideBar} from "../../components/SideBar/SideBar";
import {Redirect} from "react-router";
import {useSelector} from "react-redux";
import {getCollapsed} from "../../redux/Selectors/appSelector";
import Chat from "../Chat/Chat";
import Games from "../../components/Games/Games";

const {Content} = Layout;

export const AuthPage: FC<PropsType> = ({onLogin, setOnLogin}) => {
  const collapsed = useSelector(getCollapsed)
  let [spanSideBar, setSpanSideBar] = useState<number>(1)
  let [spanContent, setSpanContent] = useState<number>(23)

  const setSpan = useCallback((collapsed : boolean) => {
    if(collapsed){
      setSpanSideBar(()=>spanSideBar-1)
      setSpanContent(()=>spanContent+1)
    } else {
      setSpanSideBar(()=>spanSideBar+1)
      setSpanContent(()=>spanContent-1)
    }
  },[collapsed])

  useEffect(() => {
    setSpan(collapsed)
  }, [setSpan, collapsed])

  return (
    <>
      {!onLogin
        ? <Layout>
          <Headers/>
          <Row>
              <SideBar spanNumber={spanSideBar}/>
              <Col span={spanContent} style={{padding: '0 24px 24px'}}>
              <Content  style={{padding: 24, margin: 0}}>
                <Switch>
                  <Route path="/dialogs" render={() => <Dialogs/>}/>
                  <Route path="/profile/:userId?" render={() => <Profile/>}/>
                  <Route path="/chat" render={() => <Chat/>}/>
                  <Route path="/users" render={() => <Users/>}/>
                  <Route path="/games" render={() => <Games/>}/>
                  <Route path="/login" render={() => <Login setOnLogin={setOnLogin}/>}/>
                  <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                  <Route path="*" render={() => <div>404 non found</div>}/>
                </Switch>
              </Content>
            </Col>
          </Row>
        </Layout>
        : <Route path="/login" render={() => <Login setOnLogin={setOnLogin}/>}/>
      }
    </>
  )
}

type PropsType = {
  onLogin: boolean
  setOnLogin: (onLogin: boolean) => void
}