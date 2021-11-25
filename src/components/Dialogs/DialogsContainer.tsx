import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions, DialogDataType, MessageDataType } from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/store";
import Dialogs from "./Dialogs";

let mapPropsToState = (state : AppStateType): DialogsStateToPropsType => {
  return {
    dialogData: state.dialogsReducer.dialogData,
    messagesData: state.dialogsReducer.messagesData
  }
}

export default compose<React.ComponentType>(
  connect<DialogsStateToPropsType, DialogsDispatchToPropsType, {} , AppStateType>(mapPropsToState, {addMessage : actions.addMessage} ), withAuthRedirect)(Dialogs)


  
export type DialogsStateToPropsType = {
    dialogData: Array<DialogDataType>
    messagesData: Array<MessageDataType>
  }

export type DialogsDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
  }