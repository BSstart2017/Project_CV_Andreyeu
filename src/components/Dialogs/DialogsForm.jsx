import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { TextArea } from "./../commons/FormControl/FormControl";
import { maxLengthControl, requireMy } from "../../utils/validators/validators";

const maxLength = maxLengthControl(300);

const DialogsForm = ({handleSubmit}) => {

  return (
    <Form onSubmit={handleSubmit}>
        <div>
        <Field component={TextArea} validate={[requireMy, maxLength]} 
        name="newMessageText" placeholder="Please write new message!"  />
        </div>
        <div>
        <button>Send message</button>
        </div>
    </Form>
  );
};

export default reduxForm({form: "dialogsMessages"})(DialogsForm);
