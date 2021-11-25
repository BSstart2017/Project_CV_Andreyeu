import { InferActionType } from "./store"

let defaultState =  {
  dialogData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Serg" },
    { id: 3, name: "Alisa" },
    { id: 4, name: "Palina" },
    { id: 5, name: "Andrei" },
    { id: 6, name: "Misha" },
  ] as Array<DialogDataType>,
  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "world my name" },
    { id: 3, message: "nice to meat you" },
    { id: 4, message: "housewife" },
  ]as Array<MessageDataType>
}

const dialogsReducer = (state = defaultState, action : ActionType) : defaultStateType => {
  switch (action.type){
    case "dialogs/Aliaksandr_Andreyeu/SEND_MESSAGE" :
      let newItemMessage = {
        id: 5, message: action.newMessageText
      }
      return {...state,
        messagesData: [...state.messagesData, newItemMessage],
      }
    default : 
      return state
  }
}

export const actions = {
  addMessage : (newMessageText: string) => ({type : 'dialogs/Aliaksandr_Andreyeu/SEND_MESSAGE', newMessageText} as const)
}

export default dialogsReducer;



type defaultStateType = typeof defaultState
type ActionType = InferActionType<typeof actions>

export type DialogDataType = { 
  id: number
  name: string
}

export type MessageDataType = { 
  id: number
  message: string
}

