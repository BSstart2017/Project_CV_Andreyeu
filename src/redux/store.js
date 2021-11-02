import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer"

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer
})

let store = createStore(reducers);

export default store;