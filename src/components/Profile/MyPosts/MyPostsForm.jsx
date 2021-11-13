import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { TextArea } from "../../../hoc/FormControl/FormControl";
import { maxLengthControl, requireMy } from "../../../utils/validators/validators";
//import style from "./MyPosts.module.css";

const maxLength10 = maxLengthControl(10)

const MyPostsForm = (props) => {

  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea} validate={[requireMy, maxLength10 ]} name="newTextBody" />
      </div>
      <div>
        <button>Add new Post</button>
      </div>
    </Form>
  );
};

const MyPostsReduxForm = reduxForm({ form: "myPosts" })(MyPostsForm);

export default MyPostsReduxForm;
