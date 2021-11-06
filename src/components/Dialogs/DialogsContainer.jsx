import { connect } from "react-redux";
import { newMessageTextAC, sendMessageAC } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapPropsToState = (state) => {

  return {
    newMessageText: state.dialogsReducer.newMessageText,
    dialogData: state.dialogsReducer.dialogData,
    messagesData: state.dialogsReducer.messagesData
  }
}

let mapDispatchToState = (dispatch) => {
  return {
    addMessage : () => {
      dispatch(sendMessageAC())
    },
    newMessageBody : (body) => {
      dispatch(newMessageTextAC(body))
    }
  }
}

const DialogsContainer = connect(mapPropsToState, mapDispatchToState )(Dialogs)

export default DialogsContainer;
