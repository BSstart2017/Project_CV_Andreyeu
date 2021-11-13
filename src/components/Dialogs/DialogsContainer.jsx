import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapPropsToState = (state) => {

  return {
    newMessageText: state.dialogsReducer.newMessageText,
    dialogData: state.dialogsReducer.dialogData,
    messagesData: state.dialogsReducer.messagesData
  }
}

export default compose(
  connect(mapPropsToState, {addMessage} ), withAuthRedirect)(Dialogs)
