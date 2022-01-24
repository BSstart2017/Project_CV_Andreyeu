import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer"
import chatReducer from "./chat-reducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import startLoginPageReducer from "./startLoginPage-reducer";
import chessReduser from "./chess_reduser";

let rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    usersReducer,
    authReducer,
    appReducer,
    chatReducer,
    startLoginPageReducer,
    chessReduser
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionType<T> = T extends {[key : string]: (...arg: any[])=> infer U} ? U : never
export type BaseThunkType<A extends Action, P = Promise<void>> = ThunkAction<P, AppStateType, unknown, A>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
