import React from "react";
import { Redirect } from "react-router";
import LoginForm from "./LoginForm";

const Login = ({getLogin, isLogin}) => { 

  const onSubmit = (formData) => {
    getLogin(formData.email, formData.password, formData.rememberMe)
  };

  if(isLogin) return <Redirect to="profile/" />

  return (
    <div>
      <div>
        <span>Login</span>
      </div>
      <div>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Login
