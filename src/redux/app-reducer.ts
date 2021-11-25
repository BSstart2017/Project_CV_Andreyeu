import { getAuthUser } from "./auth-reducer"
import {InferActionType } from "./store"

let defaultState = {
  initialized : false
}

const appReducer = (state = defaultState, action: ActionType) : initializeStateType => {
  switch (action.type){
    case "app/Aliaksandr_Andreyeu/INITIALIZED_SUCCESS" :
      return {...state,
        initialized: true
      }
    default:
      return state
  }
}

export const actions = {
   setLoginUser: () => ({type : 'app/Aliaksandr_Andreyeu/INITIALIZED_SUCCESS'} as const)
}

export const initializedApp = () => (dispatch:any) => {
      let promise = dispatch(getAuthUser())

      Promise.all([promise]).then(()=>{
        dispatch(actions.setLoginUser())
      }) 
}


export default appReducer;

type ActionType = InferActionType<typeof actions>
type initializeStateType =  typeof defaultState