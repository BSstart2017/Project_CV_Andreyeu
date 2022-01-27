import chatReducer, {
    actions,
    ChatMessageType,
    DefaultStateType, newMessageHandlerCreator,
    sendMessage,
    startMessagesListening, statusChangedHandlerCreator, stopMessagesListening
} from "../chat-reducer";
import {StatusType, chatAPI, ChatMessageAPIType} from "../../api/chat-api";
import WS from "jest-websocket-mock";

const server = new WS("ws://localhost:1234");
const client = new WebSocket("ws://localhost:1234");

jest.mock('../../api/chat-api')

const dispatchMock = jest.fn();
const getStateMock = jest.fn()

let state = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
} as DefaultStateType

const MessagesReceived: Array<ChatMessageAPIType> = [{
    message: 'Hello',
    photo: 'avatar',
    userId: 4278,
    userName: 'Missio'
}]

describe('chatReducer actions',()=>{
  it('chatReducer actions.statusChanged', () => {
    let action = actions.statusChanged('ready')
    let newState = chatReducer(state,action)
    expect(newState.status).toBe('ready')
  })
    it('chatReducer actions.messagesReceived', async () => {
    let action = actions.messagesReceived(MessagesReceived)
    let newState = chatReducer(state,action)
    expect(newState.messages[0].userId).toBe(MessagesReceived[0].userId)
  })
})

describe ('chatReducer thunk', ()=>{
  it('chatReducer sendMessage', async () =>{
      await server.connected;
      client.send("hello");
      await expect(server).toReceiveMessage("hello");
      expect(server).toHaveReceivedMessages(["hello"]);
      chatAPI.sendMessage('Hello gays')
    const thunk = sendMessage('Hello gays')
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(0)
  })
    it('chatReducer startMessagesListening', async () =>{
        await server.connected;
        chatAPI.start()
        chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatchMock))
        chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatchMock))
        const thunk = startMessagesListening()
        await thunk(dispatchMock, getStateMock, {})
        expect(dispatchMock).toBeCalledTimes(0)
    })
    it('chatReducer stopMessagesListening', async () =>{
        await server.connected;
        chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatchMock))
        chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatchMock))
        chatAPI.stop()
        const thunk = stopMessagesListening()
        await thunk(dispatchMock, getStateMock, {})
        expect(dispatchMock).toBeCalledTimes(0)
    })
})


