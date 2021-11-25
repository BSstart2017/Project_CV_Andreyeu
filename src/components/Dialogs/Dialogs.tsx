import React from "react";
import DialogItem from "./DialogItems/DialogItems";
import style from "./Dialogs.module.css";
import { DialogsDispatchToPropsType, DialogsStateToPropsType } from "./DialogsContainer";
import DialogsReduxForm, { DialogFormDataType } from "./DialogsForm";
import Message from "./Messages/Message";

const Dialogs : React.FC<DialogsStateToPropsType & DialogsDispatchToPropsType> = ({dialogData, messagesData, addMessage}) => {

  let dialogElement = dialogData.map( el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
  let messageElement = messagesData.map( el => <Message message={el.message} key={el.id}/>)

  let onSubmit = (formData : DialogFormDataType)  => {
    addMessage(formData.newMessageText)
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