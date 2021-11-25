import React from "react";
import { Form, InjectedFormProps, reduxForm } from "redux-form";
import { createNewFieldForm, Input } from "../commons/FormControl/FormControl";
import { maxLengthControl, requireMy } from "../../utils/validators/validators";

const maxLength40 = maxLengthControl(40)

const LoginForm : React.FC<InjectedFormProps<LoginFormDataType,OwnPropsType> & OwnPropsType> = ({handleSubmit, error, captcha}) => {
  return (
    <Form onSubmit={handleSubmit}>
      {createNewFieldForm<FormatDataKeysType>(Input, [requireMy, maxLength40],"Email", "email" )}
      {createNewFieldForm<FormatDataKeysType>(Input, [requireMy, maxLength40],"Password", "password", {type:"password"} )}
      {createNewFieldForm<FormatDataKeysType>(Input, [],"", "rememberMe", {type:"checkbox"}, "rememberMe" )}
      {captcha && <div>
        <div>
          <img src={captcha} alt="noPhoto" />
        </div>
        {createNewFieldForm<FormatDataKeysType>(Input, [requireMy],"Please write captcha img", "captcha")}
        </div>}
      {error && <div>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </Form>
  );
};

export default reduxForm<LoginFormDataType,OwnPropsType>({ form: "Login" })(LoginForm)

type OwnPropsType = {
  captcha : string | null
}

type FormatDataKeysType = Extract<keyof LoginFormDataType, string>

export type LoginFormDataType ={
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}