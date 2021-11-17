const SEND_MESSAGE = "dialogs/Aliaksandr_Andreyeu/SEND_MESSAGE"

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
  ]
}

const dialogsReducer = (state = defaultState, action) => {
  switch (action.type){
    case SEND_MESSAGE :
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
    

export const addMessage = (newMessageText) => ({type : SEND_MESSAGE, newMessageText})

export default dialogsReducer;
