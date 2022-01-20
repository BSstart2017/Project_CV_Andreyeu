import React, {FC} from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import LoginForm from "./LoginForm";
import {Col, Layout, Row} from "antd";
import Welcome from "../Welcome/Welcome";
import Logo from "../Logo/Logo";
import {getIsLoginSelector} from "../../redux/Selectors/authSelector";

const Content = Layout.Content
export const Login: FC<PropsType> = ({setOnLogin}) => {

  const isLogin = useSelector(getIsLoginSelector)

  if (isLogin) return <Redirect to="profile/"/>

  return (
    <Layout style={{textAlign: 'center'}}>
      <Content >
        <Row>
          <Col span={16}>
            <Welcome buttonGoViking={false}/>
          </Col>
          <Col span={8}>
            <Row >
              <Logo spanNumberLogo={24} spanNumberText={24} textPosition={'center'}/>
            </Row>
            <Col>
              <span>Welcome!</span>
            </Col>
            <div>
              <LoginForm onSubmit={values => {}} setOnLogin={setOnLogin}/>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

type PropsType = {
  setOnLogin: (onLogin:boolean) => void
}
