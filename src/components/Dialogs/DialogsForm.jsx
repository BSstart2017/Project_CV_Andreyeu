import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { TextArea } from "../../hoc/FormControl/FormControl";
import { maxLengthControl, requireMy } from "../../utils/validators/validators";
import style from "./Dialogs.module.css";

const maxLength = maxLengthControl(300);

const DialogsForm = (props) => {

  return (
    <Form onSubmit={props.handleSubmit}>
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

let DialogsReduxForm = reduxForm({form: "dialogsMessages"})(DialogsForm)

export default DialogsReduxForm;
