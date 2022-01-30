import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCaptchaSelector} from "../../redux/Selectors/authSelector";
import {getLogin} from "../../redux/auth-reducer";
import { Form, Input, SubmitButton, Checkbox  } from 'formik-antd'
import { Formik } from 'formik'
import {CheckboxChangeEvent} from "antd/es/checkbox";

const LoginForm: React.FC<PropsType> = ({onSubmit, setOnLogin}) => {

  const captcha = useSelector(getCaptchaSelector)
  const [emailChange, setEmailChange] = useState<string>('')
  const [PasswordChange, setPasswordChange] = useState<string>('')
  const [rememberMeChange, setRememberMeChange] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleChangeEmail = (event:ChangeEvent<HTMLInputElement>) => setEmailChange(event.target.value)
  const handleChangePassword = (event:ChangeEvent<HTMLInputElement>) => setPasswordChange(event.target.value)
  const handleChangeRememberMe = (event:CheckboxChangeEvent) => setRememberMeChange(event.target.value)


  const handleSubmit = async (values: FormType) => {
    onSubmit(values)
    await dispatch(getLogin(values.email, values.password, values.rememberMe, values.captcha))
    setOnLogin(false)
  }
  return (
      <Formik<FormType> initialValues={{email:'', captcha:'', password:'', rememberMe: false}} onSubmit={handleSubmit}>
        <Form >
          <Input name='email' aria-label='email' placeholder='Email' type={"email"} value={emailChange} onChange={handleChangeEmail}/>
          <Input name='password' aria-label='password' placeholder='Password' type={"password"} value={PasswordChange} onChange={handleChangePassword}/>
          <Checkbox name='rememberMe' aria-label='rememberMe' checked={rememberMeChange} onChange={handleChangeRememberMe}/>
          {captcha && <div>
            <div>
              <img src={captcha} alt="noPhoto"/>
            </div>
            <Input name='captcha' aria-label='captcha' type={"text"}/>
          </div>}
          <div>
            <SubmitButton type="primary">Login</SubmitButton>
          </div>
        </Form>
      </Formik>
  );
};

export default LoginForm

type PropsType = {
  setOnLogin: (onLogin:boolean) => void
  onSubmit: (values:FormType) => void
}

type FormType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}