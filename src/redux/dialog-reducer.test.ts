import dialogsReducer, {actions, defaultStateType, DialogDataType, MessageDataType} from "./dialogs-reducer";

let state =  {
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
}as defaultStateType

describe('dialogsReducer actions',()=>{
  it('dialogsReducer actions.setAuthUserSuccess', () => {
    let action = actions.addMessage('TestText')
    let newState = dialogsReducer(state,action)
    expect(newState.messagesData.length).toBe(5)
    expect(newState.messagesData[4].message).toBe('TestText')
  })
})

