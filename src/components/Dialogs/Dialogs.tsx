import React, {FC} from "react";
import DialogItem from "./DialogItems/DialogItem";
import style from "./Dialogs.module.css";
import DialogsReduxForm from "./DialogsForm";
import Message from "./Messages/Message";
import {useSelector} from "react-redux";
import {getDialogDataSelector, getMessagesDataSelector} from "../../redux/Selectors/dialogsSelectors";

const Dialogs: FC = () => {
  const dialogData = useSelector(getDialogDataSelector)
  const messagesData = useSelector(getMessagesDataSelector)

  let dialogElement = dialogData.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
  let messageElement = messagesData.map(el => <Message message={el.message} key={el.id}/>)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogElement}
      </div>
      <div className={style.messages}>
        <div>{messageElement}</div>
          <DialogsReduxForm onSubmit={(values => {})}/>
      </div>
    </div>
  );
};

export default Dialogs;