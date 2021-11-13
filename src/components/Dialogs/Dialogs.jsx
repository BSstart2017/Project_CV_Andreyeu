import React from "react";
import DialogItem from "./DialogItems/DialogItems";
import style from "./Dialogs.module.css";
import DialogsReduxForm from "./DialogsForm";
import Message from "./Messages/Message";

const Dialogs = (props) => {

  let dialogElement = props.dialogData.map( el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
  let messageElement = props.messagesData.map( el => <Message message={el.message} id={el.id} key={el.id}/>)

  let onSubmit = (formData) => {
    props.addMessage(formData.newMessageText)
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogElement}
      </div>
      <div className={style.messages}>
        <div>{messageElement}</div>
        <DialogsReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;
