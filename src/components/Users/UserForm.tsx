import React, {FC} from 'react';
import {Formik} from 'formik';
import {Form, Input, SubmitButton, Select} from 'formik-antd'

const validateForm = () => {
    const errors = {};
    return errors;
}

const UserForm: FC<PropsType> = React.memo(({onFilterChange, onSubmit}) => {

    const handleSubmit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        onSubmit(values)
        const filter: UserFilterFormDataType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        onFilterChange(filter)
        setSubmitting(false);
    }
    return (
        <div>
            <Formik<FormType>
                initialValues={{term: '', friend: "null"}}
                validate={validateForm}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Input aria-label='term' type="text" name="term"/>
                        <Select name='friend' defaultValue="friend">
                            <Select.Option value="null">All users</Select.Option>
                            <Select.Option value="true">Only followed</Select.Option>
                            <Select.Option value="false">Only unfolowed</Select.Option>
                        </Select>
                        <SubmitButton type={"primary"} disabled={isSubmitting}>Find</SubmitButton>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default UserForm;

type FormType = {
    term: string
    friend: "true" | "null" | "false"
}

export type UserFilterFormDataType = {
    term: string
    friend: null | boolean
}

type PropsType = {
    onFilterChange: (filter: UserFilterFormDataType) => void
    onSubmit: (values: FormType) => void
}