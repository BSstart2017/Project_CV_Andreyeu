import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {getLogin} from "../../redux/auth-reducer";
import LoginForm, {LoginFormDataType} from "./LoginForm";
import {Col, Layout, Row} from "antd";
import {Content} from "antd/es/layout/layout";
import Welcome from "../Welcome/Welcome";
import Text from "antd/es/typography/Text";
import Logo from "../Logo/Logo";
import {getCaptchaSelector, getIsLoginSelector} from "../../redux/Selectors/authSelector";

export const Login: FC<PropsType> = ({setOnLogin}) => {

  const isLogin = useSelector(getIsLoginSelector)
  const captcha = useSelector(getCaptchaSelector)

  const dispatch = useDispatch()

  const onSubmit = (formData: LoginFormDataType) => {
    dispatch(getLogin(formData.email, formData.password, formData.rememberMe, formData.captcha))
    setOnLogin(false)
  };

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
