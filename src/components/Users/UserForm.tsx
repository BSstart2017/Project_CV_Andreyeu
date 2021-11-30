import React from 'react';
import { Formik, Form, Field } from 'formik';

const validateForm = () => {
  const errors = {};
  return errors;
}

const UserForm: React.FC<UserFilterPropsType> = React.memo(({onFilterChange}) => {
  const onSubmitValue = (values: formType, { setSubmitting }: {setSubmitting :  (isSubmitting: boolean) => void }) => {
    const filter : UserFilterFormDataType ={
      term : values.term,
      friend : values.friend === "null" ? null : values.friend === "true" ? true : false
    }
    onFilterChange(filter)
    setSubmitting(false);
  }
  return (
    <div>
        <Formik
          initialValues={{ term: '', friend: "null" }} 
          validate={validateForm}
          onSubmit={onSubmitValue}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="term" />
              <Field name="friend" as="select">
                <option value="null">All users</option>
                <option value="true">Only followed</option>
                <option value="false">Only unfolowed</option>
              </Field>
              <button type="submit" disabled={isSubmitting}>
                Find
              </button>
            </Form>
          )}
        </Formik>
      </div>
  )
})

export default UserForm;

type formType = {
  term: string
  friend: "true" | "null" | "false"
}

export type UserFilterFormDataType = {
  term: string
  friend: null | boolean
}

type UserFilterPropsType = {
  onFilterChange: (filter: UserFilterFormDataType) => void
}