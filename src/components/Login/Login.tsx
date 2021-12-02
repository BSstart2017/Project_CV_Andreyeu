import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {getLogin} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";
import LoginForm, {LoginFormDataType} from "./LoginForm";

export const Login: React.FC = React.memo(() => {
// todo: selector
  const isLogin = useSelector((state: AppStateType) => state.authReducer.isLogin)
  const captcha = useSelector((state: AppStateType) => state.authReducer.captcha)

  const dispatch = useDispatch()

  const onSubmit = (formData: LoginFormDataType) => {
    dispatch(getLogin(formData.email, formData.password, formData.rememberMe, formData.captcha))
  };

  if (isLogin) return <Redirect to="profile/"/>

  return (
    <div>
      <div>
        <span>Login</span>
      </div>
      <div>
        <LoginForm onSubmit={onSubmit} captcha={captcha}/>
      </div>
    </div>
  );
})
  


