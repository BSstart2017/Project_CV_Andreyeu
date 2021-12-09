import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {getLogin} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";
import LoginForm, {LoginFormDataType} from "./LoginForm";
import {Col, Layout, Row} from "antd";
import {Content} from "antd/es/layout/layout";
import Welcome from "../Welcome/Welcome";
import Text from "antd/es/typography/Text";
import Logo from "../Logo/Logo";

export const Login: FC<PropsType> = ({setOnLogin}) => {
// todo: selector
  const isLogin = useSelector((state: AppStateType) => state.authReducer.isLogin)
  const captcha = useSelector((state: AppStateType) => state.authReducer.captcha)

  const dispatch = useDispatch()

  const onSubmit = (formData: LoginFormDataType) => {
    dispatch(getLogin(formData.email, formData.password, formData.rememberMe, formData.captcha))
    setOnLogin(false)
  };

  if (isLogin) return <Redirect to="profile/"/>

  return (
    <Layout style={{minHeight:'100%', textAlign: 'center'}}>
      <Content >
        <Row>
          <Col span={16}>
            <Welcome buttonGoViking={false}/>
          </Col>
          <Col span={8} >
            <Row>
              <Logo spanNumberLogo={24} spanNumberText={24} textPosition={'center'}/>
            </Row>
            <Col>
              <Text>Welcome!</Text>
            </Col>
            <div>
              <LoginForm onSubmit={onSubmit} captcha={captcha}/>
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
