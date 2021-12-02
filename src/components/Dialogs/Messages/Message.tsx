import React, {FC} from "react";
import style from "./Message.module.css";

const Message: FC<MessagePropsType> = ({message}) => {
  return (<div className={style.message}>{message}</div>)
}

export default Message;

type MessagePropsType = {
  message: string
}