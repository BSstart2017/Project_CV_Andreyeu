import React from "react";
import {Form, InjectedFormProps, reduxForm} from "redux-form";
import {createNewFieldForm, TextArea} from "../commons/FormControl/FormControl";
import {maxLengthControl, requireMy} from "../../utils/validators/validators";

const maxLength = maxLengthControl(300);

const DialogsForm: React.FC<InjectedFormProps<DialogFormDataType>> = ({handleSubmit}) => {

  return (
    <Form onSubmit={handleSubmit}>
      {createNewFieldForm<FormatDataKeysType>(TextArea, [requireMy, maxLength],
        "Please write new message!", "newMessageText")}
      <div>
        <button>Send message</button>
      </div>
    </Form>
  );
};
// todo: formik + antd
export default reduxForm<DialogFormDataType>({form: "dialogsMessages"})(DialogsForm)

export type DialogFormDataType = {
  newMessageText: string
}
type FormatDataKeysType = Extract<keyof DialogFormDataType, string>