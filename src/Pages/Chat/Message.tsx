import React from "react";
import {ChatMessageAPIType} from "../../api/chat-api";

const Message: React.FC<PropsType> = React.memo( ({message}) => {
    return <div>
        <img src={message.photo} style={{width: '30px'}} alt='noPhoto'/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
})

export default Message

type PropsType = {
    message: ChatMessageAPIType
}