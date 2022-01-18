import React, {FC} from "react";
import style from "./Message.module.css";

const Message: FC<PropsType> = ({message}) => {
  return <div className={style.message}>{message}</div>
}

export default Message;

type PropsType = {
  message: string
}