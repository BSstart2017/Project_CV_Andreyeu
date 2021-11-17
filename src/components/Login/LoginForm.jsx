import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { Input } from "./../commons/FormControl/FormControl";
import { maxLengthControl, requireMy } from "../../utils/validators/validators";

const maxLength40 = maxLengthControl(40)

const LoginForm = ({handleSubmit, error}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Field component={Input} validate={[requireMy, maxLength40]} placeholder="Email" name="email"></Field>
      </div>
      <div>
        <Field component={Input} validate={[requireMy, maxLength40]} placeholder="Password" name="password" type="password"></Field>
      </div>
      <div>
        <Field component="input" name="rememberMe" type="checkbox"></Field>rememberMe
      </div>
      {error && <div>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </Form>
  );
};

export default reduxForm({ form: "Login" })(LoginForm);