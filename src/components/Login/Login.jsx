import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, Form, reduxForm } from "redux-form";
import { Input } from "../../hoc/FormControl/FormControl";
import { maxLengthControl, requireMy } from "../../utils/validators/validators";
import {getLogin} from "./../../redux/auth-reducer"

const maxLength40 = maxLengthControl(40)

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} validate={[requireMy, maxLength40]} placeholder="Email" name="email"></Field>
      </div>
      <div>
        <Field component={Input}  validate={[requireMy, maxLength40]} placeholder="Password" name="password" type="password"></Field>
      </div>
      <div>
        <Field component="input" name="rememberMe" type="checkbox"></Field>rememberMe
      </div>
      {props.error && <div>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </Form>
  );
};

const LoginReduxForm = reduxForm({ form: "Login" })(LoginForm);

const Login = (props) => { 

  const onSubmit = (formData) => {
    props.getLogin(formData.email, formData.password, formData.rememberMe)
  };

  if(props.isLogin) return <Redirect to="profile/" />

  return (
    <div>
      <div>
        <span>Login</span>
      </div>
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
 return {
  isLogin: state.authReducer.isLogin
 }
}


export default connect(mapStateToProps,{getLogin})(Login)
