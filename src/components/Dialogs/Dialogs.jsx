import React from "react";
import { newMessageTextAC, sendMessageAC } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItems/DialogItems";
import style from "./Dialogs.module.css";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  let dialogElement = props.state.dialogData.map( el => <DialogItem name={el.name} id={el.id}/>)
  let messageElement = props.state.messagesData.map( el => <Message message={el.message} id={el.id}/>)

  const addMessage = () => props.dispatch(sendMessageAC())
  const newMessageBody = event => props.dispatch(newMessageTextAC(event.target.value))

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogElement}
      </div>
      <div className={style.messages}>
        <div>{messageElement}</div>
        <div><textarea placeholder="Please write new message!" onChange={newMessageBody} value={props.state.newMessageText} /></div>
        <div><button onClick={addMessage}>Send message</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
