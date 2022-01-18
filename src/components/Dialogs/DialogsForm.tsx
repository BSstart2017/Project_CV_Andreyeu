import React from "react";
import { Form, Input, SubmitButton } from 'formik-antd'
import { Formik } from 'formik'
import {actions} from "../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";

const DialogsForm: React.FC<PropsType> = ({onSubmit}) => {
    const dispatch = useDispatch()
    const handleSubmit = (formData: FormType) => {
        dispatch(actions.addMessage(formData.newMessageText))
        onSubmit(formData)
    }
  return (
      <Formik<FormType> initialValues={{ newMessageText:''}} onSubmit={handleSubmit}>
    <Form>
        <Input aria-label='newMessageText' name='newMessageText' placeholder='Please write new message!' />
        <SubmitButton>Send message</SubmitButton>
    </Form>
      </Formik>
  );
};
export default DialogsForm

type PropsType = {
    onSubmit : (values : FormType) => void
}

type FormType = {
  newMessageText: string
}
