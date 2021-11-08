import { connect } from "react-redux";
import { addMessage, newMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapPropsToState = (state) => {

  return {
    newMessageText: state.dialogsReducer.newMessageText,
    dialogData: state.dialogsReducer.dialogData,
    messagesData: state.dialogsReducer.messagesData
  }
}

const DialogsContainer = connect(mapPropsToState, {addMessage, newMessageBody} )(Dialogs)

export default DialogsContainer;
