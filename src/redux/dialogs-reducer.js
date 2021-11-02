const SEND_MESSAGE = "SEND_MESSAGE"
const NEW_MESSAGE_TEXT ="NEW_MESSAGE_TEXT"

let defaultState =  {
  dialogData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Serg" },
    { id: 3, name: "Alisa" },
    { id: 4, name: "Palina" },
    { id: 5, name: "Andrei" },
    { id: 6, name: "Misha" },
  ],
  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "world my name" },
    { id: 3, message: "nice to meat you" },
    { id: 4, message: "housewife" },
  ],
  newMessageText: ''
}

const dialogsReducer = (state = defaultState, action) => {
  switch (action.type){
    case SEND_MESSAGE :
      let newItemMessage = {
        id: 5, message: state.newMessageText
      }
      state.messagesData.push(newItemMessage)
      state.newMessageText = ''
      return state
    case NEW_MESSAGE_TEXT : 
      state.newMessageText = action.newMessage
    return state
    default : 
      return state
  }
}
    

export const sendMessageAC = () => ({type : SEND_MESSAGE})
export const newMessageTextAC = (message) => ({type : NEW_MESSAGE_TEXT, newMessage: message})

export default dialogsReducer;
