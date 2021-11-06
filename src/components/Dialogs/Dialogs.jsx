import React from "react";
import DialogItem from "./DialogItems/DialogItems";
import style from "./Dialogs.module.css";
import Message from "./Messages/Message";

const Dialogs = (props) => {

  let dialogElement = props.dialogData.map( el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
  let messageElement = props.messagesData.map( el => <Message message={el.message} id={el.id} key={el.id}/>)

  const onAddMessage = () => props.addMessage()
  const onNewMessageBody = event => props.newMessageBody(event.target.value)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogElement}
      </div>
      <div className={style.messages}>
        <div>{messageElement}</div>
        <div><textarea placeholder="Please write new message!" onChange={onNewMessageBody} value={props.newMessageText} /></div>
        <div><button onClick={onAddMessage}>Send message</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
