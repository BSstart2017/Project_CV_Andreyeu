import { getAuthUser } from "./auth-reducer"

const INITIALIZED_SUCCESS = "app/Aliaksandr_Andreyeu/INITIALIZED_SUCCESS"

let defaultState = {
  initialized : false
}

const appReducer = (state = defaultState, action) => {
  switch (action.type){
    case INITIALIZED_SUCCESS:
      return {...state,
        initialized: true
      }
    default:
      return state
  }
}

export const setLoginUser = () => ({type : INITIALIZED_SUCCESS})

export const initializedApp = () => (dispatch) => {
      let promise = dispatch(getAuthUser())

      Promise.all([promise]).then(()=>{
        dispatch(setLoginUser())
      }) 
}


export default appReducer;
