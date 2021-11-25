import React from "react";
import { Redirect } from "react-router";
import { LoginDispatchToPropsType, LoginStateToPropsType } from "./LoginContainer";
import LoginForm, { LoginFormDataType } from "./LoginForm";

const Login : React.FC<LoginStateToPropsType & LoginDispatchToPropsType > = React.memo(({getLogin, isLogin, captcha}) => { 

  const onSubmit = (formData : LoginFormDataType ) => {
    getLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
  };

  if(isLogin) return <Redirect to="profile/" />

  return (
    <div>
      <div>
        <span>Login</span>
      </div>
      <div>
        <LoginForm onSubmit={onSubmit} captcha={captcha} />
      </div>
    </div>
  );
})

export default Login
  


