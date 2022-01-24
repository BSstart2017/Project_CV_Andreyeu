import React, {ChangeEvent} from "react";
import { Form, Input, SubmitButton } from 'formik-antd'
import {Formik, FormikHelpers} from 'formik'
import {actions} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getNewTextBodySelector} from "../../../redux/Selectors/profileSelector";


const MyPostsForm: React.FC<PropsType> = ({onSubmit}) => {

    const newTextBody = useSelector(getNewTextBodySelector)
    const dispatch = useDispatch()

    const onChangeNewTextBody = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.setNewMessageSuccess(e.currentTarget.value))
    }

    const handleSubmit = (values: FormType, formikHelpers: FormikHelpers<FormType>) => {
        onSubmit(values)
        dispatch(actions.setAddPostSuccess(values.newTextBody))
        formikHelpers.setSubmitting(false)
    }

  return (
      <Formik<FormType> initialValues={{newTextBody:''}} onSubmit={handleSubmit}>
          <Form >
              <Input aria-label='newTextBody' name='newTextBody' placeholder="Your post" value={newTextBody}
                     onChange={onChangeNewTextBody}/>
              <div>
                  <SubmitButton  type={"primary"}>Add new Post</SubmitButton>
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