import React from "react";
import DialogItem from "./DialogItems/DialogItems";
import style from "./Dialogs.module.css";
import DialogsReduxForm, {DialogFormDataType} from "./DialogsForm";
import Message from "./Messages/Message";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {actions} from "../../redux/dialogs-reducer";

const Dialogs: React.FC = () => {

  //TODO: create Selectrors and index
  const dialogData = useSelector((state: AppStateType) => state.dialogsReducer.dialogData)
  const messagesData = useSelector((state : AppStateType) => state.dialogsReducer.messagesData)

  const dispatch = useDispatch()

  let dialogElement = dialogData.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
  let messageElement = messagesData.map(el => <Message message={el.message} key={el.id}/>)

  let onSubmit = (formData: DialogFormDataType) => {
    dispatch(actions.addMessage(formData.newMessageText))
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogElement}
      </div>
      <div className={style.messages}>
        <div>{messageElement}</div>
        <DialogsReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default Dialogs;