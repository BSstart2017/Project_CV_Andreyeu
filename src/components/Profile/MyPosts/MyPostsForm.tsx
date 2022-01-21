import React from "react";
import { Form, Input, SubmitButton } from 'formik-antd'
import { Formik } from 'formik'
import {actions} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";



const MyPostsForm: React.FC<PropsType> = ({onSubmit}) => {

    const dispatch = useDispatch()

    const handleSubmit = (values: FormType) => {
        onSubmit(values)
        dispatch(actions.setAddPostSuccess(values.newTextBody))
    }

  return (
      <Formik<FormType> initialValues={{newTextBody:''}} onSubmit={handleSubmit}>
          <Form >
              <Input aria-label='newTextBody' name='newTextBody' placeholder="Your post"/>
              <div>
                  <SubmitButton type={"primary"}>Add new Post</SubmitButton>
              </div>
          </Form>
      </Formik>

  )
}

export default MyPostsForm;


type FormType = {
  newTextBody: string
}

type PropsType = {
    onSubmit: (values: FormType) => void
}