import React, {ChangeEvent, FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../redux/chat-reducer";
import {getStatusSelector} from "../../redux/Selectors/chatSelector";
import {Formik} from "formik";
import {Form, Input, SubmitButton} from "formik-antd";

const AddMessageForm: FC<PropsType> = React.memo(({onSubmit}) => {
    const status = useSelector(getStatusSelector)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const onSetMessage = (e:ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }

    const handleSubmit = (values: FormType) => {
        onSubmit(values)
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <Formik<FormType> initialValues={{message: ''}} onSubmit={handleSubmit}>
            <Form>
                <Input aria-label='message' name='message' value={message} onChange={onSetMessage}/>
                <div>
                    <SubmitButton disabled={status === 'ready' && message.length === 0} type={"primary"}>Send</SubmitButton>
                </div>
            </Form>
        </Formik>
    )
})

export default AddMessageForm

type FormType = {
    message: string
}

type PropsType = {
    onSubmit: (values: FormType) => void
}