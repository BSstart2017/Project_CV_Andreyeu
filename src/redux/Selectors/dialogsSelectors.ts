import { AppStateType } from "../store"

export const getDialogDataSelector = (state: AppStateType) => state.dialogsReducer.dialogData
export const getMessagesDataSelector = (state: AppStateType) => state.dialogsReducer.messagesData
