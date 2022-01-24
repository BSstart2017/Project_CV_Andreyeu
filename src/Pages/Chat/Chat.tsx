import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import Messages from "./Messages";
import AddMessageForm from "./AddMessageForm";

const Chat: React.FC = () => {

    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chatReducer.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return <div>
        {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        <>
            <Messages/>
            <AddMessageForm onSubmit={values => {}}/>
        </>
    </div>
}

export default Chat