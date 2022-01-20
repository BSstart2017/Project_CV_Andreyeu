import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCaptchaSelector} from "../../redux/Selectors/authSelector";
import {getLogin} from "../../redux/auth-reducer";
import { Form, Input, SubmitButton } from 'formik-antd'
import { Formik } from 'formik'

const LoginForm: React.FC<PropsType> = ({onSubmit, setOnLogin}) => {

  const captcha = useSelector(getCaptchaSelector)

  const dispatch = useDispatch()

  const handleSubmit = (values: FormType) => {
    onSubmit(values)
    dispatch(getLogin(values.email, values.password, values.rememberMe, values.captcha))
    setOnLogin(false)
  }
  return (
      <Formik<FormType> initialValues={{email:'', captcha:'', password:'', rememberMe: false}} onSubmit={handleSubmit}>
        <Form >
          <Input name='email' aria-label='email' placeholder='Email' type={"email"}/>
          <Input name='password' aria-label='password' placeholder='Password' type={"password"}/>
          <Input name='rememberMe' aria-label='rememberMe' type={"checkbox"}/>
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