import React from "react";
import {Form, InjectedFormProps, reduxForm} from "redux-form";
import {createNewFieldForm, TextArea} from "../../commons/FormControl/FormControl";
import {maxLengthControl, requireMy} from "../../../utils/validators/validators";

const maxLength10 = maxLengthControl(10)

const MyPostsForm: React.FC<InjectedFormProps<MyPostFormDataType>> = ({handleSubmit}) => {

  return (
    <Form onSubmit={handleSubmit}>
      {createNewFieldForm<FormatDataKeysType>(TextArea, [requireMy, maxLength10], "Your post", "newTextBody")}
      <div>
        <button>Add new Post</button>
      </div>
    </Form>
  );
};
//todo: formik + antd
const MyPostsReduxForm = reduxForm<MyPostFormDataType>({form: "myPosts"})(MyPostsForm);

export default MyPostsReduxForm;

type FormatDataKeysType = Extract<keyof MyPostFormDataType, string>

export type MyPostFormDataType = {
  newTextBody: string
}